export function renderFooter() {
  return `
    <footer class="bg-neo-bg pt-16 pb-8 border-t border-cyan-500/20 relative overflow-hidden z-10">
      
      <!-- Background Glow -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-10 h-10 rounded-lg overflow-hidden border border-cyan-500/30">
                <img src="/logo.jpeg" alt="DataNova" class="w-full h-full object-cover" />
              </div>
              <span class="retro-heading text-sm text-white tracking-widest neon-text-cyan">DATANOVA.CO</span>
            </div>
            <p class="text-slate-400 text-sm max-w-sm mb-6 font-light leading-relaxed">
              Empowering founders & clinics with next-generation digital tools. Level up your operations today.
            </p>
          </div>

          <div>
            <h4 class="retro-heading text-[0.65rem] text-cyan-400 mb-4 tracking-widest">// MISSIONS</h4>
            <ul class="space-y-3 font-light text-sm">
              <li><a href="#" class="text-slate-400 hover:text-white hover:text-shadow-[0_0_5px_#fff] transition-all">Web Development</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white hover:text-shadow-[0_0_5px_#fff] transition-all">UI/UX Design</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white hover:text-shadow-[0_0_5px_#fff] transition-all">CRM Systems</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white hover:text-shadow-[0_0_5px_#fff] transition-all">AI Agents</a></li>
            </ul>
          </div>

          <div>
            <h4 class="retro-heading text-[0.65rem] text-pink-400 mb-4 tracking-widest">// HQ_LINKS</h4>
            <ul class="space-y-3 font-light text-sm">
              <li><a href="#" class="text-slate-400 hover:text-white hover:text-shadow-[0_0_5px_#fff] transition-all">About Us</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white hover:text-shadow-[0_0_5px_#fff] transition-all">Contact Support</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white hover:text-shadow-[0_0_5px_#fff] transition-all">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
        
        <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-xs font-light">
            &copy; ${new Date().getFullYear()} DATANOVA.CO. ALL RIGHTS RESERVED.
          </p>
          <div class="flex items-center gap-2 text-xs text-slate-500 font-light">
            <span>SYSTEM_STATUS: <span class="text-green-400">OPTIMAL</span></span>
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#10b981] animate-pulse"></span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
