import React from 'react';
import { Link } from 'react-router-dom';
import { LandingNavbar } from '../components/LandingNavbar';
import { LandingFooter } from '../components/LandingFooter';
import { blogPosts } from '../lib/blogPosts';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <LandingNavbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">Education</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              Level up financially with our latest articles on trading strategies, crypto fundamentals, mindset, and market updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-card text-card-foreground border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-amber-500/30 flex flex-col group">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-amber-600">
                    <BookOpen className="w-4 h-4" />
                    {post.category}
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-amber-700 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-border flex items-center justify-between text-sm text-muted-foreground mt-auto">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-full bg-secondary text-secondary-foreground font-bold hover:bg-stone-200 transition-colors"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
