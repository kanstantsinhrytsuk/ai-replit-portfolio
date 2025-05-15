import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSkillCircle from "./AnimatedSkillCircle";

interface Skill {
  id: number;
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { id: 1, name: "Figma / Adobe XD", percentage: 90 },
  { id: 2, name: "UI Design", percentage: 80 },
  { id: 3, name: "Information Architecture", percentage: 80 },
  { id: 4, name: "UX Design", percentage: 70 },
  { id: 5, name: "Prototyping", percentage: 70 },
  { id: 6, name: "Box Model", percentage: 70 },
  { id: 7, name: "Business Model Canvas", percentage: 70 },
  { id: 8, name: "Design Systems", percentage: 70 },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section 
      id="skills" 
      className="py-16 px-4" 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <motion.div 
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Skills</h2>
          <div className="w-8 h-8">
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary/30">
              <path d="M10,50 Q30,10 50,50 Q70,90 90,50" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"></path>
              <circle cx="85" cy="50" r="5" fill="currentColor"></circle>
            </svg>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.id} 
              className="skill-item flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedSkillCircle 
                percentage={skill.percentage} 
                isInView={isInView} 
                delay={index * 0.2} 
              />
              <h3 className="font-medium text-center">
                {skill.name.includes(" / ") ? (
                  <>
                    {skill.name.split(" / ")[0]} / <br/>
                    {skill.name.split(" / ")[1]}
                  </>
                ) : skill.name.includes(" ") ? (
                  <>
                    {skill.name.split(" ")[0]} <br/>
                    {skill.name.split(" ").slice(1).join(" ")}
                  </>
                ) : (
                  skill.name
                )}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
