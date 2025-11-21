import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { DollarSign, Briefcase, Shield, Pill, Stethoscope, Package, Car, Bike, Wrench, Code, Smartphone, TrendingUp, Laptop } from 'lucide-react';

interface ServicesSectionProps {
  onBusinessNavigate: (business: string) => void;
}

export function ServicesSection({ onBusinessNavigate }: ServicesSectionProps) {
  const services = [
    {
      business: 'finance',
      title: 'Financial Services',
      icon: DollarSign,
      color: 'from-blue-600 to-blue-800',
      services: [
        { icon: Briefcase, name: 'Personal Loans', description: 'Quick approval with competitive rates' },
        { icon: DollarSign, name: 'Business Loans', description: 'Flexible financing for growth' },
        { icon: Shield, name: 'Insurance', description: 'Comprehensive coverage plans' }
      ]
    },
    {
      business: 'medical',
      title: 'Medical Supplies',
      icon: Pill,
      color: 'from-blue-600 to-blue-800',
      services: [
        { icon: Pill, name: 'Medicines', description: 'Wide range of pharmaceuticals' },
        { icon: Stethoscope, name: 'Medical Equipment', description: 'Quality healthcare tools' },
        { icon: Package, name: 'Supplies', description: 'Medical consumables & more' }
      ]
    },
    {
      business: 'vehicles',
      title: 'Automotive Sales',
      icon: Car,
      color: 'from-blue-600 to-blue-800',
      services: [
        { icon: Car, name: 'Pre-owned Cars', description: 'Certified quality vehicles' },
        { icon: Bike, name: 'Bikes & Scooters', description: 'Two-wheeler collection' },
        { icon: Wrench, name: 'Vehicle Service', description: 'Maintenance & repairs' }
      ]
    },
    {
      business: 'technology',
      title: 'Technology Development',
      icon: Code,
      color: 'from-blue-600 to-blue-800',
      services: [
        { icon: Laptop, name: 'Web Development', description: 'Modern responsive websites' },
        { icon: Smartphone, name: 'App Development', description: 'iOS & Android apps' },
        { icon: TrendingUp, name: 'Digital Advertising', description: 'Strategic marketing campaigns' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-black mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions across finance, healthcare, automotive, and technology sectors. 
            We're committed to delivering excellence in every service we provide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all h-full group bg-white shadow-lg">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-black">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <service.icon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-black text-sm">{service.name}</p>
                        <p className="text-gray-600 text-xs">{service.description}</p>
                      </div>
                    </div>
                  ))}
                  <Button
                    onClick={() => onBusinessNavigate(category.business)}
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-black to-gray-900 border-blue-500/30">
            <CardContent className="p-8">
              <h3 className="text-white mb-3">Need a Custom Solution?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We understand that every client is unique. Contact us to discuss how we can tailor our services to meet your specific needs.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
              >
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
