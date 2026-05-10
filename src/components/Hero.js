export function renderHero() {
  return `
    <div class="relative overflow-hidden min-h-[90vh] flex items-center justify-center pt-10 pb-20">
      
      <!-- Video Background -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoplay 
          loop 
          muted 
          playsinline 
          class="absolute min-w-full min-h-full object-cover opacity-30 mix-blend-screen filter contrast-125"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-background-27898-large.mp4" type="video/mp4" />
        </video>
        <!-- Overlay gradients to make text readable -->
        <div class="absolute inset-0 bg-neo-bg/70 backdrop-blur-sm"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-neo-bg/50 to-neo-bg"></div>
      </div>

      <!-- Cyberpunk Background Elements (Over Video) -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <!-- Glowing Orbs -->
        <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen animate-float-neo"></div>
        <div class="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen animate-float-neo" style="animation-delay: -2s;"></div>
        <!-- Grid overlay -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div class="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        
        <!-- Top Label with Slide Up -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8 backdrop-blur-sm animate-slide-up delay-100">
          <span class="w-2 h-2 rounded-full bg-cyan-400 animate-blink shadow-[0_0_8px_#06b6d4]"></span>
          <span class="retro-heading text-[0.55rem] text-cyan-400 tracking-[0.2em]">SYSTEM_VERSION: 2.0_ONLINE</span>
        </div>
        
        <!-- Main Title with Slide Up & Gradient Animation -->
        <h1 class="retro-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up delay-200">
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-gradient-x mb-2 hover-text-glow">POWER UP</span>
          <span class="block neon-text-pink animate-pulse hover-text-glow">YOUR BUSINESS</span>
        </h1>
        
        <!-- Description with Typewriter Effect -->
        <div class="max-w-2xl mx-auto mb-10 overflow-hidden">
          <p class="text-slate-300 text-lg md:text-xl leading-relaxed font-light animate-typewriter delay-300 inline-block text-left hover-text-glow" style="animation-fill-mode: forwards;">
            We craft high-performance websites, AI assistants, and software to help you conquer your market.
          </p>
        </div>
        
        <!-- Action Buttons with Slide Up -->
        <div class="flex flex-col sm:flex-row gap-6 items-center animate-slide-up delay-400">
          <button class="cyber-btn-pink w-full sm:w-auto">
            INITIALIZE_MODULES
          </button>
          <button onclick="document.getElementById('chatbot-toggle').click()" class="cyber-btn w-full sm:w-auto flex items-center justify-center gap-3">
            <span>UPLINK_TO_NOVA</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </button>
        </div>
        
      </div>
      
      <!-- Bottom fading scanline -->
      <div class="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 shadow-[0_0_10px_#06b6d4]"></div>
    </div>
  `;
}
