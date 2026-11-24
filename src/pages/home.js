export function HomePage() {
  return `
    <section class="max-w-5xl mx-auto px-4 py-12">
      <div class="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h1 class="text-3xl font-bold text-white">หน้าหลัก (Home)</h1>
        <p class="mt-3 text-slate-300">ยินดีต้อนรับสู่เว็บไซต์ 4 หน้าด้วย Hash Router และ Tailwind CSS</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="#/admin" class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">
            ไปหน้า Admin
          </a>
          <a href="#/about" class="rounded-lg bg-slate-800 px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-700">
            เกี่ยวกับเรา
          </a>
          <a href="#/contact" class="rounded-lg bg-slate-800 px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-700">
            ติดต่อเรา
          </a>
        </div>
      </div>
    </section>
  `;
}