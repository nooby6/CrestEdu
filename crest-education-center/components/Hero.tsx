import { Button } from "./ui/button";
import { CheckCircle, Users, Clock, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { icon: Users, text: "Small Group Classes" },
    { icon: Award, text: "Certified Tutors" },
    { icon: Clock, text: "Flexible Schedules" },
    { icon: CheckCircle, text: "Proven Results" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Floating image with subtle parallax effect */}
        <div 
          className="absolute right-0 top-10 w-80 h-96 lg:w-96 lg:h-[500px] z-10 hidden lg:block"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=600&fit=crop"
            alt="Students learning in a classroom environment"
            className="rounded-2xl shadow-2xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          {/* Floating decorative elements */}
          <div 
            className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-30 blur-xl"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          ></div>
          <div 
            className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-400 rounded-full opacity-30 blur-xl"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          ></div>
        </div>

        {/* Text content with flowing layout */}
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Nurturing Academic
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              {" "}Excellence
            </span>
            <br />
            <span className="text-3xl lg:text-4xl block mt-4 text-gray-700 dark:text-gray-300">
              Through Personalized Learning
            </span>
          </h1>

          {/* Text that flows around the image area */}
          <div className="lg:pr-80 xl:pr-96">
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Empowering students through personalized homeschooling, expert tuition, and flexible online classes. 
              Join our learning community where every child&apos;s potential is unlocked through innovative teaching methods 
              and dedicated support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300"
              >
                Enroll Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#about')}
                className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Features with minimal movement */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:pr-80 xl:pr-96">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center lg:items-start text-center lg:text-left transform hover:scale-110 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile image */}
        <div className="lg:hidden mt-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=600&fit=crop"
            alt="Students learning in a classroom environment"
            className="rounded-2xl shadow-2xl w-full h-[300px] object-cover"
          />
        </div>

        {/* Background decorative elements with minimal movement */}
        <div 
          className="absolute left-10 top-1/3 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        ></div>
        <div 
          className="absolute left-1/4 bottom-20 w-24 h-24 bg-green-200 dark:bg-green-900 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        ></div>
      </div>
    </section>
  );
}