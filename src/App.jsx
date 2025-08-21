// src/App.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sun, Moon, Github, Twitter, Book, Home, FileText, Code, MessageCircle, GitPullRequest } from 'lucide-react';
import * as THREE from 'three';

// Import React Router components
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

// Import your new ContactPage
import ContactPage from './ContactPage'; // Adjust path if needed

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
   <BrowserRouter basename="/portfolio">
      <div className="relative min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 font-inter transition-colors duration-300 overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Content Overlay */}
        <div className="relative z-10">
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Routes> {/* Define your routes */}
            <Route path="/" element={ // Home page content
              <>
                <HeroSection />
                <ProjectsSection />
                <WhyWorkWithMeSection />
              </>
            } />
            <Route path="/contact" element={<ContactPage />} /> {/* New Contact Page Route */}
            {/* Add other routes for blog posts, individual projects, etc. later */}
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

// Animated Background Component (No changes needed)
const AnimatedBackground = () => {
  const mountRef = useRef(null);
  const animationFrameId = useRef(null);

  const initThree = useCallback(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Objects (Meteorites)
    const meteorites = [];
    const numMeteorites = 50;
    const geometry = new THREE.BoxGeometry(0.1, 1.5, 0.1);

    for (let i = 0; i < numMeteorites; i++) {
      const material = new THREE.MeshBasicMaterial({ color: 0x4a5568 });
      const meteorite = new THREE.Mesh(geometry, material);

      meteorite.position.x = (Math.random() - 0.5) * 20;
      meteorite.position.y = (Math.random() - 0.5) * 20;
      meteorite.position.z = Math.random() * -10;

      meteorite.rotation.x = Math.random() * Math.PI;
      meteorite.rotation.y = Math.random() * Math.PI;

      meteorite.userData.speed = 0.05 + Math.random() * 0.1;
      meteorite.userData.rotationSpeed = 0.005 + Math.random() * 0.01;

      scene.add(meteorite);
      meteorites.push(meteorite);
    }

    // Animation loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      meteorites.forEach(meteorite => {
        meteorite.position.y -= meteorite.userData.speed;
        meteorite.position.x += (Math.random() - 0.5) * 0.01;

        meteorite.rotation.x += meteorite.userData.rotationSpeed;
        meteorite.rotation.y += meteorite.userData.rotationSpeed;

        if (meteorite.position.y < -10) {
          meteorite.position.y = 10;
          meteorite.position.x = (Math.random() - 0.5) * 20;
          meteorite.position.z = Math.random() * -10;
        }
      });

      renderer.render(scene, camera);
    };

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', onWindowResize);

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationFrameId.current);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      meteorites.forEach(m => m.material.dispose());
    };
  }, []);

  useEffect(() => {
    initThree();
  }, [initThree]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full z-0 opacity-20 dark:opacity-10"
      style={{ background: 'linear-gradient(135deg, #1a202c, #2d3748)' }}
    ></div>
  );
};

