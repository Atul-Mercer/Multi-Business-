import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutSection() {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '10,000+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: TrendingUp, label: 'Years Experience', value: '15+' },
    { icon: Target, label: 'Projects Completed', value: '5,000+' }
  ];

  const values = [
    {
      title: 'Our Mission',
      description: 'To provide exceptional services across diverse industries while maintaining the highest standards of quality and customer satisfaction.'
    },
    {
      title: 'Our Vision',
      description: 'To be the most trusted and innovative business group, setting benchmarks in finance, healthcare, and automotive sectors.'
    },
    {
      title: 'Our Values',
      description: 'Integrity, excellence, innovation, and customer-centricity are the pillars that guide every decision we make.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-black mb-4">
            About Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A diversified business group committed to excellence across multiple sectors. 
            We bring together expertise in finance, healthcare, automotive, and technology industries to serve our communities better.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-500 transition-all">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <h3 className="text-black mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 border-gray-200 hover:border-blue-500 transition-all h-full bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-black">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4"
        >
          <div className="md:col-span-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjEzMDQxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our Office"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="flex flex-col gap-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1626244105791-562784044969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzYyNDk1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Finance"
              className="w-full h-[192px] object-cover rounded-lg shadow-xl"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758573467057-955f803660a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcGhhcm1hY3klMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyNDk1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Medical"
              className="w-full h-[192px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
