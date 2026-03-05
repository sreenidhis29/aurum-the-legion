import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import { 
  ChevronDown, 
  Code, 
  Brain, 
  Shield, 
  Cpu, 
  Smartphone, 
  Cloud, 
  Github, 
  Instagram, 
  Linkedin, 
  Disc,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { Button } from './components/ui/button';
import BackgroundParticles from './components/BackgroundParticles';
import CustomCursor from './components/CustomCursor';
import GlitchText from './components/GlitchText';
import ThreeHero from './components/ThreeHero';
import { cn } from './lib/utils';

// --- Shared Components ---

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-03-15T09:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 mt-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-12 h-12 glass-panel flex items-center justify-center font-bebas text-xl text-primary rounded-lg border-primary/20">
            {Math.max(0, value)}
          </div>
          <span className="text-[8px] tracking-widest uppercase text-foreground/40 mt-1 font-bold">{unit}</span>
        </div>
      ))}
    </div>
  );
};

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};

const FloatingCube = ({ position, rotationSpeed = 1, color = "hsl(var(--primary))" }: { position: string, rotationSpeed?: number, color?: string }) => {
  return (
    <motion.div
      className={cn("absolute w-12 h-12 preserve-3d", position)}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 360],
        y: [0, -20, 0]
      }}
      transition={{
        duration: 10 / rotationSpeed,
        repeat: Infinity,
        ease: "linear",
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {[0, 90, 180, 270, 'x90', 'x-90'].map((rot, i) => (
        <div
          key={i}
          className="absolute inset-0 border border-white/20 bg-white/5 backdrop-blur-sm"
          style={{
            transform: typeof rot === 'string' 
              ? `rotateX(${rot.substring(1)}deg) translateZ(24px)` 
              : `rotateY(${rot}deg) translateZ(24px)`,
            backgroundColor: i % 2 === 0 ? color.replace('1)', '0.1)') : 'rgba(191,13,0,0.1)'
          }}
        />
      ))}
    </motion.div>
  );
};

const HexPrism = () => {
  return (
    <div className="relative w-16 h-16 preserve-3d group-hover:rotate-y-180 transition-transform duration-1000 ease-in-out">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 border border-primary/40 bg-white/5"
          style={{
            transform: `rotateY(${i * 60}deg) translateZ(32px)`,
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
            height: '64px',
            width: '32px',
            left: '16px'
          }}
        />
      ))}
    </div>
  );
};

