import numpy as np, wave
SR=44100; DUR=20.0; N=int(SR*DUR)
rng=np.random.default_rng(7)
BEAT=0.5
def midi(m): return 440*2**((m-69)/12)
def env(n,a=0.005,d=0.3,s=0.0,r=0.05,hold=None):
    t=np.arange(n)/SR; e=np.minimum(1,t/max(a,1e-4))
    dec=s+(1-s)*np.exp(-(t-a)/max(d,1e-4)); e=np.where(t<a,e,dec)
    if hold is not None:
        e=e*np.clip(1-(t-hold)/r,0,1)
    return e
def lp(x,fc,q=1.0):
    X=np.fft.rfft(x); f=np.fft.rfftfreq(len(x),1/SR)
    return np.fft.irfft(X/np.sqrt(1+(f/fc)**(2*2*q)),len(x))
def hp(x,fc):
    X=np.fft.rfft(x); f=np.fft.rfftfreq(len(x),1/SR)
    return np.fft.irfft(X*(1/np.sqrt(1+(fc/np.maximum(f,1))**4)),len(x))
def add(buf,sig,t,g=1.0):
    i=int(t*SR); j=min(N,i+len(sig)); buf[i:j]+=g*sig[:j-i]
def saw(f,n,det=0.0):
    t=np.arange(n)/SR; out=0
    for d in (-det,0,det):
        ph=(t*f*(1+d))%1; out=out+(2*ph-1)
    return out/3
tri=lambda f,n:2*np.abs(2*((np.arange(n)/SR*f)%1)-1)-1
sine=lambda f,n:np.sin(2*np.pi*f*np.arange(n)/SR)

music=np.zeros(N); drums=np.zeros(N); sfx=np.zeros(N)
# Am7 - Fmaj7 - C - G, one chord per bar (2s)
CH=[[57,60,64,67],[53,57,60,64],[48,55,60,64],[43,55,59,62]]
ROOT=[45,41,48,43]
for bar in range(10):
    t0=bar*2.0; c=CH[bar%4]
    n=int(2.3*SR)
    pad=sum(saw(midi(m),n,0.004) for m in c)/4
    pad=lp(pad,1400 if bar>=1 else 900)*env(n,a=0.25,d=2.0,s=0.8,r=0.3,hold=2.0)
    add(music,pad,t0,0.16)
    # bass 8ths from 3s
    for k in range(8):
        tt=t0+k*0.25
        if tt<3.0: continue
        if tt>=19.0: continue
        bn=int(0.24*SR); f=midi(ROOT[bar%4]-12 if k%2==0 else ROOT[bar%4])
        b=(sine(f,bn)*0.8+lp(saw(f,bn),500)*0.5)*env(bn,a=0.004,d=0.16,s=0.3,r=0.05,hold=0.19)
        add(music,b,tt,0.30 if k%2==0 else 0.18)
    # plucks arpeggio from 11s
    if 11<=t0<19:
        arp=c+[c[1]+12]
        for k in range(8):
            m=arp[[0,2,1,3,4,2,3,1][k]]+12
            pn=int(0.3*SR)
            pl=lp(saw(midi(m),pn),2600)*env(pn,d=0.12)
            add(music,pl,t0+k*0.25,0.06)
# drums
def kick():
    n=int(0.35*SR); t=np.arange(n)/SR
    f=45+110*np.exp(-t*30); ph=2*np.pi*np.cumsum(f)/SR
    return np.sin(ph)*np.exp(-t*9)
def hat():
    n=int(0.06*SR); return hp(rng.standard_normal(n),7000)*env(n,a=0.001,d=0.018)
def clap():
    n=int(0.25*SR); x=lp(hp(rng.standard_normal(n),900),5000)
    e=env(n,a=0.002,d=0.08)
    return x*e
K=kick(); H=hat(); C=clap()
for b in range(40):
    tt=b*BEAT
    if tt<3.0:
        if b in (0,4): add(drums,K,tt,0.35)
        continue
    if tt>=19.0: break
    add(drums,K,tt,0.55)
    add(drums,H,tt+0.25,0.07)
    if tt>=7 and b%2==1: add(drums,C,tt,0.16)
    if tt>=11: add(drums,H,tt+0.125,0.03); add(drums,H,tt+0.375,0.03)
