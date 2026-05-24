"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#objekte", label: "Objekte" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pl-cream/95 backdrop-blur-xl border-b border-pl-gold/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-pl-dark rounded-full flex items-center justify-center ring-1 ring-pl-gold/30 group-hover:ring-pl-gold/60 transition-all">
            <span className="text-pl-gold text-2xl font-serif tracking-[-1px]">PL</span>
          </div>
          <div className="leading-none">
            <div className="font-serif text-[21px] tracking-[-0.5px] text-pl-dark group-hover:text-pl-gold transition-colors">PL IMMOBILIEN</div>
            <div className="text-[9px] text-pl-dark/50 tracking-[2.5px] -mt-0.5">IMMOBILIEN MIT LEIDENSCHAFT</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm tracking-[1.5px] uppercase font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-pl-gold transition-all duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:h-[1px] after:w-0 after:bg-pl-gold hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-pl-dark/20">
            <a 
              href="tel:+41433225230" 
              className="flex items-center gap-2 text-pl-gold hover:text-pl-terracotta transition-colors text-xs tracking-widest"
            >
              <Phone className="w-3.5 h-3.5" /> +41 43 322 52 30
            </a>
            
            <Link 
              href="#kontakt" 
              className="btn-primary !px-5 !py-2.5 !text-xs !tracking-[1.5px]"
            >
              BERATUNG ANFRAGEN
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 text-pl-dark hover:text-pl-gold transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu - Elegant Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-pl-dark/95 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex flex-col h-full pt-20 px-8">
              <div className="flex flex-col gap-8 text-2xl text-white tracking-tight">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-pl-gold transition-colors block py-1"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pb-12">
                <a 
                  href="tel:+41433225230" 
                  className="flex items-center gap-3 text-pl-gold text-lg mb-6"
                >
                  <Phone className="w-5 h-5" /> +41 43 322 52 30
                </a>
                
                <Link 
                  href="#kontakt" 
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center text-sm py-4"
                >
                  BERATUNG ANFRAGEN
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
