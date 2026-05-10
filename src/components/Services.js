export function renderServices() {
  const services = [
    {
      id: "web",
      title: "WEB_DEV",
      desc: "High-performance interfaces that convert players into clients.",
      icon: `<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExajlzYzdrYzUzMnUxeWg3NWkzaWNweDk2M3p0eTFydzgwOGpueTN1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/21wM2HhPZ8A2Q/giphy.gif" alt="Web Dev" class="w-full h-full object-cover mix-blend-screen opacity-80" />`,
      color: "cyan",
      delay: "100"
    },
    {
      id: "uiux",
      title: "UI/UX_CORE",
      desc: "Cybernetic interfaces designed for maximum user engagement.",
      icon: `<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGZ3YjRyeW44OTcydXozdW5mMXd3YzgyczEzNHNveTZ0NzBvcTB2OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vR16pONsV8cKCEE/giphy.gif" alt="UI UX" class="w-full h-full object-cover mix-blend-screen opacity-80" />`,
      color: "pink",
      delay: "200"
    },
    {
      id: "crm",
      title: "CRM_SYS",
      desc: "Manage leads and patients with extreme precision.",
      icon: `<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamhzbzRncnJ2ZnE2ZXJxdnE5eTF6NWk3MXVzYmN2NWF1czl3NmNqNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPa2z352nO91R7y/giphy.gif" alt="CRM" class="w-full h-full object-cover mix-blend-screen opacity-80" />`,
      color: "green",
      delay: "300"
    },
    {
      id: "seo",
      title: "SEO_MAX",
      desc: "Dominate search rankings and level up your presence.",
      icon: `<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTV5YjE1YmR4cW16Y3MyaDRrdWc5Z3J3dnkzbjIyYWwwcTJweWwyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgzoKnwFNmISR8I/giphy.gif" alt="SEO" class="w-full h-full object-cover mix-blend-screen opacity-80" />`,
      color: "purple",
      delay: "400"
    },
    {
      id: "software",
      title: "AUTO_SOFT",
      desc: "Automate daily clinic tasks to save time and reduce errors.",
      icon: `<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTVxYmwwaWtzNGZtZ3AweWdld2d6bnFpMjByam5tZWNyc2RndmY5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif" alt="Software" class="w-full h-full object-cover mix-blend-screen opacity-80" />`,
      color: "cyan",
      delay: "500"
    },
    {
      id: "ai",
      title: "AI_AGENT",
      desc: "Deploy smart virtual assistants working 24/7 like Nova.",
      icon: `<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2pncHcwMm1yc2o3eW1oMmlxejV4d2pyOWpweXB4NHd5cXhqMjAxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11Zq52XbJntW7e/giphy.gif" alt="AI Agent" class="w-full h-full object-cover mix-blend-screen opacity-80" />`,
      color: "pink",
      delay: "600"
    }
  ];

  const getColorClass = (color) => {
    switch(color) {
      case 'cyan': return 'var(--color-neon-cyan)';
      case 'pink': return 'var(--color-neon-pink)';
      case 'purple': return 'var(--color-neon-purple)';
      case 'green': return 'var(--color-neon-green)';
      default: return 'var(--color-neon-cyan)';
    }
  };

  const cardsHtml = services.map(s => `
    <div class="group relative bg-slate-900/80 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-transparent transition-all duration-300 overflow-hidden animate-slide-up delay-${s.delay}" 
         style="animation-fill-mode: both;"
         onmouseenter="this.style.borderColor='${getColorClass(s.color)}'; this.style.boxShadow='0 0 20px ${getColorClass(s.color)}33, inset 0 0 10px ${getColorClass(s.color)}11'"
         onmouseleave="this.style.borderColor='rgba(255,255,255,0.1)'; this.style.boxShadow='none'">
      
      <!-- Top Accent Line -->
      <div class="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background-color: ${getColorClass(s.color)}; box-shadow: 0 0 10px ${getColorClass(s.color)}"></div>
      
      <div class="relative z-10 flex flex-col h-full">
        <!-- GIF Icon Box -->
        <div class="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 border border-white/5 bg-black overflow-hidden" style="box-shadow: 0 0 15px ${getColorClass(s.color)}33">
          ${s.icon}
        </div>
        
        <!-- Text -->
        <h3 class="retro-heading text-sm text-white mb-3 tracking-widest group-hover:text-transparent group-hover:bg-clip-text transition-all hover-text-glow" style="background-image: linear-gradient(to right, #fff, ${getColorClass(s.color)});">${s.title}</h3>
        <p class="text-slate-400 text-sm leading-relaxed font-light flex-grow hover-text-glow">${s.desc}</p>
        
        <!-- Action -->
        <div class="mt-8 pt-4 border-t border-white/10 flex items-center text-xs retro-heading transition-colors" style="color: ${getColorClass(s.color)}">
          > EQUIP_MODULE <span class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">_</span>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="py-24 bg-neo-bg relative z-10 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4">
        
        <div class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 animate-slide-up">
          <div>
            <span class="retro-heading text-[0.6rem] text-cyan-500 tracking-[0.2em] mb-2 block animate-pulse">// SYSTEM_ARSENAL</span>
            <h2 class="retro-heading text-3xl md:text-4xl text-white">CHOOSE YOUR <span class="neon-text-cyan">POWER-UPS</span></h2>
          </div>
          <p class="text-slate-400 text-sm max-w-sm font-light">
            Equip your business with ultimate digital tools to dominate your industry and scale exponentially.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${cardsHtml}
        </div>
        
      </div>
    </div>
  `;
}
