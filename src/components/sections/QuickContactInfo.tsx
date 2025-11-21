import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function QuickContactInfo() {
  const contactItems = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 1234567890',
      subtext: 'Call us anytime',
      color: 'from-blue-600 to-blue-800',
      link: 'tel:+911234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@pushpagroup.com',
      subtext: '24/7 Support',
      color: 'from-blue-600 to-blue-800',
      link: 'mailto:info@pushpagroup.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Business District',
      subtext: 'Main Street, City 123456',
      color: 'from-blue-600 to-blue-800',
      link: null
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Sat',
      subtext: '9:00 AM - 7:00 PM',
      color: 'from-blue-600 to-blue-800',
      link: null
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-black mb-4">Get In Touch</h2>
          <p className="text-gray-600">We're here to help you with all your needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card
                className="border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg hover:shadow-2xl p-6 text-center h-full cursor-pointer"
                onClick={() => item.link && window.open(item.link, '_self')}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-black mb-2">{item.title}</h4>
                <p className="text-gray-900 mb-1">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.subtext}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
