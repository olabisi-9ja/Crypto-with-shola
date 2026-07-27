import React from 'react';
import { images } from '../lib/images';

export function LandingAbout() {
  return (
    <section className="w-full py-24 bg-[#faf9f6] text-[#1c1917] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Main rooftop portrait */}
            <div className="relative w-full max-w-md h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={images.sholaRooftop} 
                alt="Shola trading and teaching" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-4 left-4 bg-[#1c1917] text-[#faf9f6] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-md">
                Active Since 2022
              </div>
            </div>

            {/* Inset Second Image */}
            <div className="absolute -bottom-10 -right-4 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block">
              <img 
                src={images.sholaAvatar2} 
                alt="Shola Mentor" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Description Text */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">About the Founder</h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Meet Shola</h3>
            
            <p className="text-stone-700 text-lg leading-relaxed mb-6 font-medium">
              Babatunde “Shola” Olusola is a chemical engineer turned certified life coach and crypto mentor. Since launching the CryptoWithShola project in 2022, he has dedicated himself to empowering young people to level up financially.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Leveraging his life coaching background, Shola combines inspirational motivation with practical crypto trading tutorials. With over 394K followers on X and a massive Telegram community, his mission is clear: to help raise a new set of millionaires in the booming Nigerian crypto scene.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8">
              <div>
                <span className="block text-3xl font-black text-amber-700">109K+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">Telegram Community</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-amber-700">394K+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">X Followers</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
