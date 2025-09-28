import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Award,
  Shield,
  Star
} from 'lucide-react';

const Footer = () => {
  const courseCategories = [
    { title: 'Academic IELTS', items: ['Complete Course', 'Writing Workshop', 'Speaking Intensive', 'Reading Mastery'] },
    { title: 'General Training', items: ['Full Program', 'Letter Writing', 'Listening Skills', 'Vocabulary Builder'] },
    { title: 'Resources', items: ['Practice Tests', 'Study Materials', 'Blog', 'IELTS Tips'] },
    { title: 'Support', items: ['FAQ', 'Contact Us', 'Terms & Conditions', 'Privacy Policy'] },
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/20 to-background pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl p-8 mb-12 text-center"
        >
          <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
            Get Free IELTS Tips & Updates
          </h3>
          <p className="text-muted-foreground mb-6">
            Join 5,000+ subscribers receiving weekly tips to boost their IELTS scores
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-4">
              <h4 className="text-xl font-heading font-bold text-foreground mb-2">
                IELTS Excellence Academy
              </h4>
              <p className="text-muted-foreground text-sm">
                Your trusted partner in achieving IELTS success since 2015.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">Official IELTS Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground">British Council Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-warning" />
                <span className="text-xs text-muted-foreground">4.9/5 Google Reviews</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-base">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-base">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-base">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-base">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Course Categories */}
          {courseCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h5 className="font-semibold text-foreground mb-4">{category.title}</h5>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-base text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-border pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">
                123 Education Street, London, UK EC1A 1BB
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">
                +44 20 1234 5678
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">
                info@ieltsexcellence.com
              </span>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 IELTS Excellence Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;