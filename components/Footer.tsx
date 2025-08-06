import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { MapPin, Phone, Mail, Facebook, Instagram, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Fees", href: "#fees" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    "Homeschooling",
    "Individual Tutoring",
    "Small Group Classes",
    "Online Learning",
    "Exam Preparation",
    "Study Skills"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Crest Education</h2>
                  <p className="text-xs text-gray-400">Learning Center</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering students through personalized learning experiences, 
                expert guidance, and a supportive educational environment since 2009.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                  Riverside Drive, Westlands, Nairobi
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                  +254 712 345 678
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                  info@cresteducation.co.ke
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index} className="text-gray-300">
                    {program}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Subscribe to our newsletter for education tips, updates, and special offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 dark:bg-gray-900 border-gray-700 dark:border-gray-600 text-white placeholder-gray-400"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                >
                  Subscribe
                </Button>
              </form>
              
              {/* Social Media */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-200">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-200">
                    <X className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700 dark:bg-gray-600" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Crest Education Center. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          onClick={() => toast.info("WhatsApp integration would open here")}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
}