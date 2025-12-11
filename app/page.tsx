'use client';
import Image from 'next/image';
import TextType from '@/components/TextType';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white selection:bg-white/20 cursor-crosshair">


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


      <div className="relative z-10 w-full p-8 md:p-12 flex justify-between items-start font-helvetica tracking-wide">
        <div className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-medium text-black">
          Sahil Raj Dubey xD
        </div>

        <nav className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-medium text-black">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-300">[ about ]</a>
          <a href="#work" className="hover:opacity-70 transition-opacity duration-300">[ work ]</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">[ resume ]</a>
          <a href="mailto:contact@example.com" className="hover:opacity-70 transition-opacity duration-300">[ let's chat ]</a>
        </nav>
      </div>

    
      <div className="absolute top-1/2 left-8 md:left-12 -translate-y-1/2 z-10 max-w-xl md:max-w-2xl text-black font-cursive tracking-wide leading-tight">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
          I create clean web designs
          <br />
          and handle data efficiently.
        </h1>
      </div>


      <div className="absolute top-1/2  md:right-0 bottom-0 -translate-y-1/2 z-10 w-8 h-150 md:w-160 md:h-200 grayscale hover:grayscale-0 transition-all duration-500">
        <Image
          src="/myphoto.png"
          alt="Sahil Raj Dubey"
          fill
          className="object-contain object-bottom md:object-right-bottom"
          priority
        />
      </div>
    </main>
  );
}
