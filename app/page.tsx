'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import LogoLoop from '@/components/LogoLoop';
import { SiInstagram, SiGithub, SiLinkedin, SiDiscord, SiX } from 'react-icons/si';
import BounceCards from '@/components/BounceCards';

export default function Home() {
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
    <>
      {/* Landing Page Section */}
      <section className="relative min-h-screen w-full overflow-hidden text-white selection:bg-white/20">


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


      <div className="relative z-50 w-full p-8 md:p-12 flex justify-between items-start font-helvetica tracking-wide pointer-events-none">
        <div className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-medium text-black pointer-events-auto">
          Sahil Raj Dubey xD
        </div>

        <nav className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-medium text-blue-800 pointer-events-auto">
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }} className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">[ about ]</a>
          <a href="#work" onClick={(e) => {
            e.preventDefault();
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
          }} className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">[ work ]</a>
          <a href="#resume" onClick={(e) => {
            e.preventDefault();
            document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
          }} className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">[ resume ]</a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }} className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">[ let's chat ]</a>
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


      <div className="absolute top-1/2  md:right-0 bottom-0 -translate-y-1/2 z-10 w-8 h-150 md:w-170 md:h-210 grayscale hover:grayscale-0 transition-all duration-500">
        <Image
          src="/myphoto.png"
          alt="Sahil Raj Dubey"
          fill
          className="object-contain object-bottom md:object-right-bottom"
          priority
        />
      </div>
    </section>


    <section id="about" className="relative min-h-screen w-full flex items-center justify-center py-20 px-8 -mt-20">
      {/* Static Background stays behind */}
      
      {/* Paper Container */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Paper with engraved border effect */}
        <div className="bg-white rounded-lg p-12 md:p-16 lg:p-20 relative"
             style={{
               background: 'linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)',
               boxShadow: `
                 inset 0 2px 4px rgba(0,0,0,0.1),
                 inset 0 -2px 4px rgba(255,255,255,0.9),
                 inset 2px 0 4px rgba(0,0,0,0.1),
                 inset -2px 0 4px rgba(255,255,255,0.9),
                 0 20px 60px rgba(0,0,0,0.3)
               `,
               border: '1px solid rgba(0,0,0,0.05)'
             }}>
          
          {/* About Me Heading */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] font-bold text-black mb-12 tracking-tight">
            About Me
          </h2>
          
          {/* Content Area - You can add your content here */}
          <div className="space-y-8 text-lg md:text-xl text-gray-800 font-[family-name:var(--font-inter)] leading-relaxed">
            <p className="text-2xl font-medium text-gray-900">
              Hello! I'm Sahil Raj Dubey, a passionate developer specializing in modern web technologies.
            </p>
            
            <p>
              I love creating beautiful, functional, and user-friendly web experiences. 
              With expertise in React, Next.js, and modern JavaScript frameworks, 
              I bring ideas to life through clean code and thoughtful design.
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
              </div>
            </div>
          </div>
                  <BounceCards
  className="custom-bounceCards"
  images={images}
  containerWidth={1000}
  containerHeight={500}
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={true}
/>
        </div>

      </div>
    </section>
    </>
  );
}
