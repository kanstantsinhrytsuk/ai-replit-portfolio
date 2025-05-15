import { motion } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      className="py-16 px-4 bg-dark text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="dot-pattern absolute inset-0 opacity-10"></div>
      
      <div className="container mx-auto relative">
        <motion.h2 
          className="font-heading font-bold text-3xl md:text-4xl mb-16 text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.div 
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center transition-all hover:bg-white/15 w-full md:w-auto"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-purple-700/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-1">100%</h3>
            <p className="text-center text-white/80">Responsibility</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-b from-primary to-purple-600 p-6 rounded-2xl flex flex-col items-center transition-all hover:shadow-lg hover:shadow-primary/20 w-full md:w-auto"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-24 h-24 mb-4 relative">
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="h-1/2 bg-yellow-400"></div>
                <div className="h-1/4 bg-blue-600"></div>
                <div className="h-1/4 bg-red-600"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-1">100%</h3>
            <p className="text-center text-white/90">Colombian</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center transition-all hover:bg-white/15 w-full md:w-auto"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-purple-700/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-1">100%</h3>
            <p className="text-center text-white/80">Punctuality</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute top-10 right-10 hidden md:block"
          variants={itemVariants}
        >
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-white/10">
            <path d="M10,10 Q90,10 90,90" stroke="currentColor" strokeWidth="4" fill="none"></path>
            <path d="M10,90 Q10,10 90,10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5"></path>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-10 hidden md:block"
          variants={itemVariants}
        >
          <div className="dot-pattern w-16 h-16 opacity-20"></div>
        </motion.div>
      </div>
      
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
    </motion.section>
  );
};

export default AboutSection;
