import React from 'react';
import { Link } from 'react-router-dom';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { blogPosts } from '../lib/blogPosts';

export function BlogPage() {
  return (
    <>
      <LandingNavbar />
      
      <main id="main">
        {/* Header */}
        <section className="intro-band" style={{background: 'var(--orange)', color: 'var(--ink)'}}>
          <p className="eyebrow" style={{color: 'var(--ink)'}}>Insights & Education</p>
          <h2 style={{color: 'var(--ink)'}}>From the<br /><span>notebook.</span></h2>
          <p className="band-copy">Level up financially with our latest articles on trading strategies, crypto fundamentals, mindset, and market updates.</p>
        </section>

        {/* Blog Grid */}
        <section className="notes-section">
          <div className="notes-grid">
            {blogPosts.map((post, i) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`} 
                className={`note ${i % 3 === 1 ? 'note-invert' : ''}`}
                style={i % 3 === 1 ? {background: 'var(--ink)', color: 'white'} : {}}
              >
                <span>{String(i + 1).padStart(2, '0')} / {post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <b>Read note →</b>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <LandingFooter />
    </>
  );
}
