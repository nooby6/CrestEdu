'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Star, ArrowRight, Banknote, Users, Clock } from "lucide-react";

export function Fees() {
  const pricingPlans = [
    {
      name: "Individual Tutoring",
      price: "Ksh 5,500",
      period: "per hour",
      description: "One-on-one personalized learning",
      features: [
        "Customized lesson plans",
        "Flexible scheduling",
        "Progress tracking",
        "Homework support",
        "Parent consultations"
      ],
      popular: false,
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Small Group Classes",
      price: "Ksh 3,200",
      period: "per hour",
      description: "3-6 students per class",
      features: [
        "Interactive group learning",
        "Peer collaboration",
        "Subject specialists",
        "Regular assessments",
        "Study materials included"
      ],
      popular: true,
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Homeschool Program",
      price: "Ksh 45,000",
      period: "per month",
      description: "Comprehensive curriculum support",
      features: [
        "Full curriculum coverage",
        "Daily lesson plans",
        "Learning resources",
        "Progress monitoring",
        "Parent training included"
      ],
      popular: false,
      icon: Star,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const enrollmentSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Free 30-minute consultation to assess your child's needs and discuss learning goals.",
      icon: Users
    },
    {
      step: 2,
      title: "Choose Your Program",
      description: "Select the most suitable program based on your child's learning style and schedule.",
      icon: Check
    },
    {
      step: 3,
      title: "Complete Registration",
      description: "Fill out enrollment forms and arrange payment. We'll handle the rest!",
      icon: ArrowRight
    },
    {
      step: 4,
      title: "Start Learning",
      description: "Begin your educational journey with our experienced tutors and comprehensive support.",
      icon: Star
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="fees" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Fees & Enrollment
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transparent pricing with flexible payment options. Invest in your child's education with our comprehensive learning programs designed for Kenyan families.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:shadow-gray-900/20 ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2 dark:text-white">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-normal"> {plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90`}
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Fee Information */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Banknote className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Flexible Payment</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Monthly, quarterly, or annual payment options available</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Setup Fees</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Start immediately with no hidden costs or registration fees</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sibling Discounts</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">15% discount for second child, 25% for third child onwards</p>
            </div>
          </div>
        </div>

        {/* Enrollment Process */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">Simple Enrollment Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {enrollmentSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-blue-600">{step.step}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied families who have chosen Crest Education Center for their children's academic success.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}