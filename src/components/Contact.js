export function renderContact() {
  return `
    <div id="contact" class="py-24 bg-slate-950/50 border-t border-white/5">
      <div class="max-w-3xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="retro-heading text-[0.6rem] text-purple-500 tracking-[0.2em] mb-2 block animate-pulse">// UPLINK_TERMINAL</span>
          <h2 class="retro-heading text-3xl text-white">SEND <span class="neon-text-purple">TRANSMISSION</span></h2>
        </div>
        
        <form class="glass-neo p-8 rounded-2xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="retro-heading text-[0.6rem] text-slate-400 mb-2 block tracking-widest">IDENTIFIER</label>
              <input type="text" placeholder="Your Name" class="w-full bg-black/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-all font-light" />
            </div>
            <div>
              <label class="retro-heading text-[0.6rem] text-slate-400 mb-2 block tracking-widest">COMM_LINK</label>
              <input type="email" placeholder="Email Address" class="w-full bg-black/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-all font-light" />
            </div>
          </div>
          
          <div class="mb-8">
            <label class="retro-heading text-[0.6rem] text-slate-400 mb-2 block tracking-widest">MESSAGE_LOG</label>
            <textarea rows="4" placeholder="How can we help you conquer your goals?" class="w-full bg-black/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-all font-light"></textarea>
          </div>
          
          <button type="button" class="cyber-btn-pink w-full py-4 text-sm flex items-center justify-center gap-3">
            <span>INITIATE_UPLINK</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </form>
      </div>
    </div>
  `;
}
