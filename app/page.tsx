'use client';
import TargetCursor from '@/components/TargetCursor';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white selection:bg-white/20 cursor-crosshair">
      {/* Static Background */}
          <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      
      <h1>Hover over the elements below</h1>
      <button className="cursor-target">Click me!</button>
      <div className="cursor-target">Hover target</div>
    </div>
      <div className="fixed inset-0 z-0 select-none">
        <Image
          src="/image.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>


      <div className="relative z-10 w-full p-8 md:p-12 flex justify-between items-start font-sans tracking-wide">
        <div className="text-xl md:text-2xl text-black font-cursive opacity-90">
          Sahil Raj Dubey
        </div>

        <nav className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-medium text-black">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-300">[ about ]</a>
          <a href="#work" className="hover:opacity-70 transition-opacity duration-300">[ work ]</a>
          <a href="'/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">[ resume ]</a>
          <a href="mailto:contact@example.com" className="hover:opacity-70 transition-opacity duration-300">[ let's chat ]</a>
        </nav>
      </div>
    </main>
  );
}
