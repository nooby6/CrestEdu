import { Card, CardContent } from "./ui/card";
import { Heart, Target, Eye, Award, Users, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

export function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Care & Support",
      description: "Every student receives individual attention and emotional support for their learning journey."
    },
    {
      icon: Target,
      title: "Academic Excellence",
      description: "We maintain high standards and help students achieve their full academic potential."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building strong relationships between students, parents, and educators for collective success."
    }
  ];

  const stats = [
    { number: "500+", label: "Students Taught" },
    { number: "15+", label: "Years Experience" },
    { number: "95%", label: "Success Rate" },
    { number: "20+", label: "Qualified Tutors" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Crest Education Center
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Established with a vision to provide quality education that adapts to each child&#39;s unique learning style and pace.
          </p>
        </div>

        {/* Floating image on the left with subtle parallax */}
        <div 
          className="hidden lg:block absolute left-0 top-32 w-80 h-64 z-10"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=600&fit=crop"
            alt="Collaborative learning environment"
            className="rounded-2xl shadow-xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 dark:to-gray-900/20 rounded-2xl"></div>
        </div>

        {/* Main Content with flowing text */}
        <div className="relative z-20">
          {/* Mission, Vision, Story - flowing around the left image */}
          <div className="lg:ml-96 lg:pl-8 space-y-12 mb-16">
            {/* Mission */}
            <div className="lg:pr-20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide personalized, high-quality education that nurtures academic excellence, 
                critical thinking, and character development in a supportive learning environment.
              </p>
            </div>

            {/* Vision */}
            <div className="lg:pl-16">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading educational center that empowers students to reach their full potential 
                and become confident, responsible, and successful individuals in their chosen fields.
              </p>
            </div>

            {/* Story */}
            <div className="lg:pr-12">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Story</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded in 2009, Crest Education Center began as a small tutoring service with a passion 
                for personalized learning. Today, we serve hundreds of families with comprehensive 
                educational programs that adapt to modern learning needs.
              </p>
            </div>
          </div>
        </div>

        {/* Floating image on the right */}
        <div 
          className="hidden lg:block absolute right-0 top-96 w-72 h-48 z-10"
          style={{
            transform: `translateY(${scrollY * -0.03}px)`,
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=800&h=600&fit=crop"
            alt="Students studying together"
            className="rounded-2xl shadow-xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Values Section */}
        <div className="mb-16 lg:pr-80">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:shadow-gray-900/20 transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden">
          {/* Small floating decoration */}
          <div 
            className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-full opacity-20 blur-xl"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          ></div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Our Achievements</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile images for smaller screens */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=600&fit=crop"
            alt="Collaborative learning environment"
            className="rounded-2xl shadow-xl w-full h-48 object-cover"
          />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=800&h=600&fit=crop"
            alt="Students studying together"
            className="rounded-2xl shadow-xl w-full h-48 object-cover"
          />
        </div>

        {/* Background decorative elements with minimal movement */}
        <div 
          className="absolute right-10 top-20 w-24 h-24 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        ></div>
        <div 
          className="absolute left-1/3 bottom-20 w-32 h-32 bg-yellow-200 dark:bg-yellow-900 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        ></div>
      </div>
    </section>
  );
}