// --- App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primary/30">
      <BackgroundParticles />
      <CustomCursor />
      
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-panel py-3 shadow-lg" : "bg-transparent py-6"
      )}>
        <div className="container flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-cinzel text-2xl font-bold text-primary tracking-widest text-glow-gold">AURUM</span>
            <span className="text-secondary font-rajdhani text-xs tracking-[0.2em] font-bold">· THE LEGION</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'About', 'Events', 'Domains', 'Team', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium tracking-widest text-foreground/70 hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#F0B616]" />
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/80 text-black font-bold tracking-widest px-6 h-10 shadow-[0_0_15px_rgba(240,182,22,0.3)] border-none">
              ENLIST
            </Button>
          </div>

          <button 
            className="lg:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 glass-panel py-8 flex flex-col items-center gap-6 pointer-events-none",
            mobileMenuOpen && "pointer-events-auto"
          )}
        >
          {['Home', 'About', 'Events', 'Domains', 'Team', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <ThreeHero />
          <div className="scan-line pointer-events-none" />
          
          <FloatingCube position="top-[20%] left-[15%]" rotationSpeed={0.5} />
          <FloatingCube position="top-[30%] right-[10%]" rotationSpeed={0.8} />
          <FloatingCube position="bottom-[25%] left-[40%]" rotationSpeed={0.3} color="rgba(191,13,0,1)" />

          <div className="container relative z-10 text-center">
            <FadeUp>
              <h1 className="flex flex-col items-center">
                <GlitchText text="AURUM" className="text-7xl md:text-9xl tracking-[0.2em] font-black" />
                <span className="text-secondary font-rajdhani text-xl md:text-2xl tracking-[0.5em] mt-4 font-bold">— THE LEGION —</span>
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="mt-8 text-lg md:text-xl text-foreground/80 font-rajdhani tracking-widest max-w-2xl mx-auto">
                Evolve with Tech. Lead with Excellence.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-black font-bold tracking-widest px-10 h-14 text-lg border-none shadow-[0_0_20px_rgba(240,182,22,0.4)] group relative overflow-hidden">
                  <span className="relative z-10">JOIN THE LEGION</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 tracking-widest px-10 h-14 text-lg font-bold shadow-[0_0_15px_rgba(240,182,22,0.1)]">
                  EXPLORE EVENTS
                </Button>
              </div>
            </FadeUp>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
            >
              <ChevronDown size={32} />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="container grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative pl-8 border-l-2 border-secondary">
                <h2 className="font-bebas text-5xl md:text-6xl text-primary tracking-tight mb-8">About the Legion</h2>
                <div className="space-y-6 text-foreground/80 leading-relaxed text-lg font-rajdhani font-medium">
                  <p>
                    Aurum is not just a club; it's a legacy of innovation and leadership. We foster a community of tech enthusiasts who are passionate about pushing boundaries and setting new standards in the digital frontier.
                  </p>
                  <p>
                    From artificial intelligence to ethical hacking, we dive deep into the core of emerging technologies, equipping our members with the skills to lead and the vision to evolve.
                  </p>
                </div>
              </div>
            </FadeUp>

            <div className="relative">
              {/* 3D Orbit Ring */}
              <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-primary/20 rounded-full animate-[spin_8s_linear_infinite] preserve-3d" style={{ transform: 'rotateX(75deg)' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_#F0B616]" />
              </div>

              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { label: 'Members', value: 200, suffix: '+' },
                  { label: 'Events', value: 50, suffix: '+' },
                  { label: 'Years', value: 5, suffix: '' },
                  { label: 'Projects', value: 30, suffix: '+' },
                ].map((stat, i) => (
                  <FadeUp key={stat.label} delay={i * 0.1}>
                    <div className="glass-panel p-8 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300">
                      <div className="text-4xl md:text-5xl font-bebas text-primary mb-2 group-hover:scale-110 transition-transform">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-xs tracking-[0.3em] uppercase text-foreground/60 font-bold">{stat.label}</div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="events" className="py-24 relative">
          <div className="container">
            <FadeUp>
              <div className="text-center mb-20">
                <h2 className="font-bebas text-5xl md:text-7xl text-primary tracking-tight inline-block relative">
                  UPCOMING EVENTS
                  <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_#F0B616]" />
                </h2>
              </div>
            </FadeUp>

            <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
              {/* Timeline Spine */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary md:-translate-x-1/2" />

              <div className="space-y-24">
                {[
                  {
                    title: "HACKATHON 2025",
                    date: "March 15, 2025 | 9:00 AM",
                    venue: "Main Auditorium",
                    tag: "FLAGSHIP",
                    status: "LIVE",
                    desc: "24-hour coding marathon. Build. Break. Innovate.",
                    color: "secondary"
                  },
                  {
                    title: "TECH TALK: AI FRONTIERS",
                    date: "April 2, 2025 | 3:00 PM",
                    venue: "Seminar Hall B",
                    tag: "TALK",
                    status: "UPCOMING",
                    desc: "Industry experts discuss the future of Generative AI.",
                    color: "primary"
                  },
                  {
                    title: "CODE SPRINT",
                    date: "April 18, 2025 | 10:00 AM",
                    venue: "Computer Lab 3",
                    tag: "COMPETITION",
                    status: "UPCOMING",
                    desc: "Speed coding challenge across 5 domains.",
                    color: "secondary"
                  },
                  {
                    title: "CYBERSEC BOOTCAMP",
                    date: "May 3, 2025 | 9:00 AM",
                    venue: "Lab Block A",
                    tag: "WORKSHOP",
                    status: "UPCOMING",
                    desc: "Hands-on ethical hacking and defense workshop.",
                    color: "primary"
                  },
                  {
                    title: "ROBO WARS",
                    date: "May 20, 2025 | 11:00 AM",
                    venue: "Open Ground",
                    tag: "BATTLE",
                    status: "UPCOMING",
                    desc: "Bot battles, obstacle courses, and drone racing.",
                    color: "secondary"
                  },
                  {
                    title: "ANNUAL TECH FEST",
                    date: "June 10–12, 2025",
                    venue: "College Campus",
                    tag: "MEGA EVENT",
                    status: "UPCOMING",
                    desc: "Aurum's biggest 3-day celebration of technology and innovation.",
                    color: "primary"
                  }
                ].map((event, i) => (
                  <div key={event.title} className={cn(
                    "relative flex flex-col md:flex-row items-center",
                    i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  )}>
                    {/* Node */}
                    <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-background border-2 border-primary z-10">
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    </div>

                    <FadeUp delay={0.1}>
                      <div className={cn(
                        "glass-panel p-8 rounded-2xl w-full md:w-[400px] hover:border-primary/50 transition-all duration-300 group",
                        i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                      )}>
                        <div className="flex items-center justify-between mb-4">
                          <span className={cn(
                            "px-3 py-1 text-[10px] tracking-[0.2em] font-bold rounded border",
                            event.color === 'primary' ? "border-primary text-primary" : "border-secondary text-secondary"
                          )}>
                            {event.tag}
                          </span>
                          {event.status === 'LIVE' && (
                            <span className="flex items-center gap-1.5 text-green-500 text-[10px] font-bold tracking-widest">
                              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                              {event.status}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bebas text-3xl text-primary mb-2 tracking-tight group-hover:text-glow-gold transition-all">{event.title}</h3>
                        <p className="text-sm text-foreground/60 font-bold tracking-wide mb-4">{event.date} | {event.venue}</p>
                        <p className="text-foreground/80 mb-6">{event.desc}</p>
                        {event.title === 'HACKATHON 2025' && <CountdownTimer />}
                        <div className="mt-8">
                          <Button variant="outline" className="w-full border-primary/30 hover:border-primary hover:bg-primary hover:text-black font-bold tracking-[0.2em] transition-all">
                            REGISTER NOW
                          </Button>
                        </div>
                      </div>
                    </FadeUp>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <section id="domains" className="py-24 relative bg-black/40">
          <div className="container">
            <FadeUp>
              <div className="text-center mb-20">
                <h2 className="font-bebas text-5xl md:text-7xl text-primary tracking-tight">OUR DOMAINS</h2>
                <p className="text-foreground/60 tracking-[0.3em] font-bold mt-4 uppercase">Excellence across all fronts</p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Web Development', desc: 'Code, Design, Deploy', icon: Code },
                { title: 'AI / Machine Learning', desc: 'Train. Predict. Evolve.', icon: Brain },
                { title: 'Cybersecurity', desc: 'Hack. Defend. Secure.', icon: Shield },
                { title: 'Robotics & IoT', desc: 'Build the future, wire by wire.', icon: Cpu },
                { title: 'App Development', desc: 'Mobile-first. User-obsessed.', icon: Smartphone },
                { title: 'Cloud & DevOps', desc: 'Scale without limits.', icon: Cloud },
              ].map((domain, i) => (
                <FadeUp key={domain.title} delay={i * 0.1}>
                  <div className="glass-panel p-10 rounded-3xl group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                    <div className="mb-8 relative preserve-3d">
                      <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <domain.icon size={48} className="text-primary relative z-10 group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out" />
                    </div>
                    <h3 className="font-bebas text-3xl text-primary mb-3 tracking-tight">{domain.title}</h3>
                    <p className="text-foreground/70 font-rajdhani font-medium">{domain.desc}</p>
                    
                    <div className="mt-8 flex justify-center perspective-1000">
                      <HexPrism />
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24">
          <div className="container">
            <FadeUp>
              <div className="text-center mb-20">
                <h2 className="font-bebas text-5xl md:text-7xl text-primary tracking-tight">CORE TEAM</h2>
                <p className="text-foreground/60 tracking-[0.3em] font-bold mt-4 uppercase">The minds behind the Legion</p>
              </div>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Alex Sterling', role: 'Technical Lead' },
                { name: 'Elena Vane', role: 'Operations Head' },
                { name: 'Marcus Thorne', role: 'Creative Director' },
                { name: 'Sarah Drake', role: 'PR & Outreach' },
              ].map((member, i) => (
                <FadeUp key={member.name} delay={i * 0.1}>
                  <div className="glass-panel p-1 rounded-2xl relative group overflow-hidden border-t-2 border-secondary/50">
                    <div className="p-8 bg-black/40 rounded-2xl h-full flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-6">
                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-bebas text-2xl text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-1 tracking-wide">{member.name}</h3>
                      <p className="text-primary font-rajdhani tracking-widest text-sm font-bold uppercase">{member.role}</p>
                      
                      <div className="mt-8 flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {[Github, Linkedin, Instagram].map((Icon, j) => (
                          <a key={j} href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all">
                            <Icon size={18} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="contact" className="py-24 relative">
          <div className="container max-w-2xl">
            <FadeUp>
              <div className="text-center mb-12">
                <GlitchText text="JOIN THE LEGION" className="text-5xl md:text-7xl font-bebas mb-6" />
                <p className="text-foreground/70 text-lg tracking-widest">Enlist today and shape the future of tech.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="glass-panel p-10 rounded-3xl border-primary/20">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.2em] font-bold text-foreground/60 uppercase pl-1">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border-b-2 border-primary/20 focus:border-primary px-4 py-3 outline-none transition-all duration-300 text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.2em] font-bold text-foreground/60 uppercase pl-1">College Email</label>
                    <input type="email" className="w-full bg-white/5 border-b-2 border-primary/20 focus:border-primary px-4 py-3 outline-none transition-all duration-300 text-foreground" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.2em] font-bold text-foreground/60 uppercase pl-1">Department</label>
                      <input type="text" className="w-full bg-white/5 border-b-2 border-primary/20 focus:border-primary px-4 py-3 outline-none transition-all duration-300 text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.2em] font-bold text-foreground/60 uppercase pl-1">Domain Interest</label>
                      <select className="w-full bg-white/5 border-b-2 border-primary/20 focus:border-primary px-4 py-3 outline-none transition-all duration-300 text-foreground appearance-none">
                        <option value="">Select Domain</option>
                        <option value="web">Web Development</option>
                        <option value="ai">AI / ML</option>
                        <option value="cyber">Cybersecurity</option>
                        <option value="robotics">Robotics</option>
                        <option value="app">App Development</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs tracking-[0.2em] font-bold text-foreground/60 uppercase pl-1">Why Aurum?</label>
                    <textarea rows={4} className="w-full bg-white/5 border-b-2 border-primary/20 focus:border-primary px-4 py-3 outline-none transition-all duration-300 text-foreground resize-none" />
                  </div>
                  
                  <Button className="w-full h-16 bg-primary hover:bg-primary/80 text-black font-black tracking-[0.5em] text-xl shadow-[0_0_20px_rgba(240,182,22,0.3)] group overflow-hidden border-none mt-4">
                    <span className="relative z-10">ENLIST NOW</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  </Button>
                </form>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.4}>
              <div className="mt-16 flex justify-center gap-8">
                {[Github, Instagram, Linkedin, Disc].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(240,182,22,0.1)]">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-black border-t border-primary/20">
        <div className="container text-center">
          <div className="mb-8">
            <span className="font-cinzel text-3xl font-bold text-primary tracking-widest text-glow-gold">AURUM</span>
            <p className="text-foreground/40 mt-2 font-rajdhani tracking-[0.2em] font-bold text-xs uppercase">Evolve with Tech. Lead with Excellence.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-xs tracking-[0.2em] uppercase font-bold text-foreground/60">
            {['Home', 'About', 'Events', 'Domains', 'Team', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">{item}</a>
            ))}
          </div>
          
          <p className="text-foreground/30 text-[10px] tracking-widest">
            © 2025 Aurum – The Legion. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
