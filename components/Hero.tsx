import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden perspective-1000">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-[#5E6AD2]/40 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 max-w-2xl text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for hire
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-main mb-6 leading-[1.15]">
              Crafting minimal, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-main via-text-main to-text-muted">
                high-performance
              </span> <br/>
              web interfaces.
            </h1>
            
            <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              I'm Alex, a frontend engineer specializing in building polished software experiences. I bridge the gap between design and engineering with a focus on Vue.js and React ecosystems.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-6 py-2.5 bg-text-main text-background font-medium rounded-full hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                View Work
              </button>
              <button 
                onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2.5 bg-transparent text-text-main border border-white/10 font-medium rounded-full hover:bg-white/5 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column: 3D Tilted Image (Linear Style) */}
          <div className="flex-1 w-full max-w-md relative order-1 md:order-2 flex justify-center md:justify-end">
             {/* Glow/Blur effect behind the image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-primary/20 via-purple-500/10 to-transparent blur-[60px] rounded-full pointer-events-none opacity-80"></div>
             
             {/* 3D Container */}
             <div 
                className="relative transition-transform duration-700 ease-out hover:scale-[1.02]"
                style={{
                  transform: 'perspective(1200px) rotateX(10deg) rotateY(-15deg) rotateZ(2deg)',
                  transformStyle: 'preserve-3d',
                }}
             >
                {/* App Window Frame - UPDATED: White Transparent Glass Style */}
                <div className="relative rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)]">
                  {/* Window Header / Traffic Lights */}
                  <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-inner opacity-80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-inner opacity-80"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-inner opacity-80"></div>
                  </div>

                  {/* Image Container */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                    
                    {/* Glass Sheen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-40 pointer-events-none z-20"></div>

                    {/* Profile Image */}
                    <img 
                      src="/profile.png" 
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/600x800/1A1C20/666?text=Profile";
                      }}
                      alt="Profile" 
                      className="w-full h-auto object-cover aspect-[4/5] grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none mask-gradient-to-b from-transparent via-background to-transparent z-0 opacity-20"></div>
    </section>
  );
};