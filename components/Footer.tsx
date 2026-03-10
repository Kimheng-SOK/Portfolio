export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 border-t dark:border-slate-800 border-slate-200 dark:bg-slate-950 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="font-bold text-base">
            Sok<span className="text-[#FF9900]">Kimheng</span>
          </span>
          <span className="dark:text-slate-500 text-slate-400 text-sm">
            © {year} All rights reserved.
          </span>
        </div>
        <div className="dark:text-slate-500 text-slate-400 text-sm">
          Designed &amp; Built with{" "}
          <span className="text-[#FF9900]">♥</span> using Next.js, Tailwind &amp; AWS
        </div>
      </div>
    </footer>
  );
}
