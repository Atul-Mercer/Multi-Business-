import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Gem, ShoppingCart, Phone } from 'lucide-react';

interface PushpaJewelsProps {
  onBack: () => void;
}

export function PushpaJewels({ onBack }: PushpaJewelsProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Diamond Necklace',
      category: 'necklaces',
      price: '₹2,50,000',
      weight: '15g',
      purity: '18K Gold',
      image: 'https://images.unsplash.com/photo-1624929090883-3d2f7874a019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwbmVja2xhY2UlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MjU5OTYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      name: 'Gold Ring Set',
      category: 'rings',
      price: '₹45,000',
      weight: '8g',
      purity: '22K Gold',
      image: 'https://images.unsplash.com/photo-1654521883301-070279dd0ae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcmluZ3MlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MjUzMDI2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      name: 'Traditional Bangles',
      category: 'bangles',
      price: '₹85,000',
      weight: '25g',
      purity: '22K Gold',
      image: 'https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZHxlbnwxfHx8fDE3NjI1NDY4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      name: 'Pearl Earrings',
      category: 'earrings',
      price: '₹15,000',
      weight: '5g',
      purity: '18K Gold',
      image: 'https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZHxlbnwxfHx8fDE3NjI1NDY4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      name: 'Bridal Necklace Set',
      category: 'necklaces',
      price: '₹3,50,000',
      weight: '45g',
      purity: '22K Gold',
      image: 'https://images.unsplash.com/photo-1624929090883-3d2f7874a019?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwbmVja2xhY2UlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MjU5OTYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      name: 'Designer Rings',
      category: 'rings',
      price: '₹65,000',
      weight: '12g',
      purity: '18K Gold',
      image: 'https://images.unsplash.com/photo-1654521883301-070279dd0ae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcmluZ3MlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MjUzMDI2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 7,
      name: 'Gold Bangles Pair',
      category: 'bangles',
      price: '₹1,20,000',
      weight: '35g',
      purity: '22K Gold',
      image: 'https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZHxlbnwxfHx8fDE3NjI1NDY4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 8,
      name: 'Diamond Studs',
      category: 'earrings',
      price: '₹35,000',
      weight: '4g',
      purity: '18K Gold',
      image: 'https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZHxlbnwxfHx8fDE3NjI1NDY4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 9,
      name: 'Temple Jewelry Set',
      category: 'sets',
      price: '₹2,80,000',
      weight: '55g',
      purity: '22K Gold',
      image: 'https://images.unsplash.com/photo-1758995115475-7b7d6eb060ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZHxlbnwxfHx8fDE3NjI1NDY4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'rings', label: 'Rings' },
    { id: 'bangles', label: 'Bangles' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'sets', label: 'Jewelry Sets' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-700 to-yellow-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button
            onClick={onBack}
            variant="outline"
            className="mb-8 border-yellow-300 text-yellow-300 hover:bg-yellow-500/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mx-auto mb-6">
              <Gem className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-6 text-white">Pushpa Jewels</h1>
            <p className="text-xl text-yellow-100 mb-8">
              Exquisite Gold & Diamond Jewelry
            </p>
            <p className="text-yellow-200 max-w-2xl mx-auto">
              Discover our exclusive collection of handcrafted jewelry. From traditional designs to contemporary styles, 
              find the perfect piece for every occasion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                className={activeCategory === category.id 
                  ? 'bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900' 
                  : ''}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Card className="border-2 border-gray-200 hover:border-yellow-500 transition-all overflow-hidden shadow-lg hover:shadow-2xl">
                  <div className="relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-3 py-1 rounded-full text-sm">
                      {product.purity}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-black mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-yellow-700">{product.price}</p>
                      <p className="text-gray-600 text-sm">Weight: {product.weight}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Buy Now
                      </Button>
                      <Button variant="outline" className="border-yellow-600 text-yellow-700 hover:bg-yellow-50">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'BIS Hallmarked', desc: 'Certified Pure Gold' },
              { title: 'Lifetime Exchange', desc: 'Easy Exchange Policy' },
              { title: 'Custom Design', desc: 'Personalized Jewelry' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 border-yellow-200 p-6 text-center shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center mx-auto mb-4">
                    <Gem className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-black mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
