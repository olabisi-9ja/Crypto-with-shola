import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { blogPosts } from '../lib/blogPosts';
import { ArrowLeft, Calendar, Clock, BookOpen, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        <LandingNavbar />
        <main className="flex-grow pt-40 pb-24 flex items-center justify-center flex-col">
          <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
          <Link to="/blog" className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </main>
        <LandingFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <LandingNavbar />
      
      <main className="flex-grow pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
          
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-wider text-amber-600">
              <BookOpen className="w-4 h-4" />
              {post.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-8">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-medium">Shola Olusola</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          <div className="prose prose-stone prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-amber-600 prose-a:font-semibold hover:prose-a:text-amber-700">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          {/* Share / CTA section */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="bg-secondary rounded-3xl p-8 text-center flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-3">Ready to level up financially?</h3>
              <p className="text-muted-foreground mb-6 max-w-lg">
                Join our massive Telegram community to receive daily signals, lifestyle coaching, and practical tutorials directly from Shola.
              </p>
              <a 
                href="https://t.me/cryptowithshola" 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:opacity-90 transition-opacity"
              >
                Join Free Telegram
              </a>
            </div>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
