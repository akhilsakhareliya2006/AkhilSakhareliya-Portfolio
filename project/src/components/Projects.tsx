import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, payment integration, and admin dashboard. Features include cart management, order tracking, and inventory control.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      githubUrl: "https://github.com/akhilsakhareliya/ecommerce-app",
      demoUrl: "https://ecommerce-demo.com",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking. Includes Kanban board and calendar views.",
      techStack: ["React", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/akhilsakhareliya/task-manager",
      demoUrl: "https://task-manager-demo.com",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, post scheduling, and engagement tracking across multiple platforms.",
      techStack: ["React", "Chart.js", "Node.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/akhilsakhareliya/social-dashboard",
      demoUrl: "https://social-dashboard-demo.com",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Online learning platform with course creation, video streaming, quizzes, and progress tracking. Includes instructor and student portals.",
      techStack: ["React", "Node.js", "MongoDB", "AWS S3", "Cloudinary"],
      githubUrl: "https://github.com/akhilsakhareliya/lms-platform",
      demoUrl: "https://lms-demo.com",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts. Features clean UI and responsive design.",
      techStack: ["React", "OpenWeather API", "CSS3", "Geolocation API"],
      githubUrl: "https://github.com/akhilsakhareliya/weather-app",
      demoUrl: "https://weather-app-demo.com",
      image: "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and responsive design principles.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/akhilsakhareliya/portfolio",
      demoUrl: "https://akhilsakhareliya.com",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
   <h2 className="text-4xl md:text-5xl font-bold mb-4">
  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
    My Projects
  </span>
</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;