// Header Component (Updated NavLink for Contact)
const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800 dark:text-gray-100"> {/* Use Link for home */}
          <img src="https://placehold.co/40x40/6366f1/ffffff?text=N" alt="Nagendra's Logo" className="rounded-full" />
          <span>Nagendra Thakur Sharma</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink icon={<Home size={18} />} text="Home" to="/" /> {/* Use 'to' for Link */}
          <NavLink icon={<Code size={18} />} text="Projects" to="/#projects" />
          <NavLink icon={<FileText size={18} />} text="Blog" to="/#blog" />
          <NavLink icon={<MessageCircle size={18} />} text="Contact" to="/contact" /> {/* Link to new page */}
        </nav>

        {/* Dark Mode Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// Navigation Link Component (Modified to use Link from react-router-dom)
const NavLink = ({ icon, text, to }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-medium"
  >
    {icon}
    <span>{text}</span>
  </Link>
);


// Hero Section Component (No changes needed)
const HeroSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 text-white rounded-b-3xl shadow-xl mx-auto max-w-7xl mt-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Hi, I'm <span className="text-yellow-300">Nagendra Thakur Sharma</span> – A Passionate Developer.
        </h1>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Welcome to my corner of the internet! I build robust and engaging softwares. Explore my projects and learn more about my journey in tech through my blog.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/#projects" className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
            View My Projects
          </Link>
          <Link to="/#blog" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-300">
            Read My Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

// New Projects Section Component (No changes needed)
const ProjectsSection = () => {
  const projects = [
    {
      image: "https://placehold.co/400x250/6366f1/ffffff?text=Project+1",
      title: "Sajilo360 POS (FLutter)",
      description: "Sajilo360 is a cloud-based SaaS platform offering tailored POS and enterprise solutions for the Food and Beverage (F&B) and Retail industries. It seamlessly integrates with local vendors and provides F&B businesses with an online presence, connecting them to their customers. The platform's scalable architecture allows businesses to expand rapidly without management concerns.",
      // description: "Sajilo360 is a platform with tailored POS, enterprise solution. It has features and modules to successfully run a Food and Beverage (F&B) and Retail business seamlessly connecting to the relevant localized vendors while giving an online presence for F&B business to connect to their favorite restaurants, coffee shops and others. Its SAAS based cloud architecture gives flexibility to our customers to scale their business very fast without worrying about the management.",
      liveLink: "https://play.google.com/store/apps/details?id=com.pos.sajilo360&pcampaignid=web_share",
      githubLink: "https://github.com/NagendraThakur/rastriya_solution_flutter",
    },
    {
      image: "https://placehold.co/400x250/22c55e/ffffff?text=Project+2",
      title: "Mero Gadi (Flutter)",
      description:"Mero Gadi Tracker provides GPS tracking systems to ensure the safety of your vehicles, fleet, family, and pets. The system delivers real-time location, speed, and route monitoring, allowing you to manage and keep an eye on what matters most. You receive instant alerts for accidents, unauthorized usage, and other critical events, all for an affordable price. These features help you stay connected and in control.",
    //  "Mero Gadi Tracker offers GPS tracking systems to keep your vehicles, fleet, family, and pets safe. The devices provide real-time location data, speed, and route monitoring, helping you to manage your assets and loved ones from anywhere. You can also receive alerts for accidents, unauthorized vehicle use, and other critical events at an affordable cost.",
      // "A real-time chat application using WebSockets, allowing instant messaging and group conversations.",
      liveLink: "https://play.google.com/store/apps/details?id=ms.pioneer.merogadi&hl=en",
      githubLink: "",
    },
    {
      image: "https://placehold.co/400x250/ef4444/ffffff?text=Project+3",
      title: "Chess App (FLutter)",
      description: "Built with Flutter and Dart, this chess game features a clean, intuitive user interface that offers a seamless playing experience. It demonstrates my ability to develop a complex, state-driven application with smooth animations and responsive design. The project showcases my skills in front-end development and logic implementation. It’s a testament to creating an engaging and functional user experience.",
      // "An intuitive dashboard for managing tasks and projects, with drag-and-drop functionality and progress tracking.",
      liveLink: "",
      githubLink: "https://github.com/NagendraThakur/chess_game_flutter",
    },
    {
      image: "https://placehold.co/400x250/3b82f6/ffffff?text=Project+4",
      title: "Spam Detection (Machine Learning)",
      description: "This spam detection software, developed in Python using a Jupyter Notebook, leverages machine learning to accurately classify emails. The project highlights my expertise in data science, including preprocessing, feature engineering, and model training.",
      liveLink: "",
      githubLink: "https://github.com/NagendraThakur/Spam-detection",
    },
     {
      image: "https://placehold.co/400x250/3b82f6/ffffff?text=Project+5",
      title: "ATS (Django)",
      description: "Built with the Django framework, this Applicant Tracking System (ATS) streamlines the hiring process for recruiters and hiring managers. It features a robust back-end for managing job postings, candidate applications, and interview scheduling. This project demonstrates my proficiency in full-stack web development, database design, and creating scalable, data-driven applications.",
      // "This spam detection software, developed in Python using a Jupyter Notebook, leverages machine learning to accurately classify emails. The project highlights my expertise in data science, including preprocessing, feature engineering, and model training.",
      liveLink: "",
      githubLink: "https://github.com/NagendraThakur/ats_django",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          My Latest Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects-page" // Link to a dedicated projects page if you have one
            className="inline-flex items-center justify-center py-3 px-8 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
          >
            <GitPullRequest size={20} className="mr-2" /> View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

// Project Card Component (No changes needed)
const ProjectCard = ({ image, title, description, liveLink, githubLink }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex justify-center space-x-4">

          {
            liveLink != ""
           ? (
             <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors"
          >
            <Code size={18} className="mr-1" /> Live Demo
          </a>
           ) : null
          }
          {
            githubLink != "" ? (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 font-medium transition-colors"
              >
                <Github size={18} className="mr-1" /> GitHub
              </a>
            ) : null
          }
        </div>
      </div>
    </div>
  );
};

// Why Work With Me Section (No changes needed)
const WhyWorkWithMeSection = () => {
  const skills = [
    {
      icon: <Code size={32} className="text-indigo-500 dark:text-indigo-400" />,
      title: "Full-Stack Development",
      description: "Proficient in both front-end (React, Vue) and back-end (Node.js, Python, Ruby on Rails) technologies.",
    },
    {
      icon: <Book size={32} className="text-green-500 dark:text-green-400" />,
      title: "Problem Solving",
      description: "A knack for breaking down complex problems and delivering efficient, scalable solutions.",
    },
    {
      icon: <FileText size={32} className="text-red-500 dark:text-red-400" />,
      title: "Clean Code Advocate",
      description: "Committed to writing readable, maintainable, and well-documented code.",
    },
    {
      icon: <Sun size={32} className="text-yellow-500 dark:text-yellow-400" />,
      title: "Responsive Design",
      description: "Ensuring applications look and function flawlessly across all devices and screen sizes.",
    },
    {
      icon: <MessageCircle size={32} className="text-blue-500 dark:text-blue-400" />,
      title: "Effective Communication",
      description: "Clear and concise communication, both technical and non-technical.",
    },
    {
      icon: <Github size={32} className="text-gray-700 dark:text-gray-300" />,
      title: "Version Control",
      description: "Experienced with Git and collaborative development workflows.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Why Work With Me?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <FeatureCard key={index} icon={skill.icon} title={skill.title} description={skill.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Card Component (reused - no changes needed)
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 border border-gray-100 dark:border-gray-700">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};



// Footer Component
const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
        <p>&copy; {new Date().getFullYear()} Nagendra Thakur Sharma. All rights reserved.</p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/NagendraThakur" // Your GitHub Profile Link
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            className="hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/nagendrathakursharma/" // Your LinkedIn Profile Link
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            className="hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.27 20.3H3.65V9.4H7.27v10.9zM5.46 7.82c-1.2 0-2.17-.97-2.17-2.17s.97-2.17 2.17-2.17 2.17.97 2.17 2.17-.97 2.17-2.17 2.17zm14.83 12.48h-3.62V14.5c0-1.3-.47-2.19-1.63-2.19-1.3 0-2.07.88-2.07 2.19v5.8h-3.61V9.4h3.61v1.57c.5-.72 1.3-1.76 3.26-1.76 2.37 0 4.15 1.55 4.15 4.88v6.21z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default App;