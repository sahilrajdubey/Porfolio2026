'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import LogoLoop from '@/components/LogoLoop';
import { SiInstagram, SiGithub, SiLinkedin, SiDiscord, SiX } from 'react-icons/si';
import CircularGallery from '@/components/CircularGallery';
import RotatingText from '@/components/RotatingText';

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
            <a
              href="https://drive.google.com/uc?export=download&id=1jcJVFavLjZRXA556DFqE8P3iUBM2K1lt"
              className="hover:opacity-70 transition-opacity duration-300 cursor-pointer"
              download
            >
              [ resume ]
            </a>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }} className="hover:opacity-70 transition-opacity duration-300 cursor-pointer">[ let's chat ]</a>
          </nav>
        </div>


        <div className="absolute top-100 left-8 md:left-21 -translate-y-1/2 z-10 max-w-xl md:max-w-2xl text-gray-700 font-bold font-cursive tracking-wide leading-tight">
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


        <div className="absolute top-[calc(50%+12rem)] left-8 md:left-21 z-10 w-[calc(50%-10rem)]">
          <h1 className="text-2xl md:text-1xl lg:text-xl text-gray-800 mb-6">
            @Connect
          </h1>
          <div className="relative overflow-hidden">
            {/* Left Fade overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, transparent 80%)' }} />
            {/* Right Fade overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none"
              style={{ background: 'linear-gradient(to left, rgba(249, 249, 249, 0.96) 0%, transparent 80%)' }} />

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


        <div className="absolute top-1/2  md:right-22 bottom-0 -translate-y-1/2 z-10 w-8 h-150 md:w-150 md:h-210 grayscale hover:grayscale-0 transition-all duration-500">
          <Image
            src="/myphoto1.png"
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
          {/* Paper Background with Rough Edge */}
          <div className="absolute inset-0 bg-white rounded-lg paper-edge"
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
            }}
          />

          {/* Content Content (on top of background) */}
          <div className="relative p-12 md:p-16 lg:p-20">

            {/* About Me Heading */}
            <h2 className="flex items-center gap-2 md:gap-4 text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] font-bold text-black mb-12 tracking-tight">
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
            <div style={{ height: '600px', position: 'relative' }} className="-mx-12 md:-mx-16 lg:-mx-20 -mt-24 -mb-12 md:-mb-16 lg:-mb-10 rounded-b-lg overflow-hidden">
              <CircularGallery bend={3} textColor="#000000ff" borderRadius={0.05} scrollEase={0.02} items={undefined} />
            </div>
            <div className="pt-8 mt-9 border-t border-gray-200"></div>
            <h3 className="text-3xl font-[family-name:var(--font-playfair)] font-semibold text-black mb-6">
              Tools & Technologies
            </h3>
            <div className="flex flex-col items-center justify-center w-full">
              <table className="mx-auto w-full border-collapse border border-black">
                <tbody>
                  <tr>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/python-icon.svg" alt="Python" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Python</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="JavaScript" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>JavaScript</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="TypeScript" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>TypeScript</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>React</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Next.js</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Node.js</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=express" alt="Express" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Express</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="MySQL" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>MySQL</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>MongoDB</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Firebase</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=postman" alt="Postman" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Postman</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/aws-icon.svg" alt="AWS" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>AWS</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Tailwind</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=graphql" alt="GraphQL" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>GraphQL</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://techstack-generator.vercel.app/github-icon.svg" alt="GitHub" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>GitHub</span>
                      </div>
                    </td>
                    <td className="text-center p-6 border border-black text-black font-medium">
                      <div className="flex flex-col items-center gap-2">
                        <img src="https://skillicons.dev/icons?i=git" alt="Git" width="48" height="48" className="w-12 h-12 md:w-16 md:h-16" />
                        <span>Git</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-8 mt-20 border-t border-gray-200"></div>
          </div>
        </div>

      </section>
      <section id="work" className="relative min-h-screen w-full flex items-center justify-center py-20 px-8 -mt-20">
        {/* Static Background stays behind */}

        {/* Paper Container */}
        <div className="relative z-10 w-full max-w-7xl">
          {/* Paper Background with Rough Edge */}
          <div className="absolute inset-0 bg-white rounded-lg paper-edge"
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
            }}
          />
          {/* Work Content */}
          <div className="relative p-12 md:p-16 lg:p-20">
            {/* Work Gallery Section */}
            {/* About Me Heading */}
            <h2 className="flex items-center gap-2 md:gap-4 text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] font-bold text-black mb-12 tracking-tight">
              MY
              <RotatingText
                texts={['Creations', 'Innovations','Formations', 'Endeavours']}
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
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
