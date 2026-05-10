export function renderNavbar() {
  return `
    <nav class="sticky top-0 z-50 glass-neo border-b border-cyan-500/30">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo HUD -->
          <div class="flex items-center gap-4 cursor-pointer group">
            <div class="w-12 h-12 rounded-lg overflow-hidden border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-300">
              <img src="/logo.jpeg" alt="DataNova" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col">
              <span class="retro-heading text-white text-xs md:text-sm tracking-widest neon-text-cyan">DATANOVA</span>
              <span class="text-slate-400 text-[0.65rem] uppercase tracking-widest">System Online</span>
            </div>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#hero-container" class="retro-heading text-[0.65rem] text-slate-300 hover:text-cyan-400 transition-colors">INIT</a>
            <a href="#services-container" class="retro-heading text-[0.65rem] text-slate-300 hover:text-pink-400 transition-colors">MODULES</a>
            <a href="#footer-container" class="retro-heading text-[0.65rem] text-slate-300 hover:text-purple-400 transition-colors">UPLINK</a>
            <button class="cyber-btn ml-4">
              [ START ]
            </button>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button id="mobile-menu-btn" class="text-cyan-400 hover:text-white p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden glass-neo border-t border-cyan-500/30 p-4">
        <div class="flex flex-col space-y-4">
          <a href="#hero-container" class="retro-heading text-[0.7rem] text-slate-300 hover:text-cyan-400">INIT</a>
          <a href="#services-container" class="retro-heading text-[0.7rem] text-slate-300 hover:text-pink-400">MODULES</a>
          <a href="#footer-container" class="retro-heading text-[0.7rem] text-slate-300 hover:text-purple-400">UPLINK</a>
          <button class="cyber-btn w-full mt-4">
            [ START ]
          </button>
        </div>
      </div>
    </nav>
  `;
}
