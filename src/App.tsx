import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSlider } from './components/HeroSlider';
import { ScrollingIcons } from './components/ScrollingIcons';
import { QuickContactInfo } from './components/sections/QuickContactInfo';
import { SocialMediaPage } from './components/sections/SocialMediaPage';
import { BusinessCard } from './components/BusinessCard';
import { BusinessLogo } from './components/BusinessLogo';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ContactSection } from './components/sections/ContactSection';
import { PushpaFinance } from './components/businesses/PushpaFinance';
import { PushpaAgency } from './components/businesses/PushpaAgency';
import { SilverDrive } from './components/businesses/SilverDrive';
import { TechnologyDevelopment } from './components/businesses/TechnologyDevelopment';
import { RealEstate } from './components/businesses/RealEstate';
import { PushpaJewels } from './components/businesses/PushpaJewels';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';
import { Code, DollarSign, Pill, Car, Home, Gem } from 'lucide-react';

type BusinessView = 'home' | 'finance' | 'medical' | 'vehicles' | 'technology' | 'realestate' | 'jewels' | 'social' | 'about' | 'services' | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<BusinessView>('home');
  const [currentSection, setCurrentSection] = useState('home');
  
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const businessesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const businesses = [
    {
      id: 'finance',
      name: 'PUSHPA FINANCE ',
      tagline: 'Your Financial Growth Partner',
      description: 'Empowering your dreams with smart financial solutions. Get instant loans, insurance, and investment plans tailored for you.',
      type: 'finance' as const,
      icon: DollarSign,
      imageUrl: 'https://images.unsplash.com/photo-1626244105791-562784044969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzYyNDk1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'medical',
      name: 'PUSHPA AGENCY',
      tagline: 'Healthcare You Can Trust',
      description: 'Leading medical supplies distributor providing quality medicines and equipment to healthcare providers across the region.',
      type: 'medical' as const,
      icon: Pill,
      imageUrl: 'https://images.unsplash.com/photo-1758573467057-955f803660a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcGhhcm1hY3klMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyNDk1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'vehicles',
      name: 'SILVER DRIVE',
      tagline: 'Drive Your Dreams',
      description: 'Premium selection of pre-owned cars and bikes. Quality guaranteed, prices unmatched. Your perfect ride awaits.',
      type: 'vehicles' as const,
      icon: Car,
      imageUrl: 'https://images.unsplash.com/photo-1760092856749-31c8d5d28746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2MjQ5NTU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'technology',
      name: 'TECHNOLOGY DEVELOPMENT',
      tagline: 'Innovative Digital Solutions',
      description: 'Website & App Development, Digital Advertising, and Technology Training programs for aspiring professionals.',
      type: 'technology' as const,
      icon: Code,
      imageUrl: 'https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGV2ZWxvcG1lbnQlMjBjb2Rpbmd8ZW58MXx8fHwxNzYyNDk1NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'realestate',
      name: ' SILVER DRIVE PROPERTIES',
      tagline: 'Your Dream Property Awaits',
      description: 'Buy and sell residential and commercial properties with transparent pricing and legal documentation support.',
      type: 'realestate' as const,
      icon: Home,
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYyNTgyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'jewels',
      name: 'PUSHPA JEWELS',
      tagline: 'Exquisite Gold & Diamond Jewelry',
      description: 'Handcrafted jewelry for every special occasion. From traditional to contemporary designs, find your perfect piece.',
      type: 'jewels' as const,
      icon: Gem,
      imageUrl: 'https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZHxlbnwxfHx8fDE3NjI1NDY4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const handleExplore = (businessId: string) => {
    setCurrentView(businessId as BusinessView);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setCurrentSection('home');
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    
    // Each navigation item shows only that specific section
    switch (section) {
      case 'home':
        setCurrentView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'about':
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'services':
        setCurrentView('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'contact':
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'social':
        setCurrentView('social');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      default:
        // For business pages
        setCurrentView(section as BusinessView);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
    }
  };

  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      home: homeRef,
      about: aboutRef,
      services: servicesRef,
      contact: contactRef,
      businesses: businessesRef,
      portfolio: portfolioRef
    };

    const ref = refs[section];
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop - 100;
      window.scrollTo({
        top: section === 'home' ? 0 : offsetTop,
        behavior: 'smooth'
      });
    }
  };

  if (currentView === 'finance') {
    return (
      <>
        <Header onNavigate={handleNavigate} currentSection={currentSection} />
        <PushpaFinance onBack={handleBackToHome} />
        <Footer onNavigate={handleNavigate} onBusinessNavigate={handleExplore} />
        <Toaster />
      </>
    );
  }

  if (currentView === 'medical') {
    return (
      <>
        <Header onNavigate={handleNavigate} currentSection={currentSection} />
        <PushpaAgency onBack={handleBackToHome} />
        <Footer onNavigate={handleNavigate} onBusinessNavigate={handleExplore} />
        <Toaster />
      </>
    );
  }

  if (currentView === 'vehicles') {
    return (
      <>
        <Header onNavigate={handleNavigate} currentSection={currentSection} />
        <SilverDrive onBack={handleBackToHome} />
        <Footer onNavigate={handleNavigate} onBusinessNavigate={handleExplore} />
        <Toaster />
      </>
    );
  }

  if (currentView === 'technology') {
    return (
      <>
        <Header onNavigate={handleNavigate} currentSection={currentSection} />
        <TechnologyDevelopment onBack={handleBackToHome} />
        <Footer onNavigate={handleNavigate} onBusinessNavigate={handleExplore} />
        <Toaster />
      </>
    );
  }

  if (currentView === 'realestate') {
    return (
      <>
        <Header onNavigate={handleNavigate} currentSection={currentSection} />
        <RealEstate onBack={handleBackToHome} />
        <Footer onNavigate={handleNavigate} onBusinessNavigate={handleExplore} />
        <Toaster />
      </>
    );
  }

  if (currentView === 'jewels') {
    return (
      <>
        <Header onNavigate={handleNavigate} currentSection={currentSection} />
        <PushpaJewels onBack={handleBackToHome} />
        <Footer onNavigate={handleNavigate} onBusinessNavigate={handleExplore} />
        <Toaster />
      </>
    );
  }

  if (currentView === 'social') {
    return (
      <>
        <Header onNavigate={handleNavigate} currentSection={currentSection} />
        <SocialMediaPage />
        <Footer onNavigate={handleNavigate} onBusinessNavigate={handleExplore} />
        <Toaster />
      </>
    );
  }

  // About Page
  if (currentView === 'about') {
    return (
      <>
        <Header onNavigate={handleNavigate} currentSection={currentSection} />
        <div className="min-h-screen bg-white pt-32">
          <AboutSection />
        </div>
        <Footer onNavigate={handleNavigate} onBusinessNavigate={handleExplore} />
        <Toaster />
      </>
    );
  }

  // Services Page - Show all 6 businesses
  if (currentView === 'services') {
    return (
      <>
        <Header onNavigate={handleNavigate} currentSection={currentSection} />
        <div className="min-h-screen bg-white pt-32">
          <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16 mb-12">
            <div className="container mx-auto px-4 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-white mb-4">Our Services</h1>
                <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                  Excellence Across Finance, Healthcare, Automotive, Technology, Real Estate & Jewelry
                </p>
              </motion.div>
            </div>
          </section>
          
          <section className="py-12 pb-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {businesses.map((business, index) => (
                  <motion.div
                    key={business.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all overflow-hidden group h-full shadow-xl hover:shadow-2xl">
                      <div className="relative p-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                          <business.icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="mb-3 text-black text-center">{business.name}</h3>
                        <p className="text-blue-600 text-sm mb-3 text-center">{business.tagline}</p>
                        <p className="text-gray-600 text-sm mb-6 text-center">{business.description}</p>
                        <Button
                          onClick={() => handleExplore(business.id)}
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                        >
                          Click Here
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer onNavigate={handleNavigate} onBusinessNavigate={handleExplore} />
        <Toaster />
      </>
    );
  }

  // Contact Page
  if (currentView === 'contact') {
    return (
      <>
        <Header onNavigate={handleNavigate} currentSection={currentSection} />
        <div className="min-h-screen bg-white pt-32">
          <ContactSection />
        </div>
        <Footer onNavigate={handleNavigate} onBusinessNavigate={handleExplore} />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} currentSection={currentSection} />
      
      {/* Hero Slider - Full Width */}
      <section ref={homeRef} className="pt-20">
        <HeroSlider onExplore={handleExplore} />
      </section>

      {/* Scrolling Icons Section */}
      <section >
        <ScrollingIcons />
      </section>

      {/* Business Cards Section */}
      <section ref={businessesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-black mb-4">Branches of Pushpa Groups</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Excellence Across Finance, Medical, Automotive, Technology, Real Estate & Jewelry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {businesses.map((business, index) => (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all overflow-hidden group h-full shadow-xl hover:shadow-2xl">
                  <div className="relative p-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                      <business.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="mb-3 text-black text-center">{business.name}</h3>
                    <p className="text-blue-600 text-sm mb-3 text-center">{business.tagline}</p>
                    <p className="text-gray-600 text-sm mb-6 text-center">{business.description}</p>
                    <Button
                      onClick={() => handleExplore(business.id)}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                    >
                      Click Here
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <QuickContactInfo />

      {/* About Section */}
      <div ref={aboutRef}>
        <AboutSection />
      </div>

      {/* Services Section */}
      <div ref={servicesRef}>
        <ServicesSection onBusinessNavigate={handleExplore} />
      </div>

      {/* Contact Section */}
      <div ref={contactRef}>
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onBusinessNavigate={handleExplore} />
      
      <Toaster />
    </div>
  );
}
