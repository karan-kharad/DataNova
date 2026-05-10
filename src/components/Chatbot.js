
export function renderChatbot() {
  return `
    <!-- Floating Action Button -->
    <button id="chatbot-toggle" class="fixed bottom-6 right-6 w-16 h-16 bg-slate-900 border-2 border-purple-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-105 transition-all duration-300 z-50 group">
      <!-- Robot Avatar -->
      <div class="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-purple-400 transition-colors">
        <img src="/pixel_avatar.png" alt="Nova AI" class="w-full h-full object-cover" />
      </div>
      <!-- Notification Dot -->
      <span class="absolute top-0 right-0 flex h-4 w-4">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 border border-slate-900"></span>
      </span>
    </button>

    <!-- Chat Window -->
    <div id="chatbot-window" class="fixed bottom-28 right-6 w-80 sm:w-96 max-h-[75vh] flex flex-col z-50 transform scale-95 opacity-0 pointer-events-none transition-all duration-300 origin-bottom-right rounded-xl glass-neo neon-box-purple overflow-hidden">
      
      <!-- Chat Header -->
      <div class="p-4 border-b border-purple-500/30 flex items-center justify-between bg-slate-900/80">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg overflow-hidden border border-purple-500/50 flex-shrink-0 bg-black">
             <img src="/pixel_avatar.png" alt="Nova Avatar" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col">
            <h4 class="retro-heading text-[0.65rem] text-white tracking-widest neon-text-purple">NOVA_SUPPORT</h4>
            <span class="text-[0.6rem] text-cyan-400 flex items-center gap-1 uppercase tracking-wider font-light">
              <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block animate-pulse shadow-[0_0_5px_#06b6d4]"></span> AI_AGENT_ACTIVE
            </span>
          </div>
        </div>
        <button id="chatbot-close" class="text-slate-400 hover:text-white transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <!-- Chat Messages -->
      <div id="chat-messages" class="flex-grow p-4 overflow-y-auto flex flex-col gap-4 bg-slate-950/50 scroll-smooth">
        <!-- AI Message -->
        <div class="flex gap-2 items-end max-w-[85%]">
          <div class="w-8 h-8 rounded-md overflow-hidden flex-shrink-0 border border-purple-500/30 shadow-md bg-black">
            <img src="/pixel_avatar.png" alt="Nova" class="w-full h-full object-cover" />
          </div>
          <div class="bg-slate-800 border border-slate-700 text-slate-200 p-3 rounded-2xl rounded-bl-sm text-sm shadow-md font-light">
            Greetings! I am Nova, DataNova's Support AI. How can I assist you with your system today?
          </div>
        </div>
      </div>

      <!-- Chat Input -->
      <div class="p-3 border-t border-purple-500/30 bg-slate-900/80">
        <form id="chat-form" class="flex items-center gap-2">
          <input type="text" id="chat-input" placeholder="Enter query..." class="flex-grow bg-black/50 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-slate-600 font-light" autocomplete="off" />
          <button type="submit" class="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white flex items-center justify-center transition-all shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]">
            <svg class="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
          </button>
        </form>
      </div>
    </div>
  `;
}

export function initChatbot(container) {
  const toggleBtn = document.getElementById('chatbot-toggle');
  const closeBtn = document.getElementById('chatbot-close');
  const windowEl = document.getElementById('chatbot-window');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const messagesArea = document.getElementById('chat-messages');

  let isOpen = false;

  let chatHistory = [
    {
      role: "user",
      parts: [{ text: "You are Nova, the Customer Support AI Agent for DataNova.co. Your primary role is to provide excellent customer support, answer questions about our services (Web Development, UI/UX, CRM, SEO, Management Software, and AI Agents), help clients troubleshoot issues, and guide them to contact human support if needed. Be polite, helpful, and professional, while maintaining a tech-savvy tone. Always try to directly answer the user's question." }]
    },
    {
      role: "model",
      parts: [{ text: "Understood. I am Nova, the Customer Support AI Agent. I am ready to answer questions and assist our clients." }]
    }
  ];

  const toggleChat = () => {
    isOpen = !isOpen;
    if (isOpen) {
      windowEl.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
      windowEl.classList.add('opacity-100', 'scale-100');
      const notif = toggleBtn.querySelector('span.absolute');
      if (notif) notif.remove();
      setTimeout(() => input.focus(), 300);
    } else {
      windowEl.classList.remove('opacity-100', 'scale-100');
      windowEl.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    }
  };

  toggleBtn.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  const addMessage = (text, isUser = false) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex gap-2 items-end max-w-[85%] animate-popIn ${isUser ? 'self-end flex-row-reverse' : ''}`;
    
    if (isUser) {
      msgDiv.innerHTML = `
        <div class="bg-cyan-900/40 border border-cyan-500/50 text-cyan-50 p-3 rounded-2xl rounded-br-sm text-sm shadow-[0_0_10px_rgba(6,182,212,0.2)] font-light">
          ${text}
        </div>
      `;
      messagesArea.appendChild(msgDiv);
      messagesArea.scrollTop = messagesArea.scrollHeight;
    } else {
      msgDiv.innerHTML = `
        <div class="w-8 h-8 rounded-md overflow-hidden flex-shrink-0 border border-purple-500/30 shadow-md bg-black">
          <img src="/pixel_avatar.png" alt="Nova" class="w-full h-full object-cover" />
        </div>
        <div class="bg-slate-800 border border-slate-700 text-slate-200 p-3 rounded-2xl rounded-bl-sm text-sm shadow-md font-light response-text">
        </div>
      `;
      messagesArea.appendChild(msgDiv);
      
      const textContainer = msgDiv.querySelector('.response-text');
      if (text.includes('<strong')) {
         textContainer.innerHTML = text; 
         messagesArea.scrollTop = messagesArea.scrollHeight;
      } else {
        let i = 0;
        const typeInterval = setInterval(() => {
          textContainer.textContent += text.charAt(i);
          i++;
          messagesArea.scrollTop = messagesArea.scrollHeight;
          if (i >= text.length) clearInterval(typeInterval);
        }, 15);
      }
    }
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    
    addMessage(val, true);
    input.value = '';
    
    chatHistory.push({ role: "user", parts: [{ text: val }] });
    
    const thinkingId = 'think-' + Date.now();
    const thinkingMsg = document.createElement('div');
    thinkingMsg.id = thinkingId;
    thinkingMsg.className = 'flex gap-2 items-end max-w-[85%] text-purple-400 text-xs italic ml-10 animate-pulse font-light';
    thinkingMsg.textContent = 'Processing request...';
    messagesArea.appendChild(thinkingMsg);
    messagesArea.scrollTop = messagesArea.scrollHeight;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: chatHistory })
      });

      const data = await response.json();
      document.getElementById(thinkingId).remove();

      if (data.error) throw new Error(data.error.message || "API Error");

      const aiText = data.candidates[0].content.parts[0].text;
      const formattedText = aiText.replace(/\\*\\*(.*?)\\*\\*/g, '<strong class="text-white font-semibold">$1</strong>');
      
      addMessage(formattedText);
      chatHistory.push({ role: "model", parts: [{ text: aiText }] });

    } catch (error) {
      document.getElementById(thinkingId).remove();
      const errorMsg = error.message || "Unknown error";
      addMessage(`⚠️ System Glitch: ${errorMsg}`);
      console.error("Chat Error:", error);
      chatHistory.pop();
    }
  });
}
