"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#objekte", label: "Objekte" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  // Elegant scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-pl-cream/98 backdrop-blur-2xl border-b border-pl-gold/40 shadow-sm" 
          : "bg-pl-cream/95 backdrop-blur-xl border-b border-pl-gold/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - Refined & Elegant */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-9 h-9 bg-pl-dark rounded-full flex items-center justify-center ring-1 ring-pl-gold/40 group-hover:ring-pl-gold/70 transition-all duration-300">
            <span className="text-pl-gold text-[21px] font-serif tracking-[-1.5px] leading-none pt-px">PL</span>
          </div>
          <div className="leading-none">
            <div className="font-serif text-[20px] tracking-[-0.6px] text-pl-dark group-hover:text-pl-gold transition-colors duration-300">
              PL IMMOBILIEN
            </div>
            <div className="text-[9px] text-pl-dark/50 tracking-[3px] -mt-px font-medium">
              IMMOBILIEN MIT LEIDENSCHAFT
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - Clean & Premium */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-[1.75px] uppercase font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 text-pl-dark/90 hover:text-pl-gold transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-pl-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-5 pl-6 border-l border-pl-dark/15">
            <a
              href="tel:+41433225230"
              className="flex items-center gap-2 text-pl-gold hover:text-pl-terracotta transition-colors text-xs tracking-[2px]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-mono tracking-[1px]">+41 43 322 52 30</span>
            </a>

            <Link
              href="#kontakt"
              className="btn-primary !px-6 !py-[13px] !text-[10px] !tracking-[2px] shadow-sm"
            >
              BERATUNG VEREINBAREN
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger - Clean & Accessible */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 -mr-3 text-pl-dark hover:text-pl-gold active:text-pl-terracotta transition-colors"
          aria-label={isOpen ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Menu - Modern Full-Screen Experience */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-pl-dark/97 md:hidden"
            onClick={closeMenu}
          >
            <div 
              className="flex flex-col h-full pt-20 px-8 pb-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center mb-10">
                <div className="font-serif text-pl-cream text-xl tracking-[-0.5px]">PL IMMOBILIEN</div>
                <button 
                  onClick={closeMenu} 
                  className="text-pl-cream/70 hover:text-pl-gold p-2 -mr-2 transition-colors"
                  aria-label="Menü schliessen"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links - Elegant & Spacious */}
              <div className="flex flex-col gap-2 text-3xl tracking-[-0.6px] text-white">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.06 * index, 
                      duration: 0.4, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block py-4 border-b border-white/10 hover:text-pl-gold active:text-pl-terracotta transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Actions - Premium Contact */}
              <div className="mt-auto pt-10 border-t border-white/10">
                <a 
                  href="tel:+41433225230" 
                  className="flex items-center gap-3 text-pl-gold text-xl mb-8 active:text-pl-terracotta transition-colors"
                  onClick={closeMenu}
                >
                  <Phone className="w-6 h-6" /> 
                  <span className="font-mono tracking-[1px]">+41 43 322 52 30</span>
                </a>

                <Link 
                  href="#kontakt" 
                  onClick={closeMenu}
                  className="btn-primary w-full justify-center py-5 text-sm tracking-[2.5px]"
                >
                  BERATUNG VEREINBAREN
                </Link>

                <div className="text-center mt-8 text-[10px] tracking-[2px] text-white/40">
                  DIETIKON • ZÜRICH • TOSKANA • TESSIN
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
