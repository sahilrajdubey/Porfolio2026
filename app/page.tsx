'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import LogoLoop from '@/components/LogoLoop';
import { SiInstagram, SiGithub, SiLinkedin, SiDiscord } from 'react-icons/si';
import CircularGallery from '@/components/CircularGallery';
import RotatingText from '@/components/RotatingText';
import TextPressure from '@/components/TextPressure';
import ProjectCard from '@/components/ProjectCard';
import { useState, useEffect } from 'react';
import { getProjectVideos, ProjectVideo } from '@/lib/contentful';

export default function Home() {
  const [bgPhase, setBgPhase] = useState<'landing' | 'black' | 'main'>('landing');
  const [projects, setProjects] = useState<ProjectVideo[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;

      const scrollY = window.scrollY;
      const aboutTop = aboutSection.offsetTop;
      const aboutHeight = aboutSection.offsetHeight;

      // Calculate split point (halfway through about section)
      // Adjust offset checks to better match visual breaks if needed
      if (scrollY < aboutTop - 100) { // Keep landing bg until close to about
        setBgPhase('landing');
      } else if (scrollY < aboutTop + aboutHeight / 100
      ) {
        setBgPhase('black');
      } else {
        setBgPhase('main');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjectVideos();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale"
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];
  const socialLogos = [
    { node: <SiInstagram color="#ffffffff" />, title: "Instagram", href: "https://www.instagram.com/sahilrajdubey_" },
    { node: <SiGithub color="#ffffffff" />, title: "GitHub", href: "https://github.com/sahilrajdubey" },
    { node: <SiLinkedin color="#ffffffff" />, title: "LinkedIn", href: "https://www.linkedin.com/in/sahil-raj-dubey/" },
    { node: <SiDiscord color="#ffffffff" />, title: "Discord", href: "https://discord.gg/58uwPkFjJJ" },

  ];
  return (
    <>
      {/* SVG Filter Definition for Rough Paper Edge */}
      <svg className="hidden">
        <defs>
          <filter id="roughpaper">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
        </defs>
      </svg>

      {/* Landing Page Section */}
      <section className="relative h-screen w-full overflow-hidden text-white selection:bg-white/20 pb-8 md:pb-32">


        <div className="fixed inset-0 z-0 select-none bg-black transition-colors duration-700 h-full w-full">
          {/* Layer 1: Background Landing Image (bgimage.png) */}
          <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${bgPhase === 'landing' ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/bgimage.png"
              alt="Background Landing"
              fill
              priority
              className="object-cover object-center"
              quality={100}
            />
          </div>


          {/* Layer 3: Overlay Image (myphoto4.png) - Hidden on mobile */}
          <div className={`hidden md:block absolute top-20 bottom-[-1px] right-[-30%] xs:right-[-25%] sm:right-[-10%] md:right-[-5%] lg:right-[-3%] w-[300px] xs:w-[350px] sm:w-[450px] md:w-[650px] lg:w-[800px] transition-opacity duration-700 ease-in-out ${bgPhase === 'landing' ? 'opacity-20 xs:opacity-30 sm:opacity-60 md:opacity-100' : 'opacity-0'}`}>
            <Image
              src="/myphoto4.png"
              alt="Overlay Photo"
              fill
              priority
              className="object-contain object-bottom"
              quality={100}
            />
          </div>

          {/* Layer 4: Black Background (Actually just showing the parent bg-black when others are transparent, but we can be explicit or just rely on opacity) */}
          {/* If both images are opacity-0, the background color of the parent div (bg-black) shows through.
              Since bgPhase 'black' sets both images to opacity 0, we get the black background. 
          */}

          {/* Layer 5: Main Image (image.jpg) */}
          <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${bgPhase === 'main' ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/image.jpg"
              alt="Background Main"
              fill
              priority
              className="object-cover object-center"
              quality={100}
            />
          </div>
        </div>


        <div className="relative z-50 w-full px-4 py-4 md:px-8 lg:px-12 md:py-6 flex justify-between items-center pointer-events-none">
          <div className="flex items-center gap-3 md:gap-6 text-xs sm:text-sm md:text-base font-semibold text-white pointer-events-auto tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-[family-name:var(--font-inter)] tracking-wider">Sahil Raj Dubey xD</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 text-xs sm:text-sm md:text-base font-medium text-white/90 pointer-events-auto font-[family-name:var(--font-inter)]">
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }} className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer tracking-wide">[about]</a>
            <a href="#work" onClick={(e) => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }} className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer tracking-wide">[work]</a>
            <a
              href="https://drive.google.com/uc?export=download&id=1jcJVFavLjZRXA556DFqE8P3iUBM2K1lt"
              className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer tracking-wide"
              download
            >
              [resume]
            </a>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }} className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer tracking-wide">[chat]</a>
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                menu.classList.toggle('translate-x-full');
              }
            }}
            className="md:hidden pointer-events-auto p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          id="mobile-menu"
          className="md:hidden fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg z-[100] transform translate-x-full transition-transform duration-300 ease-in-out"
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) {
                    menu.classList.add('translate-x-full');
                  }
                }}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-6 px-8 py-4 font-[family-name:var(--font-inter)]">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  document.getElementById('mobile-menu')?.classList.add('translate-x-full');
                }}
                className="text-white/90 hover:text-white text-lg font-medium tracking-wide transition-all duration-300"
              >
                [about]
              </a>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                  document.getElementById('mobile-menu')?.classList.add('translate-x-full');
                }}
                className="text-white/90 hover:text-white text-lg font-medium tracking-wide transition-all duration-300"
              >
                [work]
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1jcJVFavLjZRXA556DFqE8P3iUBM2K1lt"
                className="text-white/90 hover:text-white text-lg font-medium tracking-wide transition-all duration-300"
                download
                onClick={() => {
                  document.getElementById('mobile-menu')?.classList.add('translate-x-full');
                }}
              >
                [resume]
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  document.getElementById('mobile-menu')?.classList.add('translate-x-full');
                }}
                className="text-white/90 hover:text-white text-lg font-medium tracking-wide transition-all duration-300"
              >
                [chat]
              </a>
            </nav>
          </div>
        </div>


        {/* Mobile Layout - Photo at top center in circle */}
        <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center z-40 px-4 pt-1">
          {/* Circular Photo - Larger and Higher */}
          <div className="w-65 h-65 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mb-8">
            <Image
              src="/wpbgmp.png"
              alt="Sahil Raj Dubey"
              width={800}
              height={800}
              priority
              className="object-cover w-full h-full"
              quality={100}
            />
          </div>

          {/* Content Below Photo */}
          <div className="space-y-4 w-full max-w-md">
            {/* Main Heading */}
            <div className="space-y-1">
              <div className="overflow-visible pb-1">
                <TypeAnimation
                  sequence={[
                    'Hey There, It\'s Sahil Raj Dubey',
                    3000,
                    'Hey There, It\'s Sahil Raj Dubey',
                  ]}
                  wrapper="h1"
                  speed={50}
                  className="text-2xl xs:text-3xl font-bold text-white tracking-tight leading-tight text-center"
                  style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '-0.02em' }}
                  repeat={0}
                  cursor={true}
                />
              </div>
            </div>

            {/* Role Tags */}
            <div className="flex flex-nowrap gap-1.5 justify-center">
              <span className="px-2 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[10px] text-white/80 font-medium hover:bg-white/10 transition-all duration-300 whitespace-nowrap" style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Full-Stack Developer
              </span>
              <span className="px-2 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[10px] text-white/80 font-medium hover:bg-white/10 transition-all duration-300 whitespace-nowrap" style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Data Science
              </span>
              <span className="px-2 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[10px] text-white/80 font-medium hover:bg-white/10 transition-all duration-300 whitespace-nowrap" style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Tech Enthusiast
              </span>
            </div>

            {/* Description */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl blur-xl"></div>
              <p className="relative text-xs text-white/70 leading-relaxed backdrop-blur-sm bg-white/5 p-3 rounded-xl border border-white/10 text-center" style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Crafting <span className="text-white font-semibold">elegant digital experiences</span> with modern technologies.
                Transforming ideas into <span className="text-white font-semibold">scalable solutions</span> that make a difference.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-6 py-3 bg-white text-black font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2"
                style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                <span className="relative z-10">View My Work</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-6 py-3 backdrop-blur-md bg-white/10 border-2 border-white/30 text-white font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center gap-2 hover:bg-white/20"
                style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                <span className="relative z-10">Get in Touch</span>
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original design with photo on right */}
        <div className="hidden md:block absolute left-4 right-4 sm:left-6 sm:right-auto md:left-16 lg:left-24 top-1/2 -translate-y-1/2 z-40 max-w-full sm:max-w-xl md:max-w-2xl px-2 sm:px-0">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">



            {/* Main Heading with Animation */}
            <div className="space-y-1">
              <div className="overflow-visible pb-1">
                <TypeAnimation
                  sequence={[
                    'Hey There, Its Sahil Raj Dubey',
                    3000,
                    'Hey There, Its Sahil Raj Dubey',
                  ]}
                  wrapper="h1"
                  speed={50}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight"
                  style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif', letterSpacing: '-0.02em' }}
                  repeat={0}
                  cursor={true}
                />
              </div>
            </div>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm text-white/80 font-medium hover:bg-white/10 transition-all duration-300" style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Full-Stack Developer
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm text-white/80 font-medium hover:bg-white/10 transition-all duration-300" style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Data Science
              </span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs sm:text-sm text-white/80 font-medium hover:bg-white/10 transition-all duration-300" style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Tech Enthusiast
              </span>
            </div>

            {/* Description with Glass Effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl blur-xl"></div>
              <p className="relative text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed max-w-xl backdrop-blur-sm bg-white/5 p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/10" style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Crafting <span className="text-white font-semibold">elegant digital experiences</span> with modern technologies.
                Transforming ideas into <span className="text-white font-semibold">scalable solutions</span> that make a difference.
              </p>
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-semibold text-sm sm:text-base rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2"
                style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                <span className="relative z-10">View My Work</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 backdrop-blur-md bg-white/10 border-2 border-white/30 text-white font-semibold text-sm sm:text-base rounded-full overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center gap-2 hover:bg-white/20"
                style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
              >
                <span className="relative z-10">Get in Touch</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>


          </div>
        </div>



        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 w-full max-w-2xl px-4">
          <h3 className="text-sm md:text-base lg:text-lg text-white/60 mb-4 font-[family-name:var(--font-inter)] uppercase tracking-widest font-light">

          </h3>
          <div className="relative overflow-hidden">
            {/* Left Fade overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-30 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, transparent 80%)' }} />
            {/* Right Fade overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 z-30 pointer-events-none"
              style={{ background: 'linear-gradient(to left, rgba(7, 6, 6, 0.96) 0%, transparent 80%)' }} />


          </div>
        </div>



      </section>


      <section id="about" className="relative min-h-screen w-full flex items-center justify-center py-20 px-8">
        {/* Static Background stays behind */}

        {/* Paper Container */}
        <div className="relative z-10  w-full max-w-7xl">
          {/* Paper Background with Rough Edge */}
          <div className="absolute inset-0 bg-white rounded-lg paper-edge"
            style={{
              background: 'linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)',
              boxShadow: `
                 inset 0 2px 4px rgba(0,0,0,0.1),
                 inset 0 -2px 4px rgba(255,255,255,0.9),
                 inset 2px 0 4px rgba(0,0,0,0.1),
                 inset -2px 0 4px rgba(255,255,255,0.9),
                 0 20px 60px hsla(240, 1%, 30%, 0.35)
               `,
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          />

          {/* Content Content (on top of background) */}
          <div className="relative p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20">

            {/* About Me Heading */}
            <h2 className="flex flex-wrap items-center gap-2 md:gap-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-[family-name:var(--font-playfair)] font-bold text-black mb-6 sm:mb-8 md:mb-12 tracking-tight">
              About
              <RotatingText
                texts={['Persona', 'Speaker', 'Myself', 'Sahil']}
                mainClassName="bg-blue-900 text-white px-2 sm:px-2 md:px-3 rounded-lg overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h2>

            {/* Content Area - You can add your content here */}
            <div className="space-y-8 text-lg md:text-xl text-gray-800 font-[family-name:var(--font-inter)] leading-relaxed">
              <p className="text-2xl font-medium text-gray-900">
                Hello! I’m Sahil Raj Dubey, an ardent technophile shaping sophisticated web ecosystems through innovation and refined craftsmanship.
              </p>

              <p>
                I’m a detail-driven creator who blends aesthetics with logic to build meaningful digital experiences. My journey in tech revolves around crafting intuitive web applications, exploring the depths of data science, and shaping intelligent systems through machine learning and artificial intelligence. With Python as my core tool, I transform ideas into practical, project-oriented solutions that speak through clean design and efficient execution.

                Beyond technical skill, I thrive in collaborative spaces—leading with clarity, contributing with empathy, and elevating every team I work with. Whether developing innovative products or exploring new technologies, I approach every challenge with curiosity, discipline, and an eye for refinement.
              </p>

              <p>
                My journey in web development started with a curiosity about how things work
                on the internet, and has evolved into a deep passion for creating digital solutions
                that make a difference.
              </p>

              {/* Skills or additional sections can go here */}
              <div className="pt-8 mt-8 border-t border-gray-200">
                <h3 className="text-3xl font-[family-name:var(--font-playfair)] font-semibold text-black mb-6">
                  What I Do
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Frontend Development</h4>
                    <p className="text-gray-700">Building responsive and interactive user interfaces</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">UI/UX Design</h4>
                    <p className="text-gray-700">Creating beautiful and intuitive user experiences</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Backend Development</h4>
                    <p className="text-gray-700">Building fast, secure, scalable server systems</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Data Science</h4>
                    <p className="text-gray-700">Transforming raw data into actionable insights</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Machine Learning</h4>
                    <p className="text-gray-700">Creating intelligent models that learn patterns</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Database Management</h4>
                    <p className="text-gray-700">Structuring optimized and reliable data storage</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">API Development</h4>
                    <p className="text-gray-700">Designing seamless and efficient data flows</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 text-black">Team Collaboration</h4>
                    <p className="text-gray-700">Working cohesively to build robust solutions</p>
                  </div>

                </div>
                <div className="pt-20 mt-8 border-t border-gray-200"></div>
                <h3 className="text-3xl font-[family-name:var(--font-playfair)] font-semibold text-black mb-6">
                  Certifications
                </h3>
              </div>
            </div>
            <div style={{ height: '400px', position: 'relative' }} className="sm:h-[500px] md:h-[600px] -mx-4 sm:-mx-6 md:-mx-12 lg:-mx-16 xl:-mx-20 -mt-12 sm:-mt-16 md:-mt-24 -mb-4 sm:-mb-6 md:-mb-12 lg:-mb-16 xl:-mb-10 rounded-b-lg overflow-hidden">
              <CircularGallery bend={3} textColor="#000000ff" borderRadius={0.05} scrollEase={0.02} items={undefined} />
            </div>
            <div className="pt-8 mt-9 border-t border-gray-200"></div>
            <h3 className="text-3xl font-[family-name:var(--font-playfair)] font-semibold text-black mb-6">
              Tools & Technologies
            </h3>
            <div className="flex flex-col items-center justify-center w-full">
              <div className="w-full overflow-x-auto">
                <table className="mx-auto w-full min-w-[640px] border-collapse border border-black">
                  <tbody>
                    <tr>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://techstack-generator.vercel.app/python-icon.svg" alt="Python" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">Python</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="JavaScript" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">JavaScript</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="TypeScript" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">TypeScript</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">React</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">Next.js</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">Node.js</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://skillicons.dev/icons?i=express" alt="Express" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">Express</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="MySQL" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">MySQL</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">MongoDB</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">Firebase</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://skillicons.dev/icons?i=postman" alt="Postman" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">Postman</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://techstack-generator.vercel.app/aws-icon.svg" alt="AWS" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">AWS</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">Tailwind</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://skillicons.dev/icons?i=graphql" alt="GraphQL" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">GraphQL</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://techstack-generator.vercel.app/github-icon.svg" alt="GitHub" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">GitHub</span>
                        </div>
                      </td>
                      <td className="text-center p-3 sm:p-4 md:p-6 border border-black text-black font-medium">
                        <div className="flex flex-col items-center gap-2">
                          <img src="https://skillicons.dev/icons?i=git" alt="Git" width="48" height="48" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                          <span className="text-xs sm:text-sm md:text-base">Git</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pt-8 mt-20 border-t border-gray-200"></div>
          </div>
        </div>

      </section>
      <section id="work" className="relative min-h-screen w-full flex flex-col items-center justify-center py-12 md:py-20 px-8 -mt-10">
        {/* Static Background stays behind */}
        <h2 className="flex flex-wrap items-center gap-2 md:gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[family-name:var(--font-playfair)] font-bold text-black mb-8 tracking-tight">
          My
          <RotatingText
            texts={['Creations', 'Innovations', 'Formations', 'Endeavours']}
            mainClassName="bg-green-900 text-white px-2 sm:px-2 md:px-3 rounded-lg overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h2>

        {/* Render Projects from Contentful or Fallback */}
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              videoUrl={project.videoUrl}
              textHeading={project.textHeading}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              backgroundColor={project.backgroundColor}
              showArrow={index < projects.length - 1}
            />
          ))
        ) : (null)
        }

      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-8 -mt-20">
        <h2 className="flex flex-wrap items-center gap-2 md:gap-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-[family-name:var(--font-playfair)] font-bold text-black mb-6 sm:mb-8 md:mb-12 tracking-tight">
          Let's

          <RotatingText
            texts={['Connect', 'Collaborate', 'Create', 'Chat']}
            mainClassName="bg-purple-900 text-white px-2 sm:px-2 md:px-3 rounded-lg overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h2>

        {/* Paper Container */}
        <div className="relative z-10 w-full max-w-7xl">
          {/* Paper Background with Rough Edge */}
          <div
            className="absolute inset-0 bg-white rounded-lg paper-edge"
            style={{
              background: '#f5e6ff',
              boxShadow: `
                inset 0 2px 4px rgba(0,0,0,0.1),
                inset 0 -2px 4px rgba(255,255,255,0.9),
                inset 2px 0 4px rgba(0,0,0,0.1),
                inset -2px 0 4px rgba(255,255,255,0.9),
                0 20px 60px rgba(0,0,0,0.3)
              `,
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          />

          {/* Contact Content */}
          <div className="relative p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20">
            <div className="relative p-4 md:p-8 lg:p-10">
              {/* Text Pressure Heading */}
              <div className="flex flex-col items-center justify-center w-full mb-6">
                <div className="w-full max-w-[800px] relative">
                  <TextPressure
                    text="GET IN TOUCH"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#4c1d95"
                    strokeColor="#490303ff"
                    minFontSize={46}
                  />
                </div>
                <div className="w-full max-w-[500px]">
                  <svg viewBox="0 0 500 30" className="w-full h-auto drop-shadow-sm" preserveAspectRatio="none">
                    <path
                      d="M0,15 Q20,5 40,15 T80,15 T120,15 T160,15 T200,15 T240,15 T280,15 T320,15 T360,15 T400,15 T440,15 T480,15 T520,15"
                      fill="none"
                      stroke="#4c1d95"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl font-[family-name:var(--font-inter)] font-light mb-8">
                Have a project in mind or just want to say hi? I'd love to hear from you.
                Let's turn ideas into reality together.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {/* Email Card */}
              <div className="p-8 bg-white/50 backdrop-blur-sm border border-purple-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-semibold text-black">Email</h3>
                </div>
                <a href="mailto:sahilrajdubey@gmail.com" className="text-gray-700 hover:text-purple-900 transition-colors duration-300 font-[family-name:var(--font-inter)] text-lg">
                  sahilrajdubey@gmail.com
                </a>
              </div>

              {/* Location Card */}
              <div className="p-8 bg-white/50 backdrop-blur-sm border border-purple-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-semibold text-black">Location</h3>
                </div>
                <p className="text-gray-700 font-[family-name:var(--font-inter)] text-lg">
                  Delhi, India
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center gap-8 pt-8 border-t border-gray-200">
              <h3 className="text-3xl font-[family-name:var(--font-playfair)] font-semibold text-black">
                Connect on Social
              </h3>
              <div className="flex gap-6 flex-wrap justify-center">
                {socialLogos.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-purple-800 hover:shadow-xl">
                      <span className="text-white text-3xl">{social.node}</span>
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-[family-name:var(--font-inter)] text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-gray-800 font-[family-name:var(--font-inter)] text-xl mb-8 max-w-2xl mx-auto">
                Whether you have a question, a project idea, or just want to connect, feel free to reach out.
                I'm always open to discussing new opportunities and collaborations.
              </p>
              <a
                href="mailto:sahilrajdubey@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-purple-900 text-white font-[family-name:var(--font-playfair)] font-semibold text-lg rounded-full hover:bg-purple-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full bg-white py-8 text-center text-sm text-black/60 border-t border-gray-200">
        © Copyright {new Date().getFullYear()} by Sahil Raj Dubey. All rights reserved.
      </footer>
    </>

  );
}
