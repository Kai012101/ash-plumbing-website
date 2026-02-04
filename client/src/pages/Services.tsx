/*
  DESIGN SYSTEM: Trade Craft Heritage Aesthetic
  - Services page with categorized offerings
  - Descriptive images and bulleted lists for each service
  - Clear value proposition presentation
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Droplets, 
  Flame, 
  CloudRain, 
  CircleAlert,
  ThermometerSun,
  Wrench,
  CheckCircle2,
  ShowerHead,
  Pipette,
  Gauge
} from "lucide-react";

const BLOCKED_DRAIN_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663040809690/riYCoUCElkGkxxMD.jpg";
const HOT_WATER_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663040809690/HHBImONBvBQBKXsF.jpg";
const PHONE_NUMBER = "+61 422 249 279";
const EMAIL = "ashpuri765@yahoo.com";

const services = [
  {
    id: "drainage",
    icon: Droplets,
    title: "Drainage Services",
    description: "Complete drainage solutions for residential and commercial properties. Our expert team handles everything from simple repairs to complex installations.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    features: [
      "Drain installation and replacement",
      "Drain cleaning and maintenance",
      "Sewer line repairs",
      "Drainage system inspections",
      "Preventive maintenance programs",
      "Commercial drainage solutions"
    ]
  },
  {
    id: "gas-fitting",
    icon: Flame,
    title: "Gas Fitting",
    description: "Licensed gas fitting services ensuring safety and compliance. We handle all gas appliance installations and repairs with precision.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: [
      "Gas appliance installation",
      "Gas leak detection and repair",
      "Gas hot water system installation",
      "Gas cooktop and oven connections",
      "Gas heater servicing",
      "Compliance certificates"
    ]
  },
  {
    id: "stormwater",
    icon: CloudRain,
    title: "Stormwater Management",
    description: "Protect your property from water damage with our comprehensive stormwater solutions. We design and install systems to handle Melbourne's weather.",
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&q=80",
    features: [
      "Stormwater pit installation",
      "Drainage channel systems",
      "Flood prevention solutions",
      "Rainwater tank connections",
      "Gutter and downpipe repairs",
      "Property drainage assessments"
    ]
  },
  {
    id: "blocked-drains",
    icon: CircleAlert,
    title: "Blocked Drain Clearing",
    description: "Fast and effective blocked drain solutions using the latest technology. We clear blockages quickly and identify the root cause to prevent recurrence.",
    image: BLOCKED_DRAIN_IMAGE,
    features: [
      "High-pressure water jetting",
      "CCTV drain inspection",
      "Root cutting and removal",
      "Grease trap cleaning",
      "Emergency drain clearing",
      "Preventive drain maintenance"
    ]
  },
  {
    id: "hot-water",
    icon: ThermometerSun,
    title: "Hot Water Services",
    description: "Expert installation, repair, and replacement of all hot water systems. We work with all major brands and system types.",
    image: HOT_WATER_IMAGE,
    features: [
      "Gas hot water systems",
      "Electric hot water units",
      "Solar hot water installation",
      "Heat pump systems",
      "Hot water repairs and servicing",
      "Emergency replacements"
    ]
  },
  {
    id: "general-plumbing",
    icon: Wrench,
    title: "General Plumbing",
    description: "Comprehensive plumbing services for all your everyday needs. From minor repairs to major renovations, we handle it all.",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    features: [
      "Tap repairs and replacements",
      "Toilet repairs and installation",
      "Pipe repairs and replacements",
      "Water pressure issues",
      "Leak detection and repair",
      "Bathroom and kitchen plumbing"
    ]
  },
  {
    id: "bathroom",
    icon: ShowerHead,
    title: "Bathroom Plumbing",
    description: "Complete bathroom plumbing services from renovations to repairs. We ensure your bathroom functions perfectly.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    features: [
      "Bathroom renovations",
      "Shower installation and repairs",
      "Bathtub plumbing",
      "Vanity and basin installation",
      "Toilet suite installation",
      "Waterproofing solutions"
    ]
  },
  {
    id: "maintenance",
    icon: Gauge,
    title: "Plumbing Maintenance",
    description: "Regular maintenance to prevent costly repairs. Our maintenance programs keep your plumbing system running efficiently.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    features: [
      "Annual plumbing inspections",
      "Preventive maintenance plans",
      "Water heater servicing",
      "Drain cleaning schedules",
      "Fixture maintenance",
      "System efficiency checks"
    ]
  }
];

export default function Services() {
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
      <section className="bg-eucalyptus text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-burnt-orange text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Professional Plumbing Solutions
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              From emergency repairs to complete installations, Ash Plumbing Services provides comprehensive plumbing solutions for homes and businesses across Melbourne. All work is performed by licensed professionals with upfront pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-burnt-orange flex items-center justify-center shadow-lg">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-eucalyptus flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleBookNow}
                    className="bg-burnt-orange hover:bg-burnt-orange-light text-white font-display font-semibold"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Get a Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream-dark">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-burnt-orange font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4">
              The Ash Plumbing Difference
            </h2>
            <p className="text-muted-foreground text-lg">
              We are committed to providing the best plumbing services in Melbourne with honesty, reliability, and exceptional workmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Upfront Pricing", description: "No hidden fees. We provide clear quotes before starting any work." },
              { title: "Licensed Experts", description: "Fully licensed and qualified plumbers with years of experience." },
              { title: "24/7 Emergency", description: "Available around the clock for urgent plumbing emergencies." },
              { title: "Quality Guarantee", description: "We stand behind our work with comprehensive warranties." }
            ].map((item) => (
              <Card key={item.title} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-eucalyptus/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-eucalyptus" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-eucalyptus text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Need Plumbing Help?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Contact us today for a free quote. We offer competitive pricing and professional service for all your plumbing needs.
            </p>
            <Button
              onClick={handleBookNow}
              size="lg"
              className="bg-burnt-orange hover:bg-burnt-orange-light text-white font-display font-semibold px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: {PHONE_NUMBER}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
