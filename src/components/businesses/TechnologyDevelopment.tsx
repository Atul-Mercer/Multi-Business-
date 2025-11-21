import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Code, Smartphone, Laptop, TrendingUp, Users, Palette, Database, Cloud, Globe, Monitor, BookOpen, Award } from 'lucide-react';

interface TechnologyDevelopmentProps {
  onBack: () => void;
}

export function TechnologyDevelopment({ onBack }: TechnologyDevelopmentProps) {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom websites built with modern technologies',
      image: 'https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjQ2NDQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Secure & Scalable'],
      icon: Globe
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
      image: 'https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzYyNDk1NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['iOS & Android', 'User-Friendly UI', 'Cloud Integration', 'Real-time Features'],
      icon: Smartphone
    },
    {
      title: 'Digital Advertising',
      description: 'Strategic digital marketing campaigns',
      image: 'https://images.unsplash.com/photo-1709281847981-73a69aa6f770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBtYXJrZXRpbmd8ZW58MXx8fHwxNzYyNDkxODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Social Media Ads', 'Google Ads', 'Content Marketing', 'Analytics & Reporting'],
      icon: TrendingUp
    }
  ];

  const trainingPrograms = [
    { title: 'Full Stack Development', icon: Code, duration: '6 Months', level: 'Beginner to Advanced' },
    { title: 'Mobile App Development', icon: Smartphone, duration: '4 Months', level: 'Intermediate' },
    { title: 'UI/UX Design', icon: Palette, duration: '3 Months', level: 'Beginner' },
    { title: 'Data Science & AI', icon: Database, duration: '5 Months', level: 'Advanced' },
    { title: 'Cloud Computing', icon: Cloud, duration: '3 Months', level: 'Intermediate' },
    { title: 'Digital Marketing', icon: Monitor, duration: '2 Months', level: 'Beginner' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button
            onClick={onBack}
            variant="outline"
            className="mb-8 border-blue-500 text-blue-400 hover:bg-blue-500/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Technology Development
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Innovative Digital Solutions for Modern Business
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide comprehensive technology services including website and app development, 
              digital advertising campaigns, and professional technology training programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-black mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technology solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-all">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    {/* Image Column */}
                    <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>
                    
                    {/* Content Column */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-6">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-black mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 w-fit">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <BookOpen className="h-5 w-5" />
              <span>Technology Training</span>
            </div>
            <h2 className="text-black mb-4">Professional Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-focused courses designed to transform beginners into skilled professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4">
                    <program.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-black mb-3">{program.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <span className="text-blue-600">⏱</span>
                      Duration: {program.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-600" />
                      Level: {program.level}
                    </p>
                  </div>
                  <Button className="w-full mt-6 bg-black hover:bg-gray-900 text-white">
                    Enroll Now
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 text-xl">
              Let's discuss how our technology solutions can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
