import React from 'react';
import { BusinessLogo } from './BusinessLogo';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BusinessCardProps {
  name: string;
  tagline: string;
  description: string;
  type: 'finance' | 'medical' | 'vehicles';
  imageUrl: string;
  onExplore: () => void;
}

export function BusinessCard({ name, tagline, description, type, imageUrl, onExplore }: BusinessCardProps) {
  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl group">
      <ImageWithFallback 
        src={imageUrl} 
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-purple-900/50 to-transparent" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Sparkle effect */}
      <motion.div
        className="absolute top-10 right-10 text-yellow-400"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="h-8 w-8" />
      </motion.div>
      
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <BusinessLogo name="" type={type} size="lg" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white"
        >
          {name}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-4"
        >
          {tagline}
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-200 mb-6 max-w-2xl"
        >
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            onClick={onExplore}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg shadow-purple-500/50 group/btn"
          >
            Explore Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
