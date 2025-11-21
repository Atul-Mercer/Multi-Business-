import React, { useState } from 'react';
import { BusinessLogo } from '../BusinessLogo';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { motion } from 'motion/react';
import { ArrowLeft, Car, Bike, Truck, Phone, Mail, MapPin, Calendar, Fuel, Gauge, Settings, CheckCircle, ExternalLink } from 'lucide-react';

interface SilverDriveProps {
  onBack: () => void;
}

export function SilverDrive({ onBack }: SilverDriveProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const vehicles = [
    {
      id: 1,
      type: 'car',
      name: 'Honda City VX',
      year: '2022',
      price: '₹12,50,000',
      condition: 'Excellent',
      km: '15,000 km',
      fuel: 'Petrol',
      transmission: 'Manual',
      owner: '1st Owner',
      color: 'Pearl White',
      features: ['Sunroof', 'Alloy Wheels', 'ABS', 'Airbags'],
      image: 'https://images.unsplash.com/photo-1760092856749-31c8d5d28746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2MjQ5NTU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      type: 'car',
      name: 'Maruti Swift ZXI',
      year: '2023',
      price: '₹7,80,000',
      condition: 'Like New',
      km: '8,000 km',
      fuel: 'Petrol',
      transmission: 'AMT',
      owner: '1st Owner',
      color: 'Fire Red',
      features: ['Touchscreen', 'Rear Camera', 'ABS', 'Climate Control'],
      image: 'https://images.unsplash.com/photo-1760092856749-31c8d5d28746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2MjQ5NTU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      type: 'car',
      name: 'Hyundai Creta SX',
      year: '2021',
      price: '₹14,90,000',
      condition: 'Excellent',
      km: '22,000 km',
      fuel: 'Diesel',
      transmission: 'Automatic',
      owner: '1st Owner',
      color: 'Phantom Black',
      features: ['Panoramic Sunroof', 'Leather Seats', 'Wireless Charging', '360 Camera'],
      image: 'https://images.unsplash.com/photo-1760092856749-31c8d5d28746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2MjQ5NTU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      type: 'bike',
      name: 'Royal Enfield Classic 350',
      year: '2023',
      price: '₹1,95,000',
      condition: 'Excellent',
      km: '3,500 km',
      fuel: 'Petrol',
      transmission: 'Manual',
      owner: '1st Owner',
      color: 'Stealth Black',
      features: ['ABS', 'Digital Meter', 'LED Lights', 'USB Charging'],
      image: 'https://images.unsplash.com/photo-1760092856749-31c8d5d28746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2MjQ5NTU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      type: 'bike',
      name: 'Honda CBR 250R',
      year: '2022',
      price: '₹1,75,000',
      condition: 'Good',
      km: '8,500 km',
      fuel: 'Petrol',
      transmission: 'Manual',
      owner: '1st Owner',
      color: 'Racing Red',
      features: ['ABS', 'Digital Console', 'LED Headlamp', 'Split Seats'],
      image: 'https://images.unsplash.com/photo-1760092856749-31c8d5d28746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2MjQ5NTU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      type: 'truck',
      name: 'Tata Ace HT',
      year: '2021',
      price: '₹4,50,000',
      condition: 'Good',
      km: '35,000 km',
      fuel: 'Diesel',
      transmission: 'Manual',
      owner: '2nd Owner',
      color: 'White',
      features: ['High Capacity', 'Power Steering', 'Strong Chassis'],
      image: 'https://images.unsplash.com/photo-1760092856749-31c8d5d28746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2MjQ5NTU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 7,
      type: 'truck',
      name: 'Mahindra Bolero Pickup',
      year: '2022',
      price: '₹7,20,000',
      condition: 'Excellent',
      km: '18,000 km',
      fuel: 'Diesel',
      transmission: 'Manual',
      owner: '1st Owner',
      color: 'Diamond White',
      features: ['4WD', 'Power Windows', 'Air Conditioning', 'Heavy Duty'],
      image: 'https://images.unsplash.com/photo-1760092856749-31c8d5d28746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2MjQ5NTU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const filteredVehicles = activeCategory === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.type === activeCategory);

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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-6">
              <Car className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6 text-white">SILVER DRIVE</h1>
            <p className="text-xl text-gray-300 mb-8">
              Drive Your Dreams
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Premium selection of certified pre-owned cars, bikes, and commercial vehicles. 
              Quality guaranteed, prices unmatched. Your perfect ride awaits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Buy/Sell Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="buy">Buy Vehicle</TabsTrigger>
              <TabsTrigger value="sell">Sell Vehicle</TabsTrigger>
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
                    { id: 'all', label: 'All Vehicles', icon: Settings },
                    { id: 'car', label: 'Cars', icon: Car },
                    { id: 'bike', label: 'Bikes', icon: Bike },
                    { id: 'truck', label: 'Trucks', icon: Truck }
                  ].map((category) => (
                    <Button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      variant={activeCategory === category.id ? 'default' : 'outline'}
                      className={activeCategory === category.id 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-800' 
                        : ''}
                    >
                      <category.icon className="h-4 w-4 mr-2" />
                      {category.label}
                    </Button>
                  ))}
                </div>

                {/* Vehicle Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVehicles.map((vehicle, index) => (
                    <motion.div
                      key={vehicle.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                    >
                      <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all overflow-hidden shadow-lg hover:shadow-2xl h-full">
                        <div className="relative">
                          <ImageWithFallback
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-full">
                            {vehicle.year}
                          </div>
                        </div>
                        
                        <CardHeader>
                          <CardTitle className="text-black">{vehicle.name}</CardTitle>
                          <CardDescription className="text-blue-600 text-lg">
                            {vehicle.price}
                          </CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Gauge className="h-4 w-4" />
                              {vehicle.km}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Fuel className="h-4 w-4" />
                              {vehicle.fuel}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Settings className="h-4 w-4" />
                              {vehicle.transmission}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <CheckCircle className="h-4 w-4" />
                              {vehicle.owner}
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-xs text-gray-500 mb-2">Key Features:</p>
                            <div className="flex flex-wrap gap-2">
                              {vehicle.features.slice(0, 3).map((feature, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                            View Details
                          </Button>
                        </CardContent>
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
                  <Car className="h-20 w-20 mx-auto mb-6 text-blue-600" />
                  <h2 className="text-black mb-4">Sell Your Vehicle</h2>
                  <p className="text-gray-600 mb-8">
                    Get the best price for your vehicle. Fill out our form and our team will contact you 
                    within 24 hours with a competitive offer.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
                    <h3 className="text-black mb-4">Why Sell With Us?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Best market price guaranteed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Free vehicle inspection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Quick payment process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Complete documentation support</span>
                      </li>
                    </ul>
                  </div>

                  <Button
                    size="lg"
                    onClick={() => window.open('https://forms.google.com/your-form-link', '_blank')}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Submit Vehicle Details
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

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white text-center">Contact Silver Drive</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-blue-100 text-sm">Call Us</p>
                  <p>+91 1234567890</p>
                </div>
                <div>
                  <Mail className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-blue-100 text-sm">Email Us</p>
                  <p>info@silverdrive.com</p>
                </div>
                <div>
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-blue-100 text-sm">Visit Us</p>
                  <p>Auto Market, Business District</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
