#!/usr/bin/env python3
"""Build NigerAgri Farmer Connect in Google Stitch via its MCP endpoint.

Usage:  STITCH_API_KEY=... python3 build_stitch.py [--only F04,M17] [--project <id>]
Creates the project, loads DESIGN.md as the design system, then generates each
screen in screens.json. Progress is saved to stitch_state.json so reruns skip
screens that already exist.
"""
import argparse, base64, json, os, sys, time, urllib.request

ENDPOINT = "https://stitch.googleapis.com/mcp"
HERE = os.path.dirname(os.path.abspath(__file__))
STATE = os.path.join(HERE, "stitch_state.json")
KEY = os.environ.get("STITCH_API_KEY")

STYLE = ("Follow the project design system: ink-green #14201A primary, accent green #2E9E4F, "
         "restrained gold #E0A526 / orange #E8742C, white cards on #F4F5F3, 1px #D5D8D2 borders, "
         "16px card radius, Plus Jakarta Sans headings, Inter body, Lucide line icons, compact spacing. ")


def call(tool, args, timeout=600):
    body = json.dumps({"jsonrpc": "2.0", "id": 1, "method": "tools/call",
                       "params": {"name": tool, "arguments": args}}).encode()
    req = urllib.request.Request(ENDPOINT, body, {
        "Content-Type": "application/json",
        "Accept": "application/json, text/event-stream",
        "X-Goog-Api-Key": KEY})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        raw = r.read().decode()
    if raw.startswith("event:") or "\ndata:" in raw:  # SSE
        raw = [l[5:] for l in raw.splitlines() if l.startswith("data:")][-1]
    res = json.loads(raw)
    if "error" in res:
        raise RuntimeError(res["error"])
    res = res["result"]
    if res.get("isError"):
        raise RuntimeError(res["content"][0]["text"])
    return res.get("structuredContent") or json.loads(res["content"][0]["text"] or "{}")


def load_state():
    return json.load(open(STATE)) if os.path.exists(STATE) else {"screens": {}}


def save_state(s):
    json.dump(s, open(STATE, "w"), indent=1)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--only")
    ap.add_argument("--project")
    a = ap.parse_args()
    if not KEY:
        sys.exit("Set STITCH_API_KEY")
    st = load_state()
    pid = a.project or st.get("project")
    if not pid:
        p = call("create_project", {"title": "NigerAgri Farmer Connect"})
        pid = p["name"].split("/")[-1]
        st["project"] = pid
        save_state(st)
        print("project", pid)

    if "design_system" not in st:
        try:
            md = base64.b64encode(open(os.path.join(HERE, "DESIGN.md"), "rb").read()).decode()
            up = call("upload_design_md", {"projectId": pid, "designMdBase64": md})
            inst = up.get("selectedScreenInstance") or up.get("screenInstance") or up
            ds = call("create_design_system_from_design_md",
                      {"projectId": pid, "deviceType": "MOBILE", "selectedScreenInstance": inst})
            st["design_system"] = ds.get("name") or ds.get("id") or ""
        except Exception as e:  # prompts carry the style inline anyway
            print("design system step failed, continuing with inline style:", e)
            st["design_system"] = ""
        save_state(st)

    screens = json.load(open(os.path.join(HERE, "screens.json")))
    only = set(a.only.split(",")) if a.only else None
    for s in screens:
        if (only and s["id"] not in only) or s["id"] in st["screens"]:
            continue
        print(f"-> {s['id']} {s['title']}", flush=True)
        args = {"projectId": pid, "deviceType": s["device"],
                "prompt": f"{s['title']}. {STYLE}{s['prompt']}"}
        if st["design_system"]:
            args["designSystem"] = st["design_system"]
        try:
            r = call("generate_screen_from_text", args)
            st["screens"][s["id"]] = r.get("name") or r.get("screen", {}).get("name") or "generated"
        except Exception as e:
            print("   failed:", e)
            continue
        save_state(st)
        time.sleep(2)
    print(f"done: {len(st['screens'])}/{len(screens)} screens -> https://stitch.withgoogle.com/projects/{pid}")


if __name__ == "__main__":
    main()
