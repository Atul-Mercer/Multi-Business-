import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Facebook, Instagram, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

export function SocialMediaPage() {
  const businesses = [
    {
      name: 'Pushpa Agency',
      description: 'Medical Supplies & Healthcare',
      gradient: 'from-blue-600 to-blue-800',
      icon: '💊',
      social: {
        whatsapp: '+911234567890',
        facebook: 'https://facebook.com/pushpaagency',
        instagram: 'https://instagram.com/pushpaagency',
        phone: '+911234567890'
      }
    },
    {
      name: 'Pushpa Finance Agency',
      description: 'Financial Services & Loans',
      gradient: 'from-blue-700 to-blue-900',
      icon: '💰',
      social: {
        whatsapp: '+911234567891',
        facebook: 'https://facebook.com/pushpafinance',
        instagram: 'https://instagram.com/pushpafinance',
        phone: '+911234567891'
      }
    },
    {
      name: 'Silver Drive',
      description: 'Vehicles Sales & Services',
      gradient: 'from-gray-700 to-gray-900',
      icon: '🚗',
      social: {
        whatsapp: '+911234567892',
        facebook: 'https://facebook.com/silverdrive',
        instagram: 'https://instagram.com/silverdrive',
        phone: '+911234567892'
      }
    },
    {
      name: 'Technology Development',
      description: 'Web, App & Digital Solutions',
      gradient: 'from-blue-600 to-indigo-800',
      icon: '💻',
      social: {
        whatsapp: '+911234567893',
        facebook: 'https://facebook.com/pushpatech',
        instagram: 'https://instagram.com/pushpatech',
        phone: '+911234567893'
      }
    },
    {
      name: 'Real Estate',
      description: 'Property Buy & Sell',
      gradient: 'from-green-700 to-green-900',
      icon: '🏠',
      social: {
        whatsapp: '+911234567894',
        facebook: 'https://facebook.com/pushparealestate',
        instagram: 'https://instagram.com/pushparealestate',
        phone: '+911234567894'
      }
    },
    {
      name: 'Pushpa Jewels',
      description: 'Fine Jewelry & Ornaments',
      gradient: 'from-yellow-600 to-yellow-800',
      icon: '💎',
      social: {
        whatsapp: '+911234567895',
        facebook: 'https://facebook.com/pushpajewels',
        instagram: 'https://instagram.com/pushpajewels',
        phone: '+911234567895'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-white mb-4">Connect With Us</h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Stay connected with all our businesses on social media. Reach out to us directly through your preferred channel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {businesses.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all shadow-lg hover:shadow-2xl overflow-hidden h-full">
                  {/* Card Header with Gradient */}
                  <div className={`bg-gradient-to-r ${business.gradient} p-6 text-white`}>
                    <div className="text-5xl mb-4">{business.icon}</div>
                    <h3 className="text-white mb-2">{business.name}</h3>
                    <p className="text-gray-200 text-sm">{business.description}</p>
                  </div>

                  {/* Social Media Links */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        onClick={() => window.open(`https://wa.me/${business.social.whatsapp}`, '_blank')}
                        className="bg-green-600 hover:bg-green-700 w-full"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button
                        onClick={() => window.open(business.social.facebook, '_blank')}
                        className="bg-blue-600 hover:bg-blue-700 w-full"
                      >
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </Button>
                      <Button
                        onClick={() => window.open(business.social.instagram, '_blank')}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full"
                      >
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                      </Button>
                      <Button
                        onClick={() => window.open(`tel:${business.social.phone}`)}
                        className="bg-black hover:bg-gray-800 w-full"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
