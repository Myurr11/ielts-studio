import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Mic, Timer, TrendingUp } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Band Prediction',
      description: 'Get instant feedback and accurate band predictions using advanced AI technology',
      gradient: 'from-primary to-primary-light',
      delay: 0
    },
    {
      icon: Mic,
      title: 'Live Speaking Sessions',
      description: 'Practice with certified instructors in real-time interactive sessions',
      gradient: 'from-secondary to-secondary-light',
      delay: 0.1
    },
    {
      icon: Timer,
      title: 'Unlimited Mock Tests',
      description: 'Access hundreds of practice tests with detailed performance analytics',
      gradient: 'from-accent to-accent-light',
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: 'Personal Study Plans',
      description: 'Customized learning paths based on your strengths and target score',
      gradient: 'from-info to-primary',
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">Excellence Academy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of IELTS preparation with our cutting-edge features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl glass p-6 h-full border-2 border-primary/30 hover:border-primary transition-all duration-base shadow-lg hover:shadow-xl">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-base`}></div>
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 mb-4 shadow-lg group-hover:shadow-glow transition-all duration-base`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-base">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;