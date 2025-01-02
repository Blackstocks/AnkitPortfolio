export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Empowering Client Partnerships with Clear Communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Mastering Global Collaboration Across Time Zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driving Innovation with Development Passion",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Revolutionizing Animation with JavaScript",
    description: "Behind the Scenes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Create a Game-Changing Project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Advanced E-Commerce Website",
    des: "A comprehensive platform featuring admin, consumer, rider, and seller panels for a seamless e-commerce experience.",
    img: "/chiltel.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/mongo.svg", "/stripe.png"],
    link: "https://www.chiltel.com/",
  },
  {
    id: 2,
    title: "Yorigin - Open Source Platform for Programmers",
    des: "An open-source, free site to help programmers, showcasing the incredible work of our development team.",
    img: "/Yorigin.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/node.png", "/mongo.svg"],
    link: "http://www.yorigin.in/",
  },
  {
    id: 3,
    title: "XelleratesAI",
    des: "An MVP for a venture solution firm that connects startups and investors with innovative features.",
    img: "/xellerates.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/node.png", "/mongo.svg"],
    link: "https://xellerates-ai.vercel.app/",
  },
  {
    id: 4,
    title: "DevBlog - AI-Powered Blog Generator",
    des: "An innovative website that generates high-quality blogs using advanced AI capabilities.",
    img: "/Devblog.png",
    iconLists: ["/next.svg", "/tail.svg", "/openai.svg", "/ts.svg", "/gsap.svg"],
    link: "https://ai-blog-nu.vercel.app/",
  },
  {
    id: 5,
    title: "AI SEO Enhancer",
    des: "An AI-powered tool designed to optimize website SEO and boost organic traffic.",
    img: "/seo.png",
    iconLists: ["/next.svg", "/tail.svg", "/openai.svg", "/gsap.svg", "/ts.svg"],
    link: "https://seo-tool-rosy.vercel.app/",
  },
  
  // {
  //   id: 6,
  //   title: "AI Sales Tracking Chatbot",
  //   des: "A smart AI chatbot that tracks sales and generates responses based on user queries.",
  //   img: "/p6.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/openai.svg", "/node.svg", "/mongo.svg"],
  //   link: "/ui.saleschatbot.com",
  // },
];


export const testimonials = [
  {
    quote: "Working with Ankit on our financial platform was exceptional. His product management skills shine through in how he balanced technical requirements with user needs. The React-based dashboard he developed handles millions of transactions daily with 99.9% uptime.",
    name: "Sudarshan Raut",
    title: "Founder at Chiltel India Private Limited",
    image: "#",
  },
  {
    quote: "Ankit's expertise in Kubernetes and Docker transformed our deployment pipeline. He implemented a microservices architecture that reduced our deployment time by 70% and significantly improved our system's scalability. His ability to handle complex technical challenges is remarkable.",
    name: "Kaushik Neogi",
    title: "CEO at KNEOGIN IGMISARCH PRIVATE LIMITED",
    image: "/kaushik.png",
  },
  {
    quote: "Ankit's full-stack development skills combined with product management expertise helped us launch our MVP in record time. The scalable architecture he designed using Next.js and containerized microservices has supported our growth phenomenally.",
    name: "Akshat Srivastava",
    title: "Startup Founder & CTO of DEVLAUNCH",
    image: "/akshat.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  // {
  //   id: 6,
  //   name: "AuthO",
  //   img: "/autho.png",
  //   nameImg: "/authO.png",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "KNEOGIN IGMISARCH",
    duration: "2022 - Present",
    desc: "Leading development of enterprise-scale applications with microservices architecture. Implemented CI/CD pipelines using Docker & Kubernetes, reducing deployment time by 40%. Architected solutions handling 10K+ daily users.",
    technologies: ["Next.js", "TypeScript", "Docker", "Kubernetes", "AWS"],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Chiltel India",
    duration: "2021 - 2022",
    desc: "Developed and shipped a comprehensive e-commerce platform with admin, consumer, and seller panels. Implemented real-time analytics dashboard processing 1K+ daily transactions. Reduced server costs by 30% through optimized architecture.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Technical Product Manager",
    company: "DEVLAUNCH",
    duration: "2020 - 2021",
    desc: "Led cross-functional teams in developing and launching MVPs for startups. Architected scalable solutions using microservices and containerization. Successfully delivered 5 major products with 98% client satisfaction rate.",
    technologies: ["Next.js", "Docker", "Kubernetes", "PostgreSQL", "Azure"],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Development Team Lead",
    company: "Freelance Consultant",
    duration: "2019 - 2020",
    desc: "Provided technical leadership for complex projects across multiple industries. Implemented cloud-native solutions and DevOps practices. Mentored junior developers and established development best practices.",
    technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
