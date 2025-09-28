import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Target, Users } from 'lucide-react';
import heroImage from '@/assets/hero-students.jpg';

const HeroSection = () => {
  const [currentScore, setCurrentScore] = useState('Band 6.5');
  const scores = ['Band 6.5', 'Band 7.0', 'Band 7.5', 'Band 8.0', 'Band 8.5'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScore(prev => {
        const currentIndex = scores.indexOf(prev);
        return scores[(currentIndex + 1) % scores.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const flags = [
    { country: 'UK', emoji: '🇬🇧', x: 10, y: 20 },
    { country: 'Canada', emoji: '🇨🇦', x: 80, y: 15 },
    { country: 'Australia', emoji: '🇦🇺', x: 90, y: 70 },
    { country: 'New Zealand', emoji: '🇳🇿', x: 12, y: 75 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/80 backdrop-blur-sm text-foreground font-semibold rounded-full text-sm mb-6 shadow-lg">
              Trusted by 10,000+ Students Worldwide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              Master IELTS.
              <br />
              <span className="text-gradient">Achieve Your Dreams.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-medium">
              Join 10,000+ students who achieved{' '}
              <motion.span
                key={currentScore}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block font-bold text-primary"
              >
                {currentScore}+
              </motion.span>{' '}
              with our proven methodology
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                View Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Target, label: 'Average Score', value: '8.5' },
                { icon: Users, label: 'Students', value: '15K+' },
                { icon: Globe, label: 'Countries', value: '40+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="bg-background/90 backdrop-blur-md rounded-lg p-3 border border-border shadow-sm"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image with Floating Flags */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Floating Flags around Image */}
            <div className="absolute inset-0 pointer-events-none">
              {flags.map((flag, index) => (
                <motion.div
                  key={flag.country}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="absolute text-3xl animate-float"
                  style={{ 
                    left: index === 0 ? '-10%' : index === 1 ? '90%' : index === 2 ? '95%' : '-9%',
                    top: index === 0 ? '10%' : index === 1 ? '5%' : index === 2 ? '75%' : '70%',
                    zIndex: index === 1 || index === 2 ? 30 : 10
                  }}
                >
                  <div className="bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-border">
                    <span>{flag.emoji}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative z-20"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-card">
                <img
                  src={heroImage}
                  alt="Students studying at IELTS Excellence Academy"
                  className="w-full h-[500px] object-cover"
                />
                {/* Image Overlay with Academy Info */}
                <div className="rounded-3xl absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 via-background/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-primary font-semibold mb-1">Live Classes Daily</p>
                      <p className="text-xs text-foreground/70">Join from anywhere in the world</p>
                    </div>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center">
                          <span className="text-xs text-primary-foreground font-bold">{i}K</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;