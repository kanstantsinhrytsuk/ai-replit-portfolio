import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import DeveloperIllustration from "@/assets/illustrations/DeveloperIllustration";
import DashboardsIllustration from "@/assets/illustrations/DashboardsIllustration";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 px-4 bg-pattern relative">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="absolute -top-10 -left-10 md:-top-8 md:-left-8 w-16 h-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary/20">
              <path d="M10,50 Q30,10 50,50 Q70,90 90,50" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"></path>
              <circle cx="85" cy="50" r="5" fill="currentColor"></circle>
            </svg>
          </motion.div>
          
          <motion.h1 
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I am <br className="hidden sm:block" />
            <motion.span 
              className="text-primary relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Cristian
              <motion.span 
                className="inline-block ml-3 transform -translate-y-3"
                initial={{ rotate: -20, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <span className="inline-block w-8 h-8 bg-accent rounded-full"></span>
              </motion.span>
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 my-6 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Lorem ipsum designer. I help make interactive products that connect with users and deliver meaningful UX. I focus on building UI that's both beautiful and thoughtful.
          </motion.p>
          
          <motion.button 
            className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DOWNLOAD RESUME
            <ArrowDown size={16} />
          </motion.button>
          
          <motion.div 
            className="absolute bottom-0 right-0 md:bottom-10 md:right-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24 text-primary/20">
              <path d="M10,10 Q90,10 90,90" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="5,5"></path>
            </svg>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <DeveloperIllustration className="hidden lg:block w-full h-auto rounded-xl shadow-lg" />
          
          <div className="relative mx-auto w-full max-w-md lg:absolute lg:top-1/4 lg:right-0 lg:-mr-12">
            <DashboardsIllustration />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
