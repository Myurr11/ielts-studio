import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Award, BookOpen, TrendingUp, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: 15000,
      suffix: '+',
      label: 'Students Trained',
      color: 'text-primary',
    },
    {
      icon: TrendingUp,
      value: 94,
      suffix: '%',
      label: 'Success Rate',
      color: 'text-success',
    },
    {
      icon: Award,
      value: 8.5,
      suffix: '',
      label: 'Average Band Score',
      decimals: 1,
      color: 'text-accent',
    },
    {
      icon: BookOpen,
      value: 500,
      suffix: '+',
      label: 'Mock Tests Available',
      color: 'text-secondary',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence in IELTS preparation since 2015
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:shadow-glow transition-all duration-base">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  decimals={stat.decimals || 0}
                  enableScrollSpy
                  scrollSpyOnce
                />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 relative"
        >
          <div className="glass rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Global Reach</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['🇬🇧 UK', '🇨🇦 Canada', '🇦🇺 Australia', '🇳🇿 New Zealand', '🇺🇸 USA', '🇩🇪 Germany', '🇸🇬 Singapore', '🇦🇪 UAE'].map((country, index) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="text-center p-2"
                >
                  <span className="text-2xl mb-1 block">{country.split(' ')[0]}</span>
                  <span className="text-sm text-muted-foreground">{country.split(' ')[1]}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-muted-foreground mt-4">
              Students from <span className="font-bold text-primary">40+ countries</span> trust us for their IELTS preparation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;