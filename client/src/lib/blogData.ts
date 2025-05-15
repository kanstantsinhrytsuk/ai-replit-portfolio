export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author?: string;
  category: string;
  readTime?: string;
  imageUrl: string;
  excerpt: string;
  content: string[];
}

// Mock data for blog posts
export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    title: "The Evolution of UI Design Trends",
    date: "June 15, 2023",
    author: "Cristian Muffat",
    category: "Design",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    excerpt: "Exploring how UI design trends have evolved over the past decade and what's coming next.",
    content: [
      "The landscape of UI design has undergone dramatic transformations in the past decade. From the skeuomorphic designs of the early 2010s to the flat designs that followed, and now to the more nuanced neomorphism and glassmorphism, the journey has been both exciting and challenging for designers worldwide.",
      "When Apple released iOS 7 in 2013, it marked a significant shift from skeuomorphism to flat design. This transition wasn't just a stylistic choice but a response to the growing complexity of interfaces and the need for more streamlined, user-friendly experiences. Flat design, characterized by minimalism, clean spaces, and a lack of three-dimensional effects, quickly became the dominant trend.",
      "As we moved into the mid-2010s, Material Design, introduced by Google, added layers and subtle animations to flat design, creating a more dynamic and interactive user experience. This approach recognized the importance of providing users with visual cues about how elements on the screen would behave when interacted with.",
      "Today, we're seeing a blend of various styles. Neomorphism, which combines elements of skeuomorphism and flat design, creates subtle, soft UI elements that appear to extrude from the background. Glassmorphism, popularized by Apple's macOS Big Sur, introduces translucent, frosted-glass-like surfaces that create a sense of depth while maintaining the clarity of flat design.",
      "Looking ahead, we anticipate more personalized UI experiences, driven by AI, that adapt to individual user preferences and behaviors. The integration of 3D elements, especially in AR and VR environments, is likely to become more prevalent. And as concerns about digital well-being grow, we expect to see more designs that prioritize clarity, focus, and reduced cognitive load.",
      "For designers, staying updated with these trends is crucial. However, it's equally important to remember that trends come and go, but good design principles—centered around user needs and experiences—remain constant. As we continue to innovate and experiment with new design approaches, the ultimate goal should always be to create interfaces that are intuitive, accessible, and delightful for users."
    ]
  },
  {
    id: "2",
    title: "Creating Accessible Web Applications",
    date: "May 22, 2023",
    author: "Cristian Muffat",
    category: "Development",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=800&q=80",
    excerpt: "Best practices for building web applications that everyone can use, regardless of abilities.",
    content: [
      "Web accessibility is not just a nice-to-have feature but a fundamental aspect of modern web development. It ensures that websites and applications are usable by everyone, including those with disabilities. From a moral standpoint, it's about inclusivity; from a business perspective, it expands your audience; and from a legal standpoint, it helps avoid potential lawsuits.",
      "The Web Content Accessibility Guidelines (WCAG) provide a comprehensive set of recommendations for making web content more accessible. They revolve around four main principles: Perceivable, Operable, Understandable, and Robust (POUR).",
      "Perceivable means that users must be able to perceive the information being presented. This includes providing text alternatives for non-text content, offering captions for videos, and ensuring content can be presented in different ways without losing meaning.",
      "Operable refers to the interface components and navigation being operable. This means that users should be able to navigate the website using only a keyboard, have enough time to read and use content, and the content should not cause seizures or physical reactions.",
      "Understandable implies that the information and operation of the user interface must be understandable. This includes making text readable and predictable, and helping users avoid and correct mistakes.",
      "Robust means that the content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies. As technologies and browsers evolve, the content should remain accessible.",
      "To implement these principles, start by using semantic HTML. Elements like <header>, <nav>, <main>, and <footer> provide structural information to assistive technologies. Ensure forms have proper labels and error messages, images have descriptive alt text, and videos have captions.",
      "Testing is crucial in ensuring accessibility. Tools like the WAVE Web Accessibility Tool, Axe, and Lighthouse can help identify potential issues. But automated testing should be complemented with manual testing, including using a screen reader, navigating with a keyboard only, and adjusting browser settings to simulate different user experiences.",
      "Remember, accessibility is not a one-time effort but an ongoing commitment. As your web application evolves, consistently check and maintain its accessibility features. By doing so, you're not only complying with guidelines but also providing a better experience for all users."
    ]
  },
  {
    id: "3",
    title: "The Importance of User Testing",
    date: "April 10, 2023",
    author: "Cristian Muffat",
    category: "UX Research",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80",
    excerpt: "Why user testing should be an integral part of your design process and how to do it effectively.",
    content: [
      "User testing is the backbone of user-centered design. It provides insights into how real users interact with your product, revealing pain points, confusions, and opportunities for improvement that might not be evident to those closely involved in the design and development process.",
      "The significance of user testing can't be overstated. It can prevent costly redesigns by identifying issues early, validate design decisions, and ensure the product meets user needs. It can also reveal unexpected use cases or challenges that designers might not have considered.",
      "When it comes to methodology, user testing can be qualitative (focused on understanding user behaviors, needs, and motivations through direct observation) or quantitative (gathering data on user experiences through metrics and analytics). Both approaches have their strengths and can be complementary.",
      "Common user testing methods include usability testing, where participants are asked to complete specific tasks while thinking aloud; A/B testing, which compares two versions of a design to see which performs better; card sorting, which helps understand how users organize and categorize information; and surveys and interviews, which gather direct feedback from users.",
      "For effective user testing, it's crucial to define clear objectives, recruit participants who represent your target audience, create realistic scenarios and tasks, remain neutral during the testing to avoid biasing results, and have a consistent method for collecting and analyzing data.",
      "The timing of user testing is also important. While it's traditionally done near the end of the design process, there's immense value in conducting tests at various stages. Early-stage testing, using wireframes or prototypes, can validate concepts and catch fundamental issues before too much time and resources are invested.",
      "One challenge in user testing is interpreting and prioritizing the feedback received. Not all issues raised are equally important, and sometimes, what users say they want isn't necessarily what would best serve their needs. This is where expertise in UX and an understanding of the broader context come into play.",
      "User testing should not be a one-off event but a continuous process. As products evolve, new features are added, and user expectations change, ongoing testing ensures the product remains effective and user-friendly.",
      "In conclusion, user testing is an invaluable tool in the design toolkit. It bridges the gap between designer intentions and user experiences, leading to products that are not only functional but truly resonate with the target audience. By making it an integral part of the design process, designers can create products that stand out in a competitive market."
    ]
  }
];