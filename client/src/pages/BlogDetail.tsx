import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { blogPostsData, type BlogPost } from "@/lib/blogData";

const BlogDetail = () => {
  const [, params] = useRoute("/blog/:id");
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (params && params.id) {
      const foundPost = blogPostsData.find(item => item.id === params.id);
      setPost(foundPost || null);
    }
  }, [params]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link href="/blog" className="text-primary hover:underline">
          Back to blog
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
      <div className="container mx-auto max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to blog
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gray-900">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-8">
              {post.author && (
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  {post.author}
                </div>
              )}
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {post.date}
              </div>
              {post.readTime && (
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {post.readTime}
                </div>
              )}
            </div>
            
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-6">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-heading font-semibold text-2xl mb-6">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPostsData
              .filter(relatedPost => relatedPost.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <motion.article 
                  key={relatedPost.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative h-48">
                    <img 
                      src={relatedPost.imageUrl} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <span className="text-gray-500 text-sm">{relatedPost.date}</span>
                    <h3 className="font-heading font-semibold text-xl mt-2 mb-3">{relatedPost.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link 
                      href={`/blog/${relatedPost.id}`} 
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
      </div>
    </motion.div>
  );
};

export default BlogDetail;