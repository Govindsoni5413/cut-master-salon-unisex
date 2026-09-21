import { useState } from 'react';
import { motion, useScroll } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServiceSection } from './components/ServiceSection';
import { BookingCTA } from './components/BookingCTA';
import { Gallery } from './components/Gallery';
import { InstagramSection } from './components/InstagramSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { GeneralBookingModal } from './components/GeneralBookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen font-sans text-neutral-900 bg-[#FBFBFD] selection:bg-neutral-900 selection:text-amber-200">
      {/* Luxury Golden Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 origin-left z-[999] pointer-events-none shadow-[0_0_8px_rgba(217,119,6,0.4)]"
      />

      {/* Background with Ambient Motion & Soft Light */}
      <AnimatedBackground />

      {/* Floating Liquid-Glass Navbar */}
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 pb-20 sm:pb-0">
        {/* 1. Hero Section with 3D Framed Visuals & Floating Glass Badges */}
        <Hero
          onExploreServices={scrollToServices}
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
        />

        {/* 2. 3D Trust / Quick Info Strip */}
        <TrustStrip />

        {/* 3. About Section with 3D Glass Framing */}
        <AboutSection onVisitClick={scrollToContact} />

        {/* 4. Complete Service Section with Category Navigation, 3D Cards, Images & D-TEN */}
        <ServiceSection />

        {/* 5. Featured Booking CTA Banner */}
        <BookingCTA />

        {/* 6. Portfolio Gallery with 3D Frames & Lightbox */}
        <Gallery />

        {/* 7. Instagram Section */}
        <InstagramSection />

        {/* 8. Client Reviews & Feedback */}
        <ReviewsSection />

        {/* 9. Location & Contact Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating CTA & Mobile Sticky Bar */}
      <WhatsAppFloatingButton onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* General Booking Modal */}
      <GeneralBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
