import { motion } from "framer-motion";
import { Link } from "wouter";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
    { icon: <Facebook size={20} />, url: "#", label: "Facebook" },
    { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "#", label: "Twitter" },
  ];

  return (
    <motion.footer 
      className="bg-[#f5f5ff] pt-16 pb-8 px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <motion.div 
          className="flex justify-center gap-6 mb-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
              aria-label={social.label}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>Cristian Muffat Portfolio Company © @cristianmuffat • {new Date().getFullYear()}</p>
        </motion.div>
        
        <div className="absolute right-4 bottom-4 dot-pattern w-20 h-20 opacity-30"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;
