import { Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Akhil_Sakhareliya_Resume.pdf";
    link.click();
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side - Text Content */}
        <div className={`flex-1 text-center md:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Name Container with proper greeting positioning */}
          <div className="mb-4">
            {/* Greeting - Fixed positioning */}
            <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-1">
              Hello, I'm
            </p>
            
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Akhil Sakhareliya
            </h1>
          </div>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-semibold">
            MERN Stack Developer
          </h2>

          {/* Intro */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Passionate full-stack developer specializing in modern web technologies.
            I create scalable, user-friendly applications with clean code and
            innovative solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start mb-8">
            <button
              onClick={handleDownloadResume}
              className="download-btn flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <Download size={20} className="mr-2" />
                Download Resume
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>

            {/* Social Links */}
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a
                href="https://github.com/akhilsakhareliya"
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 relative overflow-hidden group"
                aria-label="GitHub"
              >
                <Github size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </a>
              <a
                href="https://www.linkedin.com/in/akhil-sakhareliya-a3a66b297/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-btn p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 relative overflow-hidden group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </a>
              <a
                href="mailto:akhil@example.com"
                className="mail-btn p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 relative overflow-hidden group"
                aria-label="Email"
              >
                <Mail size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className={`flex-1 flex justify-center md:justify-end transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <img
              src="/profile.jpg"
              alt="Akhil Sakhareliya"
              className="relative w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-2 dark:focus:ring-offset-gray-900"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
      </button>
    </section>
  );
} 