/*
  DESIGN SYSTEM: Trade Craft Heritage Aesthetic
  - Contact page with form and NAP consistency for local SEO
  - Fields for Name, Phone, Email, and Message
  - Clear contact information display
*/

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2
} from "lucide-react";

const PHONE_NUMBER = "+61 422 249 279";
const EMAIL = "ashpuri765@yahoo.com";
const ADDRESS = "Dandenong North, Melbourne, VIC, Australia";
const BUSINESS_NAME = "Ash Plumbing Services";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open email client
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    toast.success("Opening your email client...");
    setIsSubmitting(false);
  };

  const handleBookNow = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, "")}`;
    } else {
      window.location.href = `mailto:${EMAIL}?subject=Inquiry%20regarding%20Plumbing%20Services`;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-eucalyptus text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-burnt-orange text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Get in Touch
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Have a plumbing emergency or need a quote? We are here to help. Contact us today and one of our friendly team members will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-card border-border shadow-xl">
                <CardContent className="p-8">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-semibold">
                        Your Name <span className="text-burnt-orange">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background border-input"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-semibold">
                        Phone Number <span className="text-burnt-orange">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="0400 000 000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background border-input"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold">
                        Email Address <span className="text-burnt-orange">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-input"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-semibold">
                        Message / Service Details <span className="text-burnt-orange">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please describe your plumbing issue or the service you require. Include any relevant details such as property type, urgency, or specific requirements."
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-background border-input min-h-[150px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-burnt-orange hover:bg-burnt-orange-light text-white font-display font-semibold py-6 text-lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information - NAP Consistency */}
            <div className="space-y-8">
              {/* Quick Contact Card */}
              <Card className="bg-eucalyptus text-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="font-display font-bold text-2xl mb-6">
                    Quick Contact
                  </h2>
                  <p className="text-gray-200 mb-6">
                    Need immediate assistance? Call us directly or send an email. We respond to all inquiries promptly.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-burnt-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Call us now</p>
                        <p className="font-display font-bold text-xl">{PHONE_NUMBER}</p>
                      </div>
                    </a>
                    <a 
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-burnt-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">Email us</p>
                        <p className="font-display font-bold text-lg">{EMAIL}</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Business Information - NAP for Local SEO */}
              <Card className="bg-card border-border shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                    Business Information
                  </h2>
                  
                  <address className="not-italic space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-eucalyptus/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-eucalyptus" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{BUSINESS_NAME}</p>
                        <p className="text-muted-foreground">{ADDRESS}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-eucalyptus/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-eucalyptus" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-eucalyptus transition-colors">
                          {PHONE_NUMBER}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-eucalyptus/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-eucalyptus" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-eucalyptus transition-colors">
                          {EMAIL}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-eucalyptus/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-eucalyptus" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Hours</p>
                        <p className="text-muted-foreground">Available 24/7</p>
                        <p className="text-sm text-burnt-orange font-semibold">Emergency services available</p>
                      </div>
                    </div>
                  </address>
                </CardContent>
              </Card>

              {/* Service Area */}
              <Card className="bg-cream-dark border-border">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">
                    Service Areas
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We proudly service Dandenong North and all surrounding Melbourne suburbs including:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Dandenong", "Noble Park", "Springvale", "Keysborough", "Mulgrave", "Clayton", "Oakleigh", "Glen Waverley", "Rowville", "Berwick"].map((suburb) => (
                      <span key={suburb} className="px-3 py-1 bg-white rounded-full text-sm text-foreground border border-border">
                        {suburb}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cream-dark">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Emergency Plumbing?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Do not wait - call us now for immediate assistance. Our team is available 24/7 for all plumbing emergencies.
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
