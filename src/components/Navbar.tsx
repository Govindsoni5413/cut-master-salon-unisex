import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Scissors,
  Calendar,
  Phone,
  MapPin,
  Home,
  Sparkles,
  Image as ImageIcon,
  Star,
  ChevronRight,
  Clock,
  MessageSquare,
  Navigation,
} from 'lucide-react';
import { businessConfig, createWhatsAppBookingUrl } from '../config/businessConfig';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export function Navbar({ onOpenBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', href: '#home', icon: Home },
    { name: 'ABOUT', href: '#about', icon: Sparkles },
    { name: 'SERVICES', href: '#services', icon: Scissors },
    { name: 'GALLERY', href: '#gallery', icon: ImageIcon },
    { name: 'REVIEWS', href: '#reviews', icon: Star },
    { name: 'CONTACT', href: '#contact', icon: MapPin },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      window.open(createWhatsAppBookingUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-2.5 sm:px-6 pt-1 sm:pt-2 transition-all duration-300 pointer-events-none">
      {/* Small Attribution above Header */}
      <div className="pointer-events-auto mb-1 flex items-center justify-center">
        <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-neutral-500 uppercase bg-white/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/90 shadow-2xs">
          made by govind
        </span>
      </div>

      <motion.nav
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        id="main-navbar"
        aria-label="Main Navigation"
        className={`w-full max-w-6xl transition-all duration-300 rounded-full px-3 sm:px-6 flex items-center justify-between pointer-events-auto border ${
          isScrolled
            ? 'glass-pill-scrolled py-2 sm:py-2.5 shadow-md border-white/95'
            : 'glass-pill py-2 sm:py-3.5 shadow-sm border-white/85'
        }`}
      >
        {/* Brand Logo & Name */}
        <a
          href="#home"
          id="navbar-brand-logo"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 rounded-full p-0.5 shrink-0"
        >
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-neutral-900 text-amber-200 flex items-center justify-center shadow-md border border-neutral-700/60 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Scissors className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-xs sm:text-base tracking-wider text-neutral-900 leading-none whitespace-nowrap">
              CUT MASTER
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.14em] sm:tracking-[0.2em] font-semibold text-neutral-500 mt-0.5 whitespace-nowrap">
              Salon Unisex<span className="hidden sm:inline"> • Vadodara</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              onClick={() => handleLinkClick(link.href)}
              className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-neutral-700 hover:text-neutral-950 transition-colors duration-200 rounded-full hover:bg-black/[0.03] cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Action Controls & Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Phone call pill on desktop */}
          <a
            href={`tel:${businessConfig.phonePrimary.replace(/\s+/g, '')}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-neutral-700 hover:text-neutral-900 transition-colors border border-transparent hover:border-neutral-200"
            title="Call Salon"
          >
            <Phone className="h-3.5 w-3.5 text-amber-700" />
            <span className="hidden lg:inline">{businessConfig.phonePrimary}</span>
          </a>

          {/* Book Appointment CTA Button (compact on mobile, expanded on desktop) */}
          <button
            id="navbar-book-appointment-btn"
            onClick={handleBookClick}
            className="glass-button-primary px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wide flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-xs"
          >
            <Calendar className="h-3.5 w-3.5 text-amber-300 shrink-0" />
            <span>
              BOOK<span className="hidden sm:inline"> APPOINTMENT</span>
            </span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-h-[40px] min-w-[40px] rounded-full bg-neutral-100/90 hover:bg-neutral-200 text-neutral-800 border border-neutral-200/80 flex items-center justify-center shrink-0 transition-colors cursor-pointer active:scale-95 shadow-xs touch-manipulation"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop click-to-dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-neutral-950/40 backdrop-blur-xs z-40 pointer-events-auto"
            />

            {/* Mobile Nav Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              id="mobile-nav-drawer"
              className="md:hidden fixed top-16 inset-x-3 max-w-sm mx-auto glass-pill-scrolled rounded-3xl p-4 sm:p-5 shadow-2xl z-50 border border-white/95 max-h-[85dvh] overflow-y-auto pointer-events-auto"
            >
              {/* Drawer Top Bar */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-neutral-200/70">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-neutral-900 text-amber-200 flex items-center justify-center">
                    <Scissors className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xs text-neutral-900 leading-tight">
                      CUT MASTER
                    </div>
                    <div className="text-[9px] font-semibold text-neutral-500 uppercase tracking-wider">
                      Vadodara, Gujarat
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-7 w-7 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Navigation Links with Icons */}
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.name}
                      id={`mobile-nav-link-${link.name.toLowerCase()}`}
                      onClick={() => handleLinkClick(link.href)}
                      className="w-full min-h-[42px] px-3.5 py-2 text-xs font-semibold tracking-wider text-neutral-800 hover:text-neutral-950 hover:bg-black/[0.04] rounded-xl transition-colors cursor-pointer flex items-center justify-between group active:bg-black/[0.06]"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4 text-neutral-500 group-hover:text-amber-700 transition-colors" />
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-600 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })}
              </div>

              {/* Status / Hours Pill */}
              <div className="mt-3 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-center justify-between text-[11px] text-neutral-700">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-neutral-900">Open Today:</span>
                  <span>10 AM – 9 PM</span>
                </div>
                <div className="flex items-center gap-1 text-amber-900 text-[10px] font-bold uppercase tracking-wider">
                  <Clock className="h-3 w-3 text-amber-700" />
                  <span>Mon-Sun</span>
                </div>
              </div>

              {/* Quick Actions Footer */}
              <div className="pt-3 mt-3 border-t border-neutral-200/70 flex flex-col gap-2">
                {/* Primary WhatsApp Booking */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleBookClick();
                  }}
                  className="glass-button-primary w-full min-h-[44px] py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>BOOK ON WHATSAPP</span>
                </button>

                {/* Direct Call & Map Direction Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${businessConfig.phonePrimary.replace(/\s+/g, '')}`}
                    className="min-h-[40px] px-2 py-2 rounded-xl text-[11px] font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/80 flex items-center justify-center gap-1.5 active:scale-98 transition-all"
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-700" />
                    <span>Call Salon</span>
                  </a>

                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[40px] px-2 py-2 rounded-xl text-[11px] font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/80 flex items-center justify-center gap-1.5 active:scale-98 transition-all"
                  >
                    <Navigation className="h-3.5 w-3.5 text-amber-700" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
