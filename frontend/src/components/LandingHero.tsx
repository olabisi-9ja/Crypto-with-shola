import React from 'react';
import { ArrowRight, MessageSquare, Play, ShieldAlert } from 'lucide-react';
import { CryptoCanvas } from './CryptoCanvas';
import { images } from '../lib/images';

export function LandingHero() {
  return (
    <header className="relative w-full min-h-screen bg-[#faf9f6] text-[#1c1917] overflow-hidden pt-28 pb-16 flex items-center">
      {/* 3D background elements */}
      <div className="absolute right-0 top-1/4 w-full md:w-1/2 h-[500px] pointer-events-none opacity-40 md:opacity-100 z-0">
        <CryptoCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-xs font-black tracking-widest uppercase mb-6 border border-amber-500/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
              Live Trading & Mentorship
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              Simplifying <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 font-serif italic font-normal">Crypto</span> <br />
              With Shola
            </h1>

            <p className="text-lg md:text-xl text-[#44403c] font-medium leading-relaxed max-w-xl mb-8">
              Level up financially with simple, practical crypto basics and trading tutorials. Join a massive active community led by Shola, a certified life coach turned crypto mentor.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="#pricing" 
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4.5 rounded-full bg-[#1c1917] text-[#faf9f6] font-bold text-base hover:opacity-90 transition-opacity shadow-lg"
              >
                Get Started Today <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/cryptowithshola" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4.5 rounded-full bg-[#faf9f6] border-2 border-[#1c1917]/10 text-[#1c1917] font-bold text-base hover:bg-stone-100 transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-amber-600" /> Join Free Telegram
              </a>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-12 mt-12 pt-8 border-t border-stone-200 w-full max-w-lg">
              <div>
                <span className="block text-2xl md:text-3xl font-black">109K+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Telegram Subscribers</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-black">394K+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">X/Twitter Followers</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-black">Since '22</span>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Empowering Community</span>
              </div>
            </div>
          </div>

          {/* Shola Portrait Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end z-10">
            <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src={images.sholaSuit} 
                alt="Shola — Founder and Lead Mentor" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-500" 
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-white font-black text-xl">Shola</span>
                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Founder & Lead Mentor</span>
              </div>
            </div>

            {/* Secondary Floating Asset (Avatar element) */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg hidden sm:block -rotate-6">
              <img src={images.sholaAvatar} alt="Shola Avatar" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
