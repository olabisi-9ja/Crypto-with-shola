import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { blogPosts } from '../lib/blogPosts';
import ReactMarkdown from 'react-markdown';

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <>
        <LandingNavbar />
        <main id="main">
          <section className="intro-band" style={{background: 'var(--ink)', color: 'white'}}>
            <h2>Post Not Found</h2>
            <p className="band-copy">The article you are looking for does not exist.</p>
            <Link className="round-link light" to="/blog" style={{marginTop: '30px', background: 'var(--acid)', color: 'var(--ink)'}}><span>Back to Blog</span><b style={{background: 'var(--ink)', color: 'white'}}>←</b></Link>
          </section>
        </main>
        <LandingFooter />
      </>
    );
  }

  return (
    <>
      <LandingNavbar />
      
      <main id="main">
        <section className="intro-band" style={{background: 'var(--paper)', color: 'var(--ink)', borderBottom: '1px solid var(--line)'}}>
          <p className="eyebrow">{post.category} / {post.date} / {post.readTime}</p>
          <h2 style={{fontSize: 'clamp(2.5rem, 6vw, 6.5rem)'}}>{post.title}</h2>
        </section>
        
        <section style={{padding: '7vw 6vw', maxWidth: '800px', margin: '0 auto'}}>
          <Link className="text-link" to="/blog" style={{display: 'inline-block', marginBottom: '40px'}}>← Back to all articles</Link>
          
          <div className="prose prose-stone prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-amber-600 prose-a:font-semibold hover:prose-a:text-amber-700" style={{fontFamily: 'var(--sans)', color: 'var(--ink)'}}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </section>
        
        <section className="final-home">
          <p className="eyebrow">Ready when you are</p>
          <h2>Level up<br />financially.</h2>
          <a className="round-link light" href="https://t.me/cryptowithshola" target="_blank" rel="noreferrer"><span>Join Free Telegram</span><b>→</b></a>
          <div className="final-star">✦</div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
