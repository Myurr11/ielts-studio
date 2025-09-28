import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star, ArrowRight, Quote } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: 'Mayur Joshi',
      country: 'India',
      image: testimonial1,
      beforeScore: 6.0,
      afterScore: 8.5,
      text: 'The AI-powered feedback system helped me identify my weaknesses instantly. Within 4 weeks, I improved from 6.0 to 8.5!',
      university: 'BITS Pilani',
    },
    {
      name: 'Michael Chen',
      country: 'Canada',
      image: testimonial2,
      beforeScore: 5.5,
      afterScore: 8.0,
      text: 'The personalized study plan was a game-changer. The instructors are incredibly supportive and the mock tests are spot-on.',
      university: 'University of Toronto',
    },
    {
      name: 'Fatima Al-Rashid',
      country: 'United Arab Emirates',
      image: testimonial3,
      beforeScore: 6.5,
      afterScore: 9.0,
      text: 'I achieved a perfect score in Reading! The techniques taught here are revolutionary. Highly recommend to everyone.',
      university: 'Cambridge University',
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Real students. Real results. Join thousands who achieved their dream scores.
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-muted-foreground">Average improvement: <strong className="text-foreground">1.5 bands</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">Time to improve: <strong className="text-foreground">4 weeks</strong></span>
            </div>
          </div>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="glass rounded-xl p-6 h-full hover:shadow-xl transition-all duration-base relative overflow-hidden">
                  {/* Quote Icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                  
                  {/* Profile Section */}
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                      <p className="text-xs text-primary font-semibold">{testimonial.university}</p>
                    </div>
                  </div>

                  {/* Score Improvement */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Before</p>
                      <p className="text-xl font-bold text-foreground">Band {testimonial.beforeScore}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">After</p>
                      <p className="text-xl font-bold text-success">Band {testimonial.afterScore}</p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;