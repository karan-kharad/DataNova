import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderServices } from './components/Services.js';
import { renderSuccessStories } from './components/SuccessStories.js';
import { renderContact } from './components/Contact.js';
import { renderChatbot, initChatbot } from './components/Chatbot.js';
import { renderFooter } from './components/Footer.js';

// Initialize the App
document.addEventListener('DOMContentLoaded', () => {
  // Render components into their respective containers
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <header id="header-container"></header>
    <main>
      <section id="hero-container"></section>
      <section id="services-container"></section>
      <section id="stories-container"></section>
      <section id="contact-container"></section>
    </main>
    <footer id="footer-container"></footer>
    <div id="chatbot-container"></div>
  `;

  // Render components
  document.getElementById('header-container').innerHTML = renderNavbar();
  document.getElementById('hero-container').innerHTML = renderHero();
  document.getElementById('services-container').innerHTML = renderServices();
  document.getElementById('stories-container').innerHTML = renderSuccessStories();
  document.getElementById('contact-container').innerHTML = renderContact();
  document.getElementById('footer-container').innerHTML = renderFooter();
  document.getElementById('chatbot-container').innerHTML = renderChatbot();

  // Initialize interactive components
  initChatbot(document.getElementById('chatbot-container'));

  // Setup interactions (e.g. mobile menu toggle)
  setupInteractions();
  
  // Remove preloader after animation
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.remove();
    }
  }, 2600); // 2 seconds + 0.5s fade out
});

function setupInteractions() {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}
