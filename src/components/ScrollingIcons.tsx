import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, Pill, Car, Code, Bike, Shield, Briefcase, Heart, Stethoscope, Home, Gem, TrendingUp } from 'lucide-react';

export function ScrollingIcons() {
  const businesses = [
    {
      name: 'PUSHPA AGENCY',
      icons: [
        { Icon: Pill, label: 'Medicines' },
        { Icon: Stethoscope, label: 'Equipment' },
        { Icon: Heart, label: 'Healthcare' }
      ]
    },
    {
      name: 'PUSHPA FINANCE',
      icons: [
        { Icon: DollarSign, label: 'Loans' },
        { Icon: Shield, label: 'Insurance' },
        { Icon: Briefcase, label: 'Investment' }
      ]
    },
    {
      name: 'SILVER DRIVE',
      icons: [
        { Icon: Car, label: 'Cars' },
        { Icon: Bike, label: 'Bikes' },
        { Icon: TrendingUp, label: 'Commercial Vehicle' }
      ]
    },
    {
      name: 'TECHNOLOGY',
      icons: [
        { Icon: Code, label: 'Development' },
        { Icon: TrendingUp, label: 'Marketing' },
        { Icon: Briefcase, label: 'Training' }
      ]
    },
    {
      name: 'SILVER DRIVE PROPERTIES',
      icons: [
        { Icon: Home, label: 'Properties' },
        { Icon: Briefcase, label: 'Buy/Sell' },
        { Icon: TrendingUp, label: 'Investment' }
      ]
    },
    {
      name: 'PUSHPA JEWELS',
      icons: [
        { Icon: Gem, label: 'Gold' },
        { Icon: Gem, label: 'Lab Grown Diamond' },
        { Icon: Gem, label: 'Jewelry' }
      ]
    }
  ];

  // Create a flat array with business names and their icons
  const scrollItems: Array<{ type: 'name' | 'icon'; content: any }> = [];
  businesses.forEach(business => {
    scrollItems.push({ type: 'name', content: business.name });
    business.icons.forEach(icon => {
      scrollItems.push({ type: 'icon', content: icon });
    });
  });

  // Duplicate for seamless loop
  const duplicatedItems = [...scrollItems, ...scrollItems];

  return (
    <div className="w-full bg-black py-12 overflow-hidden border-y border-blue-500/20">
      <div className="relative">
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: [0, -2400]
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              {item.type === 'name' ? (
                <div className="min-w-[280px] px-6">
                  <h3 className="text-white text-center bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-6 rounded-lg shadow-lg">
                    {item.content}
                  </h3>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center min-w-[120px] gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <item.content.Icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-gray-300 text-xs">{item.content.label}</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
