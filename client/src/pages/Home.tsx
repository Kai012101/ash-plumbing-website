/*
  DESIGN SYSTEM: Trade Craft Heritage Aesthetic
  - Home page with hero, services overview, important info, and trust indicators
  - Warm cream background, eucalyptus green primary, burnt orange accents
  - Strong information hierarchy with alternating sections
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Phone, 
  Shield, 
  Clock, 
  Award, 
  Droplets, 
  Flame, 
  CloudRain, 
  CircleAlert,
  ThermometerSun,
  Wrench,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663040809690/KaSTPVbqiCuUDyUM.jpg";
const BLOCKED_DRAIN_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663040809690/riYCoUCElkGkxxMD.jpg";
const HOT_WATER_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663040809690/HHBImONBvBQBKXsF.jpg";
const PHONE_NUMBER = "+61 422 249 279";
const EMAIL = "ashpuri765@yahoo.com";

const services = [
  {
    icon: Droplets,
    title: "Drainage",
    description: "Complete drainage solutions including installation, repairs, and maintenance for residential and commercial properties.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80"
  },
  {
    icon: Flame,
    title: "Gas Fitting",
    description: "Licensed gas fitting services for appliance installation, repairs, and safety inspections.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
  },
  {
    icon: CloudRain,
    title: "Stormwater",
    description: "Stormwater drainage systems, pit installation, and flood prevention solutions.",
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&q=80"
  },
  {
    icon: CircleAlert,
    title: "Blocked Drains",
    description: "Fast and effective blocked drain clearing using high-pressure water jetting and CCTV inspection.",
    image: BLOCKED_DRAIN_IMAGE
  },
  {
    icon: ThermometerSun,
    title: "Hot Water Services",
    description: "Installation, repair, and replacement of all hot water systems including gas, electric, and solar.",
    image: HOT_WATER_IMAGE
  },
  {
    icon: Wrench,
    title: "General Plumbing",
    description: "Tap repairs, toilet fixes, pipe repairs, and all general plumbing maintenance needs.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80"
  }
];

const trustIndicators = [
  { icon: Shield, title: "Fully Insured", description: "Complete coverage for your peace of mind" },
  { icon: Award, title: "Licensed Plumber", description: "Qualified and certified professionals" },
  { icon: Clock, title: "Available 24/7", description: "Emergency services when you need them" },
  { icon: CheckCircle2, title: "Upfront Pricing", description: "No hidden fees or surprise charges" }
];

export default function Home() {
  const handleBookNow = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, "")}`;
    } else {
      window.location.href = `mailto:${EMAIL}?subject=Inquiry%20regarding%20Plumbing%20Services&body=Hello%20Ash%20Plumbing%20Services%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20plumbing%20services.%0A%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you.`;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={HERO_IMAGE} 
            alt="Professional plumbing services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-burnt-orange text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              Licensed Plumber in Dandenong North
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Your Trusted Local Plumbing Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Professional plumbing services in Melbourne. We do not charge crazy prices like our competitors - all prices are set and upfront. Fully licensed and insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button
                onClick={handleBookNow}
                size="lg"
                className="bg-burnt-orange hover:bg-burnt-orange-light text-white font-display font-semibold px-8 py-6 text-lg rounded-md transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Now
              </Button>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-display font-semibold px-8 py-6 text-lg rounded-md backdrop-blur-sm"
                >
                  View Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-cream-dark border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((item, index) => (
              <div 
                key={item.title} 
                className="flex items-center gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-eucalyptus/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-eucalyptus" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-burnt-orange font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4">
              Our Plumbing Services
            </h2>
            <p className="text-muted-foreground text-lg">
              From emergency repairs to complete installations, we provide comprehensive plumbing solutions for homes and businesses across Melbourne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-burnt-orange flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button 
                size="lg"
                className="bg-eucalyptus hover:bg-eucalyptus-light text-white font-display font-semibold px-8"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-20 bg-eucalyptus text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <span className="text-burnt-orange font-semibold text-sm uppercase tracking-wider">Good to Know</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-6">
                Service Scope
              </h2>
              <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                At Ash Plumbing Services, we believe in transparency and clear communication. Here is what you need to know about our services:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold mb-1">Upfront Pricing</h4>
                    <p className="text-gray-300 text-sm">All prices are set and provided upfront before work begins. No hidden fees or surprise charges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold mb-1">Licensed and Insured</h4>
                    <p className="text-gray-300 text-sm">We are fully licensed plumbers with comprehensive insurance coverage for your protection.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold mb-1">Service Area</h4>
                    <p className="text-gray-300 text-sm">Based in Dandenong North, we service all of Melbourne and surrounding suburbs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-burnt-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold mb-1">24/7 Availability</h4>
                    <p className="text-gray-300 text-sm">Emergency plumbing services available around the clock. Call anytime for urgent issues.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-white rounded-2xl p-8 text-foreground shadow-2xl">
                <h3 className="font-display font-bold text-2xl mb-6 text-eucalyptus">Need a Plumber?</h3>
                <p className="text-muted-foreground mb-6">
                  Get in touch with us today for a free quote. We are the most reliable plumbers in Melbourne with competitive pricing.
                </p>
                <div className="space-y-4">
                  <a 
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 p-4 bg-cream rounded-lg hover:bg-cream-dark transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-burnt-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call us now</p>
                      <p className="font-display font-bold text-lg text-foreground">{PHONE_NUMBER}</p>
                    </div>
                  </a>
                  <Button
                    onClick={handleBookNow}
                    className="w-full bg-burnt-orange hover:bg-burnt-orange-light text-white font-display font-semibold py-6 text-lg"
                  >
                    Book an Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cream-dark">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contact us today for professional plumbing services at competitive prices. We are here to help with all your plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleBookNow}
                size="lg"
                className="bg-burnt-orange hover:bg-burnt-orange-light text-white font-display font-semibold px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-eucalyptus text-eucalyptus hover:bg-eucalyptus hover:text-white font-display font-semibold px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
