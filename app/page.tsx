'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import LogoLoop from '@/components/LogoLoop';
import { SiInstagram, SiGithub, SiLinkedin, SiDiscord, SiX } from 'react-icons/si';

export default function Home() {
    const socialLogos = [
    { node: <SiInstagram color="#000000ff" />, title: "Instagram", href: "https://www.instagram.com/sahilrajdubey_" },
    { node: <SiGithub color="#000000ff" />, title: "GitHub", href: "https://github.com/sahilrajdubey" },
    { node: <SiLinkedin color="#000000ff" />, title: "LinkedIn", href: "https://www.linkedin.com/in/sahil-raj-dubey/" },
    { node: <SiDiscord color="#000000ff" />, title: "Discord", href: "https://discord.gg/58uwPkFjJJ" },
    { node: <SiX color="#000000ff" />, title: "Instagram", href: "https://x.com/" },
    { node: <SiInstagram color="#000000ff" />, title: "Instagram", href: "https://www.instagram.com/sahilrajdubey_" },
    { node: <SiGithub color="#040303ff" />, title: "GitHub", href: "https://github.com/sahilrajdubey" },
    { node: <SiLinkedin color="#040303ff" />, title: "LinkedIn", href: "https://www.linkedin.com/in/sahil-raj-dubey/" },
    { node: <SiDiscord color="#040303ff" />, title: "Discord", href: "https://discord.gg/UFqqTbqUzE" },
    { node: <SiX color="#040303ff" />, title: "Instagram", href: "https://x.com/" },

  ];
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

        <nav className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-medium text-blue-800">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-300">[ about ]</a>
          <a href="#work" className="hover:opacity-70 transition-opacity duration-300">[ work ]</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">[ resume ]</a>
          <a href="mailto:contact@example.com" className="hover:opacity-70 transition-opacity duration-300">[ let's chat ]</a>
        </nav>
      </div>


      <div className="absolute top-100 left-8 md:left-12 -translate-y-1/2 z-10 max-w-xl md:max-w-2xl text-gray-700 font-bold font-cursive tracking-wide leading-tight">
            <h1 className="text-4xl md:text-1xl lg:text-4xl text-blue-800 mb-6">
        @Hey , I'm Sahil Raj Dubey
      </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
          <TypeAnimation
            sequence={[

              'I craft modern web apps and build scalable solutions.',
              2000,

            ]}
            wrapper="span"
            speed={50}
            repeat={1}
          />
        </h1>

      </div>


      <div className="absolute top-[calc(50%+15rem)] left-8 md:left-0 z-10 w-[calc(50%-4rem)]">
        <div className="relative overflow-hidden">
          {/* Left Fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
               style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, transparent 80%)' }} />
          {/* Right Fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
               style={{ background: 'linear-gradient(to left, rgba(249, 249, 249, 0.96) 0%, transparent 80%)'  }} />
        
          <LogoLoop 
          logos={socialLogos}
          speed={110}
          direction="left"
          logoHeight={40}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut={true}
          fadeOutColor="rgba(0,0,0,0)"
          ariaLabel="Social Media Links"
          />
        </div>
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
