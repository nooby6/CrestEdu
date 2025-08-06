import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Users, Monitor, GraduationCap, Clock, Target } from "lucide-react";
import { useEffect, useState } from "react";

export function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: BookOpen,
      title: "Homeschooling Programs",
      description: "Comprehensive curriculum-based learning with personalized attention for your child's educational journey.",
      features: ["Custom Learning Plans", "Progress Tracking", "Parent Support", "Certified Materials"],
      ageGroups: ["Primary (6-11)", "Secondary (12-16)", "Pre-University (17-18)"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Small Group Tuition",
      description: "Interactive learning sessions with 3-6 students, ensuring individual attention while fostering peer learning.",
      features: ["Subject Specialists", "Exam Preparation", "Regular Assessments", "Homework Support"],
      ageGroups: ["Primary", "Secondary", "IGCSE/A-Levels"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Monitor,
      title: "Online Classes",
      description: "Flexible virtual learning sessions with interactive tools and recorded materials for review.",
      features: ["Live Interactive Sessions", "Recorded Lessons", "Digital Resources", "24/7 Access"],
      ageGroups: ["All Age Groups", "Adult Learning", "Skill Development"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const subjects = [
    "Mathematics", "English", "Science", "History", "Geography", 
    "Physics", "Chemistry", "Biology", "Economics", "Art & Design"
  ];

  return (
    <section id="programs" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Educational Programs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our range of flexible learning options designed to meet every student's unique needs and learning style.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/20 transform hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2 dark:text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Age Groups */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Age Groups:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.ageGroups.map((age, ageIndex) => (
                      <Badge key={ageIndex} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                        {age}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subjects Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Subjects We Offer</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {subjects.map((subject, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 transform hover:scale-110 transition-all duration-300"
              >
                {subject}
              </Badge>
            ))}
          </div>
        </div>

        {/* Floating decorative elements with minimal movement */}
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.02}px)` }}
        ></div>
        <div 
          className="absolute top-60 right-20 w-16 h-16 bg-green-200 dark:bg-green-900 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.01}px)` }}
        ></div>
      </div>
    </section>
  );
}