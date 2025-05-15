import { motion } from "framer-motion";

const DashboardsIllustration = () => {
  return (
    <>
      <motion.div 
        className="bg-white p-3 rounded-xl shadow-xl transform rotate-2 mb-4"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-4 h-48">
          <div className="flex justify-between mb-4">
            <div className="w-16 h-6 bg-primary/30 rounded-full"></div>
            <div className="w-8 h-8 bg-accent rounded-full"></div>
          </div>
          <div className="h-20 bg-white/30 rounded-lg mb-3"></div>
          <div className="flex gap-2">
            <div className="w-20 h-6 bg-primary/60 rounded-full"></div>
            <div className="w-24 h-6 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-white p-3 rounded-xl shadow-xl transform -rotate-3 mb-4 lg:absolute lg:-top-20 lg:-left-20"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="bg-gradient-to-r from-secondary/10 to-secondary/30 rounded-lg p-4 h-32">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent rounded-full"></div>
            <div>
              <div className="w-24 h-4 bg-white/40 rounded-full mb-1"></div>
              <div className="w-16 h-3 bg-white/20 rounded-full"></div>
            </div>
          </div>
          <div className="h-12 bg-white/20 rounded-lg"></div>
        </div>
      </motion.div>
    </>
  );
};

export default DashboardsIllustration;