# final hit
add(drums,K,19.0,0.6)
n=int(1.0*SR)
final=sum(saw(midi(m),n,0.004) for m in [45,57,60,64,71])/5
add(music,lp(final,2000)*env(n,a=0.005,d=0.6),19.0,0.18)

# ---- SFX (in key, same room) ----
def swell(t_end,length=0.5,g=0.08):
    n=int(length*SR); x=rng.standard_normal(n)
    x=lp(hp(x,400),3000)*np.linspace(0,1,n)**2
    add(sfx,x,t_end-length,g)
for t in (3,7,11,15): swell(t,0.45,0.10)
def bell(m,t,g,d=0.5):
    n=int(1.2*SR); x=sine(midi(m),n)+0.3*sine(midi(m)*2.0,n)+0.1*sine(midi(m)*3.01,n)
    add(sfx,x*env(n,a=0.003,d=d),t,g)
# hook words: A C E G (A minor)
for i,m in enumerate([69,72,76,79]): bell(m,0.12+i*0.14,0.05,0.25)
for i,m in enumerate([81,79,76,72]): bell(m,1.2+i*0.12,0.045,0.3)
# reveal pieces
bell(76,3.45,0.05); bell(81,4.0,0.05)  # portrait, bitcoin pop
# card drops: soft pitched thumps
def thump(m,t,g):
    n=int(0.3*SR); tt=np.arange(n)/SR
    f=midi(m)*(1+0.5*np.exp(-tt*40)); ph=2*np.pi*np.cumsum(f)/SR
    add(sfx,np.sin(ph)*np.exp(-tt*14),t,g)
for i,m in enumerate([57,60,64]): thump(m,7.9+i*0.3,0.22); bell(m+24,7.9+i*0.3,0.03,0.2)
# typing ticks during reasoning
for k in range(14):
    t=11.6+k*0.057+rng.uniform(0,0.02)
    n=int(0.02*SR); add(sfx,lp(hp(rng.standard_normal(n),2000),6000)*env(n,a=0.0005,d=0.004),t,0.05)
# counters: gentle rising blips
for k,m in enumerate([69,72,76]): bell(m+12,11.5+k*0.2,0.025,0.1)
# click
n=int(0.03*SR); add(sfx,lp(rng.standard_normal(n),4000)*env(n,a=0.0005,d=0.006),12.62,0.14)
thump(69,12.62,0.12)
bell(76,12.78,0.04); bell(81,12.9,0.04)   # result logged
# stamp
thump(45,13.3,0.35); bell(72,13.3,0.05,0.4)
# star + outro
bell(81,15.6,0.06,0.8); bell(88,15.75,0.04,0.8)
thump(57,16.3,0.12)

# ---- mix: shared room reverb ----
def reverb(x,rt=1.2,g=0.25):
    n=int(rt*SR); ir=rng.standard_normal(n)*np.exp(-np.arange(n)/SR*6.9/rt)
    ir=lp(ir,4000); ir/=np.sqrt((ir**2).sum())
    L=len(x)+n; y=np.fft.irfft(np.fft.rfft(x,L)*np.fft.rfft(ir,L),L)[:len(x)]
    return y*g
bus=music+sfx*0.9
wet=reverb(bus+drums*0.15,1.4,0.35)
# sidechain-ish duck of music by kick
duck=np.ones(N)
for b in range(6,38):
    i=int(b*BEAT*SR); m=int(0.2*SR)
    duck[i:i+m]=np.minimum(duck[i:i+m],1-0.35*np.exp(-np.arange(m)/SR*18))
mix=music*duck+sfx*0.9+drums+wet
mix=hp(mix,30)
# fade in/out
fi=int(0.02*SR); mix[:fi]*=np.linspace(0,1,fi)
fo=int(1.0*SR); mix[-fo:]*=np.linspace(1,0,fo)**1.5
# soft clip + normalize
mix=mix/np.max(np.abs(mix))*1.3; mix=np.tanh(mix); mix=mix/np.max(np.abs(mix))*0.89
# slight stereo width from reverb
L=mix+0.03*np.roll(wet,113); R=mix-0.03*np.roll(wet,113)
st=np.stack([L,R],1); st=st/np.max(np.abs(st))*0.89
w=wave.open('audio.wav','wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((st*32767).astype('<i2').tobytes()); w.close()
print('ok', np.sqrt((st**2).mean()))
