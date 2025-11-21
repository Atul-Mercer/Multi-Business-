import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Home, Building2, MapPin, Bed, Bath, Square, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface RealEstateProps {
  onBack: () => void;
}

export function RealEstate({ onBack }: RealEstateProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const properties = [
    {
      id: 1,
      title: '3BHK Luxury Apartment',
      type: 'apartment',
      price: '₹85,00,000',
      location: 'Downtown District',
      bedrooms: 3,
      bathrooms: 2,
      area: '1450 sq ft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYyNTgyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      title: 'Commercial Office Space',
      type: 'commercial',
      price: '₹1,20,00,000',
      location: 'Business District',
      bedrooms: 0,
      bathrooms: 3,
      area: '2500 sq ft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYyNTgyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      title: 'Independent Villa',
      type: 'house',
      price: '₹1,50,00,000',
      location: 'Green Valley',
      bedrooms: 4,
      bathrooms: 3,
      area: '2800 sq ft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYyNTgyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      title: '2BHK Modern Flat',
      type: 'apartment',
      price: '₹55,00,000',
      location: 'Lake View Area',
      bedrooms: 2,
      bathrooms: 2,
      area: '1150 sq ft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYyNTgyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      title: 'Retail Shop Space',
      type: 'commercial',
      price: '₹75,00,000',
      location: 'Market Street',
      bedrooms: 0,
      bathrooms: 1,
      area: '800 sq ft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYyNTgyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      title: 'Duplex House',
      type: 'house',
      price: '₹95,00,000',
      location: 'Riverside Colony',
      bedrooms: 3,
      bathrooms: 3,
      area: '2200 sq ft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYyNTgyMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const filteredProperties = activeCategory === 'all' 
    ? properties 
    : properties.filter(p => p.type === activeCategory);

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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center mx-auto mb-6">
              <Home className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6 text-white">Real Estate</h1>
            <p className="text-xl text-gray-300 mb-8">
              Find Your Perfect Property
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse our extensive collection of residential and commercial properties. 
              Quality verified properties with transparent pricing and legal documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Buy/Sell Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="buy">Buy Property</TabsTrigger>
              <TabsTrigger value="sell">Sell Property</TabsTrigger>
            </TabsList>

            {/* Buy Section */}
            <TabsContent value="buy">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Category Filter */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                  {[
                    { id: 'all', label: 'All Properties' },
                    { id: 'apartment', label: 'Apartments' },
                    { id: 'house', label: 'Houses' },
                    { id: 'commercial', label: 'Commercial' }
                  ].map((category) => (
                    <Button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      variant={activeCategory === category.id ? 'default' : 'outline'}
                      className={activeCategory === category.id 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-800' 
                        : ''}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>

                {/* Property Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map((property, index) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                    >
                      <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all overflow-hidden shadow-lg hover:shadow-2xl">
                        <ImageWithFallback
                          src={property.image}
                          alt={property.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-black mb-2">{property.title}</h3>
                          <p className="text-blue-600 mb-4">{property.price}</p>
                          
                          <div className="flex items-center text-gray-600 text-sm mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            {property.location}
                          </div>

                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                            {property.bedrooms > 0 && (
                              <div className="flex items-center">
                                <Bed className="h-4 w-4 mr-1" />
                                {property.bedrooms} Bed
                              </div>
                            )}
                            <div className="flex items-center">
                              <Bath className="h-4 w-4 mr-1" />
                              {property.bathrooms} Bath
                            </div>
                            <div className="flex items-center">
                              <Square className="h-4 w-4 mr-1" />
                              {property.area}
                            </div>
                          </div>

                          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                            View Details
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Sell Section */}
            <TabsContent value="sell">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center max-w-2xl mx-auto"
              >
                <Card className="border-2 border-gray-200 p-12">
                  <Building2 className="h-20 w-20 mx-auto mb-6 text-blue-600" />
                  <h2 className="text-black mb-4">Sell Your Property</h2>
                  <p className="text-gray-600 mb-8">
                    List your property with us and reach thousands of potential buyers. 
                    Fill out our form and our team will contact you shortly.
                  </p>
                  <Button
                    size="lg"
                    onClick={() => window.open('https://forms.google.com/your-form-link', '_blank')}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Submit Property Details
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    (Opens in Google Forms)
                  </p>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
