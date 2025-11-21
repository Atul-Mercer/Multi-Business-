import React from 'react';
import { BusinessLogo } from './BusinessLogo';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface FooterProps {
  onNavigate: (section: string) => void;
  onBusinessNavigate: (business: string) => void;
}

export function Footer({ onNavigate, onBusinessNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-blue-500/20">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white mb-4"
            >
              Stay Updated with Our Latest Offers
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-6"
            >
              Subscribe to our newsletter for exclusive deals and updates
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 whitespace-nowrap">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-blue-400 mb-4">
              Pushpa Group
            </h3>
            <p className="text-gray-400 mb-6">
              Leading the way in finance, healthcare, automotive, technology, real estate, and jewelry excellence. Your trusted partner for quality services across all sectors.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600/40 transition-all"
                >
                  <Icon className="h-5 w-5 text-gray-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Our Businesses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white mb-4">Our Businesses</h4>
            <ul className="space-y-3">
              {[
                { id: 'finance', name: 'Pushpa Finance Agency' },
                { id: 'medical', name: 'Pushpa Agency (Medical)' },
                { id: 'vehicles', name: 'Silver Drive' },
                { id: 'technology', name: 'Technology Development' },
                { id: 'realestate', name: 'Real Estate' },
                { id: 'jewels', name: 'Pushpa Jewels' }
              ].map((business) => (
                <li key={business.id}>
                  <button
                    onClick={() => onBusinessNavigate(business.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {business.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { id: 'home', name: 'Home' },
                { id: 'about', name: 'About Us' },
                { id: 'services', name: 'Services' },
                { id: 'contact', name: 'Contact' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>+91 1234567890</p>
                  <p className="text-sm">Mon-Sat, 9AM-7PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p>info@businessgroup.com</p>
                  <p className="text-sm">24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Business District,</p>
                  <p>Main Street, City 123456</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Business Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 py-8 border-y border-gray-800"
        >
          <div
            className="cursor-pointer transition-transform hover:scale-110"
            onClick={() => onBusinessNavigate('finance')}
          >
            <BusinessLogo name="Pushpa Finance" type="finance" size="md" />
          </div>
          <div
            className="cursor-pointer transition-transform hover:scale-110"
            onClick={() => onBusinessNavigate('medical')}
          >
            <BusinessLogo name="Pushpa Agency" type="medical" size="md" />
          </div>
          <div
            className="cursor-pointer transition-transform hover:scale-110"
            onClick={() => onBusinessNavigate('vehicles')}
          >
            <BusinessLogo name="Silver Drive" type="vehicles" size="md" />
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Pushpa Group. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Serving with excellence across Finance, Healthcare, Automotive, Technology, Real Estate & Jewelry sectors
          </p>
        </div>
      </div>
    </footer>
  );
}
