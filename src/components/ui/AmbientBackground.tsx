"use client";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
      {/* Background Grid */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border-subtle) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)',
        }}
      />
      
      {/* Ambient Glowing Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ background: 'var(--accent-primary)', opacity: 'var(--glow-opacity)' }} />
      <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" style={{ background: 'var(--accent-secondary)', opacity: 'var(--glow-opacity)' }} />
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[140px] animate-blob animation-delay-4000" style={{ background: 'var(--accent-tertiary)', opacity: 'var(--glow-opacity)' }} />
    </div>
  );
}
