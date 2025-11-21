import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Facebook, Instagram, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export function Header({ onNavigate, currentSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'contact', label: 'Contact' },
    { id: 'social', label: 'Social Media' }
  ];

  const serviceItems = [
    { id: 'finance', label: 'Pushpa Finance Agency' },
    { id: 'medical', label: 'Pushpa Agency' },
    { id: 'vehicles', label: 'Silver Drive' },
    { id: 'technology', label: 'Technology Development' },
    { id: 'realestate', label: 'Real Estate' },
    { id: 'jewels', label: 'Pushpa Jewels' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg"
    >
      {/* Top Social Media Bar */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-6 py-3">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.2, textShadow: "0 0 8px rgba(96, 165, 250, 0.8)" }}
            >
              <Facebook className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-all duration-300"
              whileHover={{ scale: 1.2, textShadow: "0 0 8px rgba(236, 72, 153, 0.8)" }}
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-all duration-300"
              whileHover={{ scale: 1.2, textShadow: "0 0 8px rgba(34, 197, 94, 0.8)" }}
            >
              <MessageCircle className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="tel:+911234567890"
              className="text-white hover:text-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.2, textShadow: "0 0 8px rgba(96, 165, 250, 0.8)" }}
            >
              <Phone className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">P</span>
              </div>
              <div>
                <h2 className="text-white leading-tight">
                  Pushpa Group
                </h2>
                <p className="text-blue-400 text-xs tracking-wider">Building Businesses · Empowering Growth</p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <motion.button
                      onClick={() => onNavigate(item.id)}
                      className={`relative text-sm transition-colors flex items-center gap-1 ${
                        currentSection === item.id
                          ? 'text-blue-400'
                          : 'text-white hover:text-blue-400'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                      {currentSection === item.id && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"
                        />
                      )}
                    </motion.button>
                    
                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-2xl overflow-hidden z-50"
                        >
                          {serviceItems.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => {
                                onNavigate(service.id);
                                setIsServicesOpen(false);
                              }}
                              className="w-full text-left px-4 py-3 text-white hover:bg-blue-600 hover:text-white transition-colors border-b border-gray-800 last:border-b-0 text-sm"
                            >
                              {service.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.button
                    onClick={() => onNavigate(item.id)}
                    className={`relative text-sm transition-colors ${
                      currentSection === item.id
                        ? 'text-blue-400'
                        : 'text-white hover:text-blue-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {currentSection === item.id && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"
                      />
                    )}
                  </motion.button>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-6 border-t border-gray-800">
                {navItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        if (!item.hasDropdown) {
                          onNavigate(item.id);
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        currentSection === item.id
                          ? 'bg-blue-600 text-white'
                          : 'text-white hover:bg-gray-800'
                      }`}
                    >
                      {item.label}
                    </button>
                    {item.hasDropdown && (
                      <div className="mt-2 ml-4 space-y-2">
                        {serviceItems.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => {
                              onNavigate(service.id);
                              setIsMobileMenuOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                          >
                            {service.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
