import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Phone, Clock, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

// Assets
import heroImg from './assets/hero.png';
import pizzaImg from './assets/pizza.png';
import shakeImg from './assets/shake.png';
import socialImg from './assets/social.png';
import maggiImg from './assets/maggi.png';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const Ornament = () => (
  <div className="ornament-divider py-4 md:py-8">
    <div className="ornament-line"></div>
    <div className="ornament-symbol"></div>
    <div className="ornament-line"></div>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white bg-cream overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-coffee-dark/95 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-6 md:py-10'}`}>
        <div className="container-custom px-6 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-4 group cursor-pointer reveal-stagger" style={{ animation: isMounted ? 'reveal 0.8s ease-out forwards' : 'none' }}>
            <div className="relative">
              <Coffee className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-500 ${scrolled ? 'text-accent' : 'text-white'}`} />
            </div>
            <span className={`text-lg md:text-xl font-serif font-black tracking-[0.2em] md:tracking-[0.4em] transition-colors duration-500 ${scrolled ? 'text-white' : 'text-white'}`}>
              DANNY'S
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 lg:gap-12 items-center">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[9px] md:text-xs tracking-[0.4em] font-bold text-white/80 hover:text-accent transition-all duration-300 hover:translate-y-[-2px] uppercase"
                style={{ animation: isMounted ? `reveal 0.8s ease-out forwards ${idx * 100 + 200}ms` : 'none', opacity: 0 }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ animation: isMounted ? `reveal 0.8s ease-out forwards 700ms` : 'none', opacity: 0 }}>
              <a href="tel:9033066190" className="btn-primary !py-3 !px-8 text-[9px]">
                GET DIRECTIONS
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 w-full h-screen bg-coffee-dark/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:gap-12 z-40 animate-reveal">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-3xl md:text-4xl font-serif text-white/40 hover:text-accent transition-all duration-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:9033066190" className="btn-primary mt-4 md:mt-8 scale-110">CALL NOW</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] md:h-[100dvh] flex items-center justify-center overflow-hidden grain-overlay">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Danny's Coffee Bar" className="w-full h-full object-cover brightness-[0.3] scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/40 via-transparent to-coffee-dark/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 md:px-8 max-w-5xl">
          <div className="space-y-6 md:space-y-8">
            <div style={{ animation: isMounted ? 'reveal 0.8s ease-out forwards 300ms' : 'none', opacity: 0 }}>
              <span className="text-accent font-bold tracking-[0.4em] md:tracking-[0.6em] text-xs md:text-sm uppercase inline-block border-b border-accent/30 pb-2">Ahmedabad &bull; Sola</span>
            </div>
            
            <h1 
              className="text-4xl md:text-8xl lg:text-9xl font-serif font-black text-white leading-[1.1] md:leading-[0.95] tracking-tight md:tracking-tighter"
              style={{ animation: isMounted ? 'reveal 0.8s ease-out forwards 450ms' : 'none', opacity: 0 }}
            >
              The Art of <br className="hidden md:block" />
              <span className="italic font-light text-accent serif-font">Fine Coffee</span>
            </h1>
            
            <p 
              className="text-base md:text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
              style={{ animation: isMounted ? 'reveal 0.8s ease-out forwards 600ms' : 'none', opacity: 0 }}
            >
              A curated experience where every bean tells a story and every bite feels like a masterpiece. 
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center pt-4"
              style={{ animation: isMounted ? 'reveal 0.8s ease-out forwards 750ms' : 'none', opacity: 0 }}
            >
              <a href="#menu" className="btn-primary w-full sm:min-w-[220px]">
                VIEW THE MENU
              </a>
              <a href="#location" className="btn-ghost w-full sm:min-w-[220px]">
                OUR LOCATION
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 md:gap-6 opacity-30">
          <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      <Ornament />

      {/* About Section */}
      <section id="about" className="section-padding bg-cream relative">
        <div className="container-custom flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 relative group px-4 md:px-0">
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <img src={socialImg} alt="Danny's Essence" className="w-full rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative z-10 transition-all duration-1000 group-hover:scale-[1.02] grayscale-[0.3] group-hover:grayscale-0" />
            <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-20 h-20 md:w-32 md:h-32 border-l border-t border-accent/20 z-0"></div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12 text-center lg:text-left">
            <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase">Since 2020</span>
            <h2 className="text-4xl md:text-7xl font-serif text-coffee-dark leading-[1.1] md:leading-[1.05]">
              Handcrafted <br />
              <span className="italic text-accent">Hospitality</span>
            </h2>
            <p className="text-lg md:text-xl text-coffee-dark/60 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              We started with a simple vision: to create a sanctuary where time slows down. Danny's Coffee Bar is a tribute to the craft of slow-roasting and the joy of gourmet comfort food.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 pt-6 md:pt-10">
              <div className="space-y-3 border-l-2 border-accent/20 pl-6 text-left">
                <h3 className="text-2xl md:text-3xl font-serif text-coffee-dark italic">Artisanal</h3>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-coffee-dark/40 font-bold leading-loose">Premium Arabica Blend</p>
              </div>
              <div className="space-y-3 border-l-2 border-accent/20 pl-6 text-left">
                <h3 className="text-2xl md:text-3xl font-serif text-coffee-dark italic">Signature</h3>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-coffee-dark/40 font-bold leading-loose">Secret Spice Infusions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ornament />

      {/* Highlights Section */}
      <section id="menu" className="section-padding bg-white relative grain-overlay">
        <div className="container-custom">
          <div className="text-center mb-16 md:mb-32 space-y-4 md:space-y-6">
            <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase">The Menu</span>
            <h2 className="text-4xl md:text-8xl font-serif text-coffee-dark tracking-tighter italic">Highlights</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
            {[
              { 
                title: "Ferrero Rocher Shake", 
                desc: "A thick, velvety masterpiece blended with premium hazelnut chocolate and hand-churned cream.",
                img: shakeImg,
                label: "BESTSELLER"
              },
              { 
                title: "Tandoori Paneer Pizza", 
                desc: "Wood-fired dough topped with house-spiced paneer and garden-fresh Science City herbs.",
                img: pizzaImg,
                label: "CRAFTED"
              },
              { 
                title: "Peri Peri Cheese Maggie", 
                desc: "Ahmedabad's favorite comfort food, elevated with a secret blend of African bird's eye chillies.",
                img: maggiImg,
                label: "SIGNATURE"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="h-[400px] md:h-[550px] overflow-hidden rounded-3xl mb-8 md:mb-12 relative shadow-2xl">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/95 backdrop-blur-md px-4 md:px-5 py-2 rounded-full shadow-xl">
                    <span className="text-[8px] md:text-[9px] font-black tracking-[0.25em] text-coffee-dark">{item.label}</span>
                  </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                  <h3 className="text-3xl md:text-4xl font-serif text-coffee-dark group-hover:text-accent transition-colors duration-500">{item.title}</h3>
                  <p className="text-coffee-dark/50 text-base md:text-lg leading-relaxed font-light">{item.desc}</p>
                  <button className="flex items-center gap-3 text-[10px] md:text-[11px] font-black tracking-[0.3em] text-accent border-b border-accent/20 pb-2 md:pb-3 group-hover:border-accent transition-all duration-500 outline-none focus:text-coffee-dark">
                    VIEW DETAILS <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ornament />

      {/* Location & Info Section */}
      <section id="location" className="section-padding bg-coffee-dark text-white relative grain-overlay">
        <div className="absolute inset-0 bg-accent/[0.02] pointer-events-none"></div>
        <div className="container-custom flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          <div className="w-full lg:w-1/2 space-y-12 md:space-y-16">
            <div className="space-y-4 md:space-y-6">
              <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase">Location</span>
              <h2 className="text-5xl md:text-8xl font-serif leading-[1.1] md:leading-[0.9] italic">Find Your <br />Space</h2>
            </div>
            
            <div className="space-y-8 md:space-y-12">
              <div className="flex gap-6 md:gap-10 items-start group">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-700">
                  <MapPin className="text-accent group-hover:text-coffee-dark transition-colors w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Address</h4>
                  <p className="text-xl md:text-2xl font-serif leading-snug">
                    Opp. Shakun Mall, Science City Rd, <br />
                    Sola, Ahmedabad, 380060
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 md:gap-10 items-start group">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-700">
                  <Clock className="text-accent group-hover:text-coffee-dark transition-colors w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Hours</h4>
                  <p className="text-xl md:text-2xl font-serif">Daily: 11:00 AM – 11:30 PM</p>
                </div>
              </div>
            </div>

            <a href="https://www.google.com/maps" className="btn-primary w-full md:!w-fit mt-4">GET DIRECTIONS</a>
          </div>
          
          <div className="w-full lg:w-1/2 h-[400px] md:h-[650px] rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative border border-white/5 grayscale-[0.8] hover:grayscale-0 transition-all duration-[2s]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.054366629!2d72.5186253!3d23.0767856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b89e3445887%3A0xc3c948e647c2b3e4!2sDanny's%20Coffee%20Bar!5e0!3m2!1sen!2sin!4v1714120000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) contrast(90%)' }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Ornament />

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16 md:mb-32 space-y-4 md:space-y-6">
            <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase">Atmosphere</span>
            <h2 className="text-4xl md:text-6xl font-serif text-coffee-dark">Gallery</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[heroImg, pizzaImg, shakeImg, maggiImg].map((img, idx) => (
              <div key={idx} className={`rounded-3xl overflow-hidden group shadow-2xl transition-all duration-1000 ${idx % 2 !== 0 ? 'lg:translate-y-24' : ''}`}>
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90 hover:brightness-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 md:pt-24 pb-12 md:pb-16 bg-coffee-dark text-center px-6 md:px-8 relative overflow-hidden grain-overlay">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-accent/[0.03] rounded-full blur-[100px] md:blur-[150px] -mb-[400px] md:-mb-[800px]"></div>
        
        <div className="container-custom space-y-12 md:space-y-16">
          <div className="space-y-8 md:space-y-10">
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div className="h-[1px] w-8 md:w-12 bg-white/10"></div>
              <Coffee className="w-6 h-6 md:w-8 md:h-8 text-accent animate-pulse" />
              <div className="h-[1px] w-8 md:w-12 bg-white/10"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white tracking-[0.3em] md:tracking-[0.5em]">DANNY'S</h2>
            
            <div className="flex justify-center gap-8 md:gap-12">
              <a href="#" className="text-white/40 hover:text-accent transition-all duration-500 transform hover:scale-125 focus:text-accent outline-none">
                <InstagramIcon />
              </a>
              <a href="#" className="text-white/40 hover:text-accent transition-all duration-500 transform hover:scale-125 focus:text-accent outline-none">
                <FacebookIcon />
              </a>
            </div>
          </div>
          
          <div className="pt-8 md:pt-12 border-t border-white/5 space-y-4 md:space-y-6">
            <p className="text-white/30 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase leading-loose font-bold">
              &copy; {new Date().getFullYear()} Danny's Coffee Bar &bull; Ahmedabad
            </p>
            <p className="text-white/20 text-[9px] md:text-[10px] tracking-[0.1em] md:tracking-[0.2em] font-light italic">
              Crafted with intention for the modern palate.
            </p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
};

export default App;
