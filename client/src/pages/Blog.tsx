import { motion } from "framer-motion";

const Blog = () => {
  // In a real app, this would likely fetch blog posts from an API
  const blogPosts = [
    {
      id: "1",
      title: "The Evolution of UI Design Trends",
      excerpt: "Exploring how UI design trends have evolved over the past decade and what's coming next.",
      date: "June 15, 2023",
      imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
      category: "Design"
    },
    {
      id: "2",
      title: "Creating Accessible Web Applications",
      excerpt: "Best practices for building web applications that everyone can use, regardless of abilities.",
      date: "May 22, 2023",
      imageUrl: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=800&q=80",
      category: "Development"
    },
    {
      id: "3",
      title: "The Importance of User Testing",
      excerpt: "Why user testing should be an integral part of your design process and how to do it effectively.",
      date: "April 10, 2023",
      imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80",
      category: "UX Research"
    }
  ];

  return (
    <motion.div
      className="pt-28 pb-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Thoughts, learnings, and insights about UI/UX design, development, and creative process.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <h2 className="font-heading font-semibold text-xl mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`} 
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
