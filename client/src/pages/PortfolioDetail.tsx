import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Github, ExternalLink } from "lucide-react";
import { portfolioItems } from "@/lib/data";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  detailImages?: string[];
}

const PortfolioDetail = () => {
  const [, params] = useRoute("/portfolio/:id");
  const [project, setProject] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (params && params.id) {
      const foundProject = portfolioItems.find(item => item.id === params.id);
      setProject(foundProject || null);
    }
  }, [params]);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link href="/#portfolio">
          <a className="text-primary hover:underline">Back to portfolio</a>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="pt-28 pb-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto">
        <Link 
          href="/#portfolio" 
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Portfolio
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-6 md:p-8">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gray-900">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>{project.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink size={18} />
                  View Demo
                </a>
              )}
              
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg transition-colors"
                >
                  <Github size={18} />
                  GitHub Repo
                </a>
              )}
              
              {project.websiteUrl && (
                <a 
                  href={project.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-lg transition-colors"
                >
                  <Globe size={18} />
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
        
        {project.detailImages && project.detailImages.length > 0 && (
          <div className="mb-10">
            <h2 className="font-heading font-semibold text-2xl mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.detailImages.map((img, index) => (
                <motion.div 
                  key={index}
                  className="rounded-xl overflow-hidden shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} detail ${index + 1}`} 
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioDetail;
