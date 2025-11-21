import React, { useState } from 'react';
import { BusinessLogo } from '../BusinessLogo';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { motion } from 'motion/react';
import { ArrowLeft, Pill, Stethoscope, Thermometer, Phone, Mail, MapPin, Clock, Heart, Syringe, Droplet, Activity, Search, Package } from 'lucide-react';

interface PushpaAgencyProps {
  onBack: () => void;
}

export function PushpaAgency({ onBack }: PushpaAgencyProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const pharmaceuticalProducts = [
    {
      category: 'Antibiotics',
      icon: Pill,
      products: [
        { name: 'Amoxicillin 500mg', brand: 'Various Brands', form: 'Capsules', price: '₹120/strip' },
        { name: 'Azithromycin 500mg', brand: 'Various Brands', form: 'Tablets', price: '₹85/strip' },
        { name: 'Ciprofloxacin 500mg', brand: 'Various Brands', form: 'Tablets', price: '₹95/strip' },
        { name: 'Cefixime 200mg', brand: 'Various Brands', form: 'Tablets', price: '₹180/strip' },
        { name: 'Metronidazole 400mg', brand: 'Various Brands', form: 'Tablets', price: '₹45/strip' }
      ]
    },
    {
      category: 'Pain Relief & Fever',
      icon: Heart,
      products: [
        { name: 'Paracetamol 650mg', brand: 'Crocin/Calpol', form: 'Tablets', price: '₹25/strip' },
        { name: 'Ibuprofen 400mg', brand: 'Brufen', form: 'Tablets', price: '₹35/strip' },
        { name: 'Diclofenac 50mg', brand: 'Voveran', form: 'Tablets', price: '₹40/strip' },
        { name: 'Aspirin 75mg', brand: 'Disprin', form: 'Tablets', price: '₹15/strip' },
        { name: 'Tramadol 50mg', brand: 'Various Brands', form: 'Capsules', price: '₹120/strip' }
      ]
    },
    {
      category: 'Cardiac & Blood Pressure',
      icon: Activity,
      products: [
        { name: 'Amlodipine 5mg', brand: 'Amlong', form: 'Tablets', price: '₹95/strip' },
        { name: 'Atenolol 50mg', brand: 'Aten', form: 'Tablets', price: '₹65/strip' },
        { name: 'Telmisartan 40mg', brand: 'Telma', form: 'Tablets', price: '₹110/strip' },
        { name: 'Atorvastatin 10mg', brand: 'Atorva', form: 'Tablets', price: '₹85/strip' },
        { name: 'Clopidogrel 75mg', brand: 'Clopivas', form: 'Tablets', price: '₹125/strip' }
      ]
    },
    {
      category: 'Diabetes',
      icon: Droplet,
      products: [
        { name: 'Metformin 500mg', brand: 'Glycomet', form: 'Tablets', price: '₹45/strip' },
        { name: 'Glimepiride 2mg', brand: 'Amaryl', form: 'Tablets', price: '₹95/strip' },
        { name: 'Insulin Glargine', brand: 'Lantus', form: 'Injection', price: '₹1,250/vial' },
        { name: 'Sitagliptin 100mg', brand: 'Januvia', form: 'Tablets', price: '₹420/strip' },
        { name: 'Empagliflozin 10mg', brand: 'Jardiance', form: 'Tablets', price: '₹380/strip' }
      ]
    },
    {
      category: 'Respiratory',
      icon: Activity,
      products: [
        { name: 'Salbutamol Inhaler', brand: 'Asthalin', form: 'Inhaler', price: '₹185/unit' },
        { name: 'Montelukast 10mg', brand: 'Montair', form: 'Tablets', price: '₹75/strip' },
        { name: 'Cetirizine 10mg', brand: 'Cetrizet', form: 'Tablets', price: '₹25/strip' },
        { name: 'Dextromethorphan Syrup', brand: 'Various Brands', form: 'Syrup', price: '₹95/bottle' },
        { name: 'Budesonide Inhaler', brand: 'Budecort', form: 'Inhaler', price: '₹295/unit' }
      ]
    },
    {
      category: 'Gastrointestinal',
      icon: Pill,
      products: [
        { name: 'Omeprazole 20mg', brand: 'Omez', form: 'Capsules', price: '₹55/strip' },
        { name: 'Pantoprazole 40mg', brand: 'Pan', form: 'Tablets', price: '₹65/strip' },
        { name: 'Ranitidine 150mg', brand: 'Aciloc', form: 'Tablets', price: '₹35/strip' },
        { name: 'Ondansetron 4mg', brand: 'Emeset', form: 'Tablets', price: '₹45/strip' },
        { name: 'Lactulose Solution', brand: 'Duphalac', form: 'Syrup', price: '₹185/bottle' }
      ]
    },
    {
      category: 'Vitamins & Supplements',
      icon: Heart,
      products: [
        { name: 'Vitamin D3 60000 IU', brand: 'Calcirol', form: 'Capsules', price: '₹45/sachet' },
        { name: 'Vitamin B-Complex', brand: 'Becosules', form: 'Capsules', price: '₹35/strip' },
        { name: 'Calcium + Vit D3', brand: 'Shelcal', form: 'Tablets', price: '₹125/strip' },
        { name: 'Multivitamin', brand: 'Revital', form: 'Capsules', price: '₹195/strip' },
        { name: 'Iron + Folic Acid', brand: 'Folvite', form: 'Tablets', price: '₹45/strip' }
      ]
    },
    {
      category: 'Dermatology',
      icon: Pill,
      products: [
        { name: 'Clotrimazole Cream', brand: 'Candid', form: 'Cream', price: '₹85/tube' },
        { name: 'Betamethasone Cream', brand: 'Betnovate', form: 'Cream', price: '₹95/tube' },
        { name: 'Adapalene Gel', brand: 'Deriva', form: 'Gel', price: '₹265/tube' },
        { name: 'Ketoconazole Shampoo', brand: 'Nizoral', form: 'Shampoo', price: '₹285/bottle' },
        { name: 'Tretinoin Cream', brand: 'Retino-A', form: 'Cream', price: '₹185/tube' }
      ]
    }
  ];

  const medicalEquipment = [
    {
      category: 'Diagnostic Equipment',
      items: [
        { name: 'Digital Blood Pressure Monitor', price: '₹1,500 - ₹5,000', brands: 'Omron, Dr. Trust' },
        { name: 'Glucometer with Strips', price: '₹800 - ₹2,500', brands: 'Accu-Chek, OneTouch' },
        { name: 'Pulse Oximeter', price: '₹800 - ₹3,000', brands: 'BPL, Dr. Morepen' },
        { name: 'Digital Thermometer', price: '₹150 - ₹800', brands: 'Dr. Trust, Omron' },
        { name: 'Stethoscope', price: '₹500 - ₹5,000', brands: 'Littmann, MDF' },
        { name: 'ECG Machine', price: '₹25,000 - ₹2,00,000', brands: 'BPL, Schiller' }
      ]
    },
    {
      category: 'Patient Care',
      items: [
        { name: 'Hospital Bed (Manual)', price: '₹12,000 - ₹30,000', brands: 'Various' },
        { name: 'Wheelchair', price: '₹3,500 - ₹25,000', brands: 'Karma, Vissco' },
        { name: 'Walking Stick/Crutches', price: '₹250 - ₹1,500', brands: 'Dr. Trust, Vissco' },
        { name: 'Oxygen Concentrator', price: '₹35,000 - ₹65,000', brands: 'Philips, BPL' },
        { name: 'Nebulizer', price: '₹1,200 - ₹4,500', brands: 'Omron, Dr. Trust' },
        { name: 'Air/Water Mattress', price: '₹3,500 - ₹15,000', brands: 'Various' }
      ]
    },
    {
      category: 'Surgical Instruments',
      items: [
        { name: 'Surgical Scissors', price: '₹300 - ₹2,000', brands: 'Romsons, Hindustan' },
        { name: 'Forceps Set', price: '₹500 - ₹3,000', brands: 'Various' },
        { name: 'Scalpel Blades', price: '₹50 - ₹200/pack', brands: 'Swann Morton' },
        { name: 'Surgical Gloves', price: '₹350 - ₹800/box', brands: 'Kimberly-Clark, Ansell' },
        { name: 'Suture Kit', price: '₹1,000 - ₹5,000', brands: 'Ethicon, Vicryl' },
        { name: 'Sterile Gauze', price: '₹150 - ₹500/pack', brands: 'Johnson & Johnson' }
      ]
    },
    {
      category: 'Laboratory Equipment',
      items: [
        { name: 'Microscope', price: '₹5,000 - ₹50,000', brands: 'Olympus, Labomed' },
        { name: 'Centrifuge Machine', price: '₹15,000 - ₹80,000', brands: 'Remi, Eltek' },
        { name: 'Autoclave', price: '₹20,000 - ₹1,50,000', brands: 'Tuttnauer, Equitron' },
        { name: 'Lab Test Tubes', price: '₹200 - ₹800/pack', brands: 'Borosil, Tarson' },
        { name: 'Pipettes', price: '₹500 - ₹5,000', brands: 'Eppendorf, Thermo' },
        { name: 'Petri Dishes', price: '₹300 - ₹1,000/pack', brands: 'HiMedia, Tarson' }
      ]
    }
  ];

  const consumables = [
    { name: 'Disposable Syringes (5ml)', pack: '100 pcs', price: '₹350' },
    { name: 'Disposable Syringes (10ml)', pack: '100 pcs', price: '₹450' },
    { name: 'IV Cannula Set', pack: '50 pcs', price: '₹850' },
    { name: 'IV Fluids (Normal Saline)', pack: '1 bottle', price: '₹45' },
    { name: 'Surgical Mask (3-ply)', pack: '50 pcs', price: '₹250' },
    { name: 'N95 Masks', pack: '10 pcs', price: '₹450' },
    { name: 'Surgical Gloves', pack: '100 pcs', price: '₹600' },
    { name: 'Cotton Roll', pack: '500g', price: '₹280' },
    { name: 'Bandages (Cotton)', pack: '12 rolls', price: '₹350' },
    { name: 'Adhesive Tape', pack: '12 rolls', price: '₹280' },
    { name: 'Alcohol Swabs', pack: '100 pcs', price: '₹120' },
    { name: 'Catheter (Foley)', pack: '10 pcs', price: '₹850' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-8">
        <Button onClick={onBack} variant="ghost" className="mb-6 text-white hover:bg-gray-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <BusinessLogo name="" type="medical" size="lg" />
          </div>
          <h1 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">PUSHPA AGENCY</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your reliable medical and pharmaceutical partner. We supply quality medicines, medical equipment, and healthcare products to hospitals, clinics, and pharmacies nationwide.
          </p>
        </motion.div>

        <div className="mb-12">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758573467057-955f803660a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcGhhcm1hY3l8ZW58MXx8fHwxNzYxNDEyODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Medical Services"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg shadow-pink-500/20"
          />
        </div>

        {/* Featured Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-white mb-4">Pushpa Agency Product Showcase</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Premium quality pharmaceutical products, medical equipment, and healthcare supplies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-800/50 border-pink-500/30 hover:border-pink-500 transition-all overflow-hidden shadow-xl hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1698365140635-42894e5e63b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMGJvdHRsZXMlMjBwaGFybWFjeXxlbnwxfHx8fDE3NjI2OTUxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Medicine Bottles"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">Pharmaceutical Medicines</CardTitle>
                  <CardDescription className="text-gray-400">
                    Wide range of tablets, capsules, syrups and injections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-3">
                    Premium quality medicines from trusted brands. Available for all types of ailments.
                  </p>
                  <Badge className="bg-pink-600 text-white">100+ Products</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-800/50 border-pink-500/30 hover:border-pink-500 transition-all overflow-hidden shadow-xl hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1729544015876-ea9b1cf1f1a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3lyaW5nZXMlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc2MjY5NTE1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Medical Syringes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">Medical Consumables</CardTitle>
                  <CardDescription className="text-gray-400">
                    Syringes, gloves, masks and surgical supplies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-3">
                    Sterile and certified consumables for safe medical procedures.
                  </p>
                  <Badge className="bg-pink-600 text-white">50+ Items</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-800/50 border-pink-500/30 hover:border-pink-500 transition-all overflow-hidden shadow-xl hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1630531207753-f7a2f475f809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwaG9zcGl0YWx8ZW58MXx8fHwxNzYyNjE1MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Medical Equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">Medical Equipment</CardTitle>
                  <CardDescription className="text-gray-400">
                    Diagnostic and surgical equipment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-3">
                    Advanced medical equipment for hospitals and clinics worldwide.
                  </p>
                  <Badge className="bg-pink-600 text-white">25+ Devices</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-800/50 border-pink-500/30 hover:border-pink-500 transition-all overflow-hidden shadow-xl hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1668453569370-789848f41ebe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxscyUyMHRhYmxldHMlMjBtZWRpY2F0aW9ufGVufDF8fHx8MTc2MjY5NTE1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pills and Tablets"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">Specialized Medicines</CardTitle>
                  <CardDescription className="text-gray-400">
                    Cardiac, diabetic and other specialist drugs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-3">
                    Specialized medications for chronic and critical conditions.
                  </p>
                  <Badge className="bg-pink-600 text-white">75+ Medicines</Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for medicines, equipment, or supplies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
        </div>

        <Tabs defaultValue="medicines" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 mb-8">
            <TabsTrigger value="medicines" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-pink-600">Medicines</TabsTrigger>
            <TabsTrigger value="equipment" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600">Equipment</TabsTrigger>
            <TabsTrigger value="consumables" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-600 data-[state=active]:to-red-600">Consumables</TabsTrigger>
          </TabsList>

          <TabsContent value="medicines">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-white mb-6 text-center">Pharmaceutical Products Catalog</h2>
              <div className="space-y-8">
                {pharmaceuticalProducts.map((category, catIndex) => (
                  <div key={catIndex}>
                    <div className="flex items-center gap-3 mb-4">
                      <category.icon className="h-6 w-6 text-pink-400" />
                      <h3 className="text-white">{category.category}</h3>
                      <Badge className="bg-pink-600">{category.products.length} Products</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.products.map((product, prodIndex) => (
                        <motion.div
                          key={prodIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: prodIndex * 0.05 }}
                        >
                          <Card className="bg-gray-800/50 border-gray-700 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <CardTitle className="text-white text-sm mb-1">{product.name}</CardTitle>
                                  <CardDescription className="text-xs text-gray-400">{product.brand}</CardDescription>
                                </div>
                                <Badge variant="outline" className="border-green-500 text-green-400 text-xs">In Stock</Badge>
                              </div>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-gray-400">Form:</span>
                                <span className="text-gray-300">{product.form}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-pink-400">{product.price}</span>
                                <Button size="sm" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700">
                                  Order
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="equipment">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-white mb-6 text-center">Medical Equipment & Devices</h2>
              <div className="space-y-8">
                {medicalEquipment.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h3 className="text-white mb-4 flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-purple-400" />
                      {category.category}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: itemIndex * 0.05 }}
                        >
                          <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all">
                            <CardHeader>
                              <CardTitle className="text-white text-sm">{item.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                              <div className="text-xs">
                                <p className="text-gray-400">Price Range:</p>
                                <p className="text-purple-400">{item.price}</p>
                              </div>
                              <div className="text-xs">
                                <p className="text-gray-400">Brands:</p>
                                <p className="text-gray-300">{item.brands}</p>
                              </div>
                              <Button size="sm" className="w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                                Get Quote
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="consumables">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-white mb-6 text-center">Medical Consumables & Supplies</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {consumables.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:border-pink-500/50 transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3 mb-3">
                          <Package className="h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-white text-sm mb-1">{item.name}</p>
                            <p className="text-gray-400 text-xs">{item.pack}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-pink-400">{item.price}</span>
                          <Button size="sm" variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <Card className="bg-gradient-to-r from-red-900/50 to-pink-900/50 border-red-500/30 text-white">
          <CardHeader>
            <CardTitle className="text-white">Contact Us for Bulk Orders & Partnerships</CardTitle>
            <CardContent className="p-0 pt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-400" />
                  <div>
                    <p className="text-sm text-gray-400">24/7 Hotline</p>
                    <p>+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-pink-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-sm">contact@pushpaagency.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-sm">456 Medical Plaza, Healthcare District</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Working Hours</p>
                    <p className="text-sm">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
