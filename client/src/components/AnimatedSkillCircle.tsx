import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedSkillCircleProps {
  percentage: number;
  isInView: boolean;
  delay?: number;
}

const AnimatedSkillCircle = ({ percentage, isInView, delay = 0 }: AnimatedSkillCircleProps) => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  // Circle props
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  useEffect(() => {
    if (isInView && !isAnimated) {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, isAnimated, delay]);
  
  return (
    <div className="skill-circle-container relative w-24 h-24 md:w-32 md:h-32 mb-3">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        <circle 
          cx="50" 
          cy="50" 
          r={radius} 
          fill="none" 
          stroke="#E0E0FB" 
          strokeWidth="10" 
        />
        <motion.circle 
          cx="50" 
          cy="50" 
          r={radius} 
          fill="none" 
          stroke="#7047EB" 
          strokeWidth="10" 
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isAnimated ? { strokeDashoffset } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: delay }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span 
          className="text-xl md:text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={isAnimated ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          {percentage}%
        </motion.span>
      </div>
    </div>
  );
};

export default AnimatedSkillCircle;
