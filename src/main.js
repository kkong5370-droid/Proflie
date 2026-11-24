import './style.css';
import { HomePage } from './pages/home.js';
import { AboutPage } from './pages/about.js';
import { ContactPage } from './pages/contact.js';
import { AdminPage } from './pages/admin.js';

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/admin': AdminPage,
};

function getCurrentPath() {
  const rawHash = window.location.hash.replace(/^#/, '');
  return rawHash || '/';
}

function navbar(currentPath) {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/admin', label: 'Admin' },
  ];

  const linksHtml = navItems
    .map((item) => {
      const isActive = currentPath === item.path;
      const activeClass = isActive
        ? 'bg-indigo-600 text-white'
        : 'text-slate-300 hover:bg-slate-800 hover:text-white';

      return `
        <a
          href="#${item.path}"
          class="rounded-lg px-3.5 py-2 text-sm font-medium transition ${activeClass}"
        >
          ${item.label}
        </a>
      `;
    })
    .join('');

  return `
    <header class="sticky top-0 z-50 border-b border-slate-800/90 bg-slate-950/85 backdrop-blur">
      <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <a href="#/" class="text-base font-bold tracking-tight text-white flex items-center gap-2">
          <span class="h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
          <span>Profile</span>
        </a>
        <nav class="flex items-center gap-1 sm:gap-2">
          ${linksHtml}
        </nav>
      </div>
    </header>
  `;
}

function render() {
  const app = document.querySelector('#app');
  if (!app) return;

  const currentPath = getCurrentPath();
  const PageComponent = routes[currentPath] || HomePage;

  app.innerHTML = `
    ${navbar(currentPath)}
    <main>
      ${PageComponent()}
    </main>
  `;
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);