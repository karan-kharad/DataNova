var e=Object.defineProperty,t=(e,t)=>()=>(e&&(t=e(e=0)),t),n=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),r=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=t((()=>{}));function a(){return`
    <nav class="sticky top-0 z-50 glass border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div class="w-12 h-12 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-300 transform group-hover:scale-105 border border-purple-500/30">
              <img src="/logo.jpeg" alt="DataNova Logo" class="w-full h-full object-cover" />
            </div>
            <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tight">DataNova.co</span>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#hero-container" class="text-gray-300 hover:text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#services-container" class="text-gray-300 hover:text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#footer-container" class="text-gray-300 hover:text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              <button class="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.8)] transition-all transform hover:-translate-y-1">
                Start Quest
              </button>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="-mr-2 flex md:hidden">
            <button id="mobile-menu-btn" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-purple-500">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden glass border-t border-slate-800">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#hero-container" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#services-container" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#footer-container" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          <button class="w-full text-left bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 rounded-md text-base font-medium mt-4">
            Start Quest
          </button>
        </div>
      </div>
    </nav>
  `}var o=t((()=>{}));function s(){return`
    <div class="relative overflow-hidden min-h-[90vh] flex items-center">
      <!-- Background Effects -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] animate-pulse-glow" style="animation-delay: 1s;"></div>
        <!-- Grid pattern overlay -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <!-- Text Content -->
          <div class="text-center lg:text-left space-y-8 animate-popIn">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-400 text-sm font-semibold uppercase tracking-wider mb-4">
              <span class="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
              Level Up Your Business
            </div>
            
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span class="block text-slate-100">Power Up Your</span>
              <span class="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mt-2">Digital Presence</span>
            </h1>
            
            <p class="mt-4 text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We craft high-performance websites, AI assistants, CRM, and management software designed specifically to help new founders, small businesses, and clinics conquer their market.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all transform hover:-translate-y-1">
                Explore Services
              </button>
              <button onclick="document.getElementById('chatbot-toggle').click()" class="glass hover:bg-slate-800 text-slate-200 border border-slate-700 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 group">
                <span>Talk to Nova AI</span>
                <svg class="w-5 h-5 text-purple-400 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
              </button>
            </div>
          </div>

          <!-- Hero Graphic / Floating Element -->
          <div class="hidden lg:flex justify-center relative">
             <div class="w-full max-w-md aspect-square relative animate-float">
                <!-- A futuristic glowing orb / 3D element placeholder -->
                <div class="absolute inset-0 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-3xl transform rotate-12 opacity-20 blur-xl"></div>
                <div class="absolute inset-4 glass-card rounded-3xl border border-white/10 flex items-center justify-center flex-col overflow-hidden">
                   <!-- Dashboard snippet mockup inside the card -->
                   <div class="w-full h-12 border-b border-white/10 flex items-center px-4 gap-2">
                     <div class="w-3 h-3 rounded-full bg-red-500"></div>
                     <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div class="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div class="p-6 w-full flex-grow flex flex-col gap-4">
                     <div class="h-8 bg-slate-700/50 rounded w-1/3"></div>
                     <div class="h-32 bg-slate-700/30 rounded w-full border border-slate-600/50 relative overflow-hidden">
                       <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
                       <svg class="absolute bottom-0 w-full h-24 text-purple-500/50 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]" preserveAspectRatio="none" viewBox="0 0 100 100"><path d="M0 100 Q 25 50 50 80 T 100 20 L 100 100 Z" fill="currentColor"/></svg>
                     </div>
                     <div class="flex gap-4">
                       <div class="h-16 bg-cyan-500/20 rounded flex-1 border border-cyan-500/30"></div>
                       <div class="h-16 bg-purple-500/20 rounded flex-1 border border-purple-500/30"></div>
                     </div>
                   </div>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  `}var c=t((()=>{}));function l(){return`
    <div class="py-24 bg-slate-900 relative border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-2">Our Arsenal</h2>
          <h3 class="text-4xl md:text-5xl font-extrabold text-white">Choose Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Power-Ups</span></h3>
          <p class="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">Equip your business with the ultimate digital tools to dominate your industry.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${[{id:`web`,title:`Web Development`,desc:`High-performance, gamified websites that convert visitors into loyal clients.`,icon:`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,color:`from-blue-500 to-cyan-400`},{id:`uiux`,title:`UI & UX Design`,desc:`Intuitive, game-like interfaces designed specifically for maximum engagement.`,icon:`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>`,color:`from-purple-500 to-pink-500`},{id:`crm`,title:`CRM Solutions`,desc:`Manage your leads and patients effectively with customized management systems.`,icon:`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`,color:`from-green-400 to-emerald-600`},{id:`seo`,title:`SEO Mastery`,desc:`Dominate search rankings and level up your local presence effortlessly.`,icon:`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`,color:`from-yellow-400 to-orange-500`},{id:`software`,title:`Management Software`,desc:`Automate your daily clinic or business tasks to save time and reduce errors.`,icon:`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,color:`from-indigo-500 to-purple-600`},{id:`ai`,title:`AI Agents & Chatbots`,desc:`Deploy smart virtual assistants to engage clients 24/7 like a pro companion.`,icon:`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>`,color:`from-red-500 to-rose-600`}].map(e=>`
    <div class="group relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer">
      <!-- Glow effect on hover -->
      <div class="absolute inset-0 bg-gradient-to-br ${e.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      
      <div class="relative z-10">
        <div class="w-16 h-16 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br ${e.color} opacity-20"></div>
          ${e.icon}
        </div>
        <h3 class="text-2xl font-bold text-slate-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${e.color} transition-all">${e.title}</h3>
        <p class="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">${e.desc}</p>
      </div>
      
      <!-- 'Equip' button style for gamification -->
      <div class="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
         <span class="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
            Equip <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
         </span>
      </div>
    </div>
  `).join(``)}
        </div>
      </div>
    </div>
  `}var u=t((()=>{})),d=r({initChatbot:()=>f});function f(e){let t=document.getElementById(`chatbot-toggle`),n=document.getElementById(`chatbot-close`),r=document.getElementById(`chatbot-window`),i=document.getElementById(`chat-form`),a=document.getElementById(`chat-input`),o=document.getElementById(`chat-messages`),s=!1,c=()=>{if(s=!s,s){r.classList.remove(`opacity-0`,`scale-95`,`pointer-events-none`),r.classList.add(`opacity-100`,`scale-100`);let e=t.querySelector(`span.absolute`);e&&e.remove(),setTimeout(()=>a.focus(),300)}else r.classList.remove(`opacity-100`,`scale-100`),r.classList.add(`opacity-0`,`scale-95`,`pointer-events-none`)};t.addEventListener(`click`,c),n.addEventListener(`click`,c);let l=(e,t=!1)=>{let n=document.createElement(`div`);n.className=`flex gap-2 items-end max-w-[85%] animate-popIn ${t?`self-end flex-row-reverse`:``}`,t?n.innerHTML=`
        <div class="bg-gradient-to-r from-purple-600 to-cyan-500 text-white p-3 rounded-2xl rounded-br-sm text-sm shadow-md">
          ${e}
        </div>
      `:n.innerHTML=`
        <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 flex-shrink-0 border border-white/20"></div>
        <div class="bg-slate-700/80 text-slate-200 p-3 rounded-2xl rounded-bl-sm text-sm border border-slate-600 shadow-md">
          ${e}
        </div>
      `,o.appendChild(n),o.scrollTop=o.scrollHeight};i.addEventListener(`submit`,e=>{e.preventDefault();let t=a.value.trim();if(!t)return;l(t,!0),a.value=``;let n=`think-`+Date.now(),r=document.createElement(`div`);r.id=n,r.className=`flex gap-2 items-end max-w-[85%] text-slate-400 text-xs italic ml-8 animate-pulse`,r.textContent=`Nova is typing...`,o.appendChild(r),o.scrollTop=o.scrollHeight,setTimeout(()=>{document.getElementById(n).remove(),l(`Affirmative. I've logged your request into my databanks. A human agent will connect with you shortly to proceed to the next level.`)},1500)})}var p=t((()=>{}));function m(){return`
    <footer class="bg-slate-950 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
      <!-- Background Effect -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-lg overflow-hidden border border-purple-500/30">
                <img src="/logo.jpeg" alt="DataNova Logo" class="w-full h-full object-cover" />
              </div>
              <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">DataNova.co</span>
            </div>
            <p class="text-slate-400 max-w-sm mb-6">
              Empowering new founders, small businesses, and clinics with next-generation digital tools, websites, and AI assistants. Level up your operations today.
            </p>
            <div class="flex space-x-4">
              <!-- Social Icons Gamified -->
              <a href="#" class="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
                <span class="sr-only">Twitter</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-600 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="text-white font-bold mb-4">Missions</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-slate-400 hover:text-purple-400 transition-colors">Web Development</a></li>
              <li><a href="#" class="text-slate-400 hover:text-purple-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" class="text-slate-400 hover:text-purple-400 transition-colors">CRM Integration</a></li>
              <li><a href="#" class="text-slate-400 hover:text-purple-400 transition-colors">AI Chatbots</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-bold mb-4">Headquarters</h4>
            <ul class="space-y-2">
              <li class="text-slate-400">About Us</li>
              <li class="text-slate-400">Contact Support</li>
              <li class="text-slate-400">Privacy Policy</li>
              <li class="text-slate-400">Terms of Service</li>
            </ul>
          </div>

        </div>
        
        <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-sm">
            &copy; ${new Date().getFullYear()} DataNova.co. All rights reserved.
          </p>
          <div class="flex items-center gap-2 text-sm text-slate-500">
            <span>Built for Founders & Clinics</span>
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
          </div>
        </div>
      </div>
    </footer>
  `}var h=t((()=>{})),g,_,v,y,b=t((()=>{g=`modulepreload`,_=function(e){return`/`+e},v={},y=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=_(t,n),t in v)return;v[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:g,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})}}));n((()=>{i(),o(),c(),u(),h(),b(),document.addEventListener(`DOMContentLoaded`,()=>{let t=document.getElementById(`header-container`);t&&(t.innerHTML=a());let n=document.getElementById(`hero-container`);n&&(n.innerHTML=s());let r=document.getElementById(`services-container`);r&&(r.innerHTML=l());let i=document.getElementById(`footer-container`);i&&(i.innerHTML=m());let o=document.getElementById(`chatbot-container`);o&&y(async()=>{let{initChatbot:e}=await Promise.resolve().then(()=>(p(),d));return{initChatbot:e}},void 0).then(({initChatbot:e})=>{e(o)}),e()});function e(){let e=document.getElementById(`mobile-menu-btn`),t=document.getElementById(`mobile-menu`);e&&t&&e.addEventListener(`click`,()=>{t.classList.toggle(`hidden`)})}}))();