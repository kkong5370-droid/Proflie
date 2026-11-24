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

function navbar() {
  return `
    <header class="border-b border-slate-800 bg-slate-900">
      <nav class="max-w-5xl mx-auto px-4 h-14 flex items-center gap-4 text-sm font-medium">
        <a href="#/" class="text-slate-200 hover:text-indigo-400">Home</a>
        <a href="#/about" class="text-slate-200 hover:text-indigo-400">About</a>
        <a href="#/contact" class="text-slate-200 hover:text-indigo-400">Contact</a>
        <a href="#/admin" class="text-slate-200 hover:text-indigo-400">Admin</a>
      </nav>
    </header>
  `;
}

function render() {
  const app = document.querySelector('#app');
  if (!app) return;

  const hash = window.location.hash.replace(/^#/, '') || '/';
  const Page = routes[hash] || HomePage;

  app.innerHTML = `
    ${navbar()}
    <main>${Page()}</main>
  `;
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);