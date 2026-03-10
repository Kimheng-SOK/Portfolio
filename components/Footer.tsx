export default function Footer() {
  return (
    <footer className="relative z-10 px-6 md:px-14 py-7 border-t border-light-border dark:border-dark-border flex flex-col sm:flex-row justify-between items-center gap-4">
      <span className="text-[0.65rem] tracking-widest text-light-dim dark:text-dark-dim">
        &copy; {new Date().getFullYear()} Sok Kimheng. All rights reserved.
      </span>
      <span className="flex items-center gap-2 text-[0.65rem] tracking-widest text-light-muted dark:text-dark-muted">
        <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
        Available for opportunities
      </span>
    </footer>
  );
}
