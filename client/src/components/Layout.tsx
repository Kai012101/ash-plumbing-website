/*
  DESIGN SYSTEM: Trade Craft Heritage Aesthetic
  - Layout wrapper with consistent header and footer
  - Strong information hierarchy
  - Warm, approachable feel with professional authority
*/

import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X, MapPin, Clock } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663040809690/KDuqyCIlvSvWxDhL.png";
const PHONE_NUMBER = "+61 422 249 279";
const EMAIL = "ashpuri765@yahoo.com";
const ADDRESS = "Dandenong North, Melbourne, VIC, Australia";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleBookNow = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, "")}`;
    } else {
      window.location.href = `mailto:${EMAIL}?subject=Inquiry%20regarding%20Plumbing%20Services&body=Hello%20Ash%20Plumbing%20Services%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20plumbing%20services.%0A%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you.`;
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-eucalyptus text-white py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>{EMAIL}</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Available 24/7</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"}`}>
        <div className="container py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src={LOGO_URL} 
                alt="Ash Plumbing Services" 
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display font-semibold text-base transition-colors relative py-2 ${
                    location === link.href
                      ? "text-eucalyptus"
                      : "text-charcoal hover:text-eucalyptus"
                  }`}
                >
                  {link.label}
                  {location === link.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-burnt-orange rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                onClick={handleBookNow}
                className="bg-burnt-orange hover:bg-burnt-orange-light text-white font-display font-semibold px-6 py-2.5 rounded-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-charcoal hover:text-eucalyptus transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border animate-fade-in-up">
            <div className="container py-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-display font-semibold text-lg py-2 border-b border-border/50 ${
                      location === link.href
                        ? "text-eucalyptus"
                        : "text-charcoal"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  onClick={handleBookNow}
                  className="bg-burnt-orange hover:bg-burnt-orange-light text-white font-display font-semibold w-full py-3 mt-2"
                >
                  Book Now
                </Button>
              </nav>
              <div className="mt-6 pt-4 border-t border-border space-y-3 text-sm text-muted-foreground">
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{PHONE_NUMBER}</span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{EMAIL}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-white">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <img 
                src={LOGO_URL} 
                alt="Ash Plumbing Services" 
                className="h-16 w-auto object-contain mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
                Your trusted licensed plumber in Dandenong North, Melbourne. We provide reliable, professional plumbing services with upfront pricing and quality workmanship.
              </p>
              <p className="text-sm text-gray-400">
                Licensed Plumber | Fully Insured | ABN Registered
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4 text-white">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-300 hover:text-burnt-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info - NAP Consistency */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4 text-white">Contact Us</h3>
              <address className="not-italic space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 text-burnt-orange flex-shrink-0" />
                  <span>Ash Plumbing Services<br />{ADDRESS}</span>
                </div>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-burnt-orange transition-colors">
                  <Phone className="w-5 h-5 text-burnt-orange" />
                  <span>{PHONE_NUMBER}</span>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-burnt-orange transition-colors">
                  <Mail className="w-5 h-5 text-burnt-orange" />
                  <span>{EMAIL}</span>
                </a>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-burnt-orange" />
                  <span>Available 24/7</span>
                </div>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ash Plumbing Services. All rights reserved.</p>
            <p>Servicing Dandenong North, Melbourne and surrounding areas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
