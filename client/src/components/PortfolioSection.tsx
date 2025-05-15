import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import { portfolioItems } from "@/lib/data";

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
    <motion.section 
      id="portfolio" 
      className="py-16 px-4"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <motion.div 
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Portfolio</h2>
          <div className="w-8 h-8">
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary/30">
              <path d="M10,50 Q30,10 50,50 Q70,90 90,50" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"></path>
            </svg>
          </div>
        </motion.div>
        
        <motion.div 
          className="portfolio-slider relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-end mb-6 gap-3">
            <button 
              ref={prevRef}
              className="prev-slide w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              ref={nextRef}
              className="next-slide w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={slidesPerView}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              el: '.pagination-dots',
              bulletClass: 'inline-block w-3 h-3 rounded-full bg-gray-200 mx-1 cursor-pointer transition-colors',
              bulletActiveClass: '!bg-primary',
            }}
            className="pb-12"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div 
                  className="portfolio-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link 
                        href={`/portfolio/${item.id}`}
                        className="inline-block bg-accent text-gray-900 rounded-full py-2 px-5 text-sm font-medium hover:bg-accent/90 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="pagination-dots flex justify-center mt-4 gap-2"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
