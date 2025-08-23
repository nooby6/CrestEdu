'use client'

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Camera, Users, BookOpen, Award } from "lucide-react";
import { useEffect, useState } from "react";

export function Gallery() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&h=600&fit=crop",
      alt: "Interactive classroom learning",
      category: "Classroom",
      title: "Interactive Learning Sessions",
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=600&fit=crop",
      alt: "Students collaborating on projects",
      category: "Collaboration",
      title: "Group Project Work",
    },
    {
      src: "https://unsplash.com/photos/man-in-black-shirt-using-computer-sEgodrJdMGw",
      alt: "Online learning setup",
      category: "Online",
      title: "Virtual Learning Environment",
    },
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=800&h=600&fit=crop",
      alt: "Individual tutoring session",
      category: "Tutoring",
      title: "One-on-One Support",
    },
    {
      src: "https://images.unsplash.com/photo-1506377872008-6645d6f2b5ac?q=80&w=800&h=600&fit=crop",
      alt: "Science laboratory work",
      category: "Science",
      title: "Hands-on Science Learning",
    },
    {
      src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&h=600&fit=crop",
      alt: "Mathematics problem solving",
      category: "Mathematics",
      title: "Problem Solving Sessions",
    },
  ];

  const testimonials = [
    {
      text: "The personalized approach helped my daughter excel in mathematics. She went from struggling to loving the subject!",
      author: "Sarah Johnson",
      role: "Parent",
      rating: 5,
    },
    {
      text: "Flexible online classes fit perfectly with our family schedule. The quality of teaching is exceptional.",
      author: "Michael Chen",
      role: "Parent",
      rating: 5,
    },
    {
      text: "Small group sessions provide the perfect balance of individual attention and peer interaction.",
      author: "Emma Williams",
      role: "Parent",
      rating: 5,
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learning in Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our vibrant learning environment where
            students thrive through engaging activities,
            collaborative projects, and personalized
            instruction.
          </p>
        </div>

        {/* Masonry-style gallery with subtle scroll effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 dark:bg-gray-800 dark:shadow-gray-900/20"
              style={{
                transform: `translateY(${scrollY * (0.01 + (index % 3) * 0.005)}px)`,
                height:
                  index % 3 === 0
                    ? "300px"
                    : index % 3 === 1
                      ? "350px"
                      : "280px",
              }}
            >
              <div className="relative h-full">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <Badge
                    variant="secondary"
                    className="mb-2 bg-white/20 text-white border-white/30"
                  >
                    {image.category}
                  </Badge>
                  <h3 className="text-lg font-semibold">
                    {image.title}
                  </h3>
                </div>
                {/* Floating icon overlay */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What Parents Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:shadow-gray-900/20 transform hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map(
                      (_, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                        >
                          ⭐
                        </div>
                      ),
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement highlights */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: BookOpen,
              title: "15+ Years",
              subtitle: "Teaching Excellence",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: Users,
              title: "500+",
              subtitle: "Happy Students",
              color: "from-green-500 to-green-600",
            },
            {
              icon: Award,
              title: "95%",
              subtitle: "Success Rate",
              color: "from-purple-500 to-purple-600",
            },
            {
              icon: Camera,
              title: "1000+",
              subtitle: "Learning Moments",
              color: "from-orange-500 to-orange-600",
            },
          ].map((achievement, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-110 transition-transform duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {achievement.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Floating decorative elements with minimal movement */}
        <div
          className="absolute top-10 right-10 w-20 h-20 bg-yellow-200 dark:bg-yellow-900 rounded-full opacity-20 blur-3xl"
          style={{
            transform: `translateY(${scrollY * -0.02}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-pink-200 dark:bg-pink-900 rounded-full opacity-20 blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.015}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-16 h-16 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.01}px)`,
          }}
        ></div>
      </div>
    </section>
  );
}