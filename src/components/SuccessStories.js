export function renderSuccessStories() {
  const stories = [
    {
      name: "Starlight Clinic",
      type: "Hospital",
      result: "Efficiency +40%",
      text: "DataNova's CRM system revolutionized how we track patient records. Our team is faster and more focused."
    },
    {
      name: "FounderX",
      type: "Startup",
      result: "Traffic +200%",
      text: "The UI/UX and SEO work they did transformed our brand identity. We've scaled beyond our expectations."
    }
  ];

  const storiesHtml = stories.map(s => `
    <div class="glass-neo border-l-4 border-cyan-500 p-6 relative overflow-hidden group hover:bg-cyan-500/10 transition-all duration-300 animate-slide-up">
      <div class="flex justify-between items-start mb-4">
        <div>
          <h4 class="retro-heading text-xs text-cyan-400 mb-1">${s.name}</h4>
          <span class="text-[0.6rem] text-slate-500 uppercase tracking-widest">${s.type}</span>
        </div>
        <div class="bg-cyan-500/20 px-2 py-1 border border-cyan-500/30">
          <span class="retro-heading text-[0.6rem] text-cyan-400 animate-pulse">${s.result}</span>
        </div>
      </div>
      <p class="text-slate-300 text-sm italic font-light leading-relaxed">"${s.text}"</p>
      <!-- Background icon -->
      <div class="absolute -bottom-2 -right-2 text-white/5 text-4xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
        <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
      </div>
    </div>
  `).join('');

  return `
    <div class="py-24 bg-neo-bg relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <span class="retro-heading text-[0.6rem] text-pink-500 tracking-[0.2em] mb-2 block animate-pulse">// QUESTS_COMPLETED</span>
          <h2 class="retro-heading text-3xl text-white">HALL OF <span class="neon-text-pink">FAME</span></h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${storiesHtml}
        </div>
      </div>
    </div>
  `;
}
