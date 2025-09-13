import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSectionClick = () => {
    setIsClicked(true);
    
    // Reset animation after a short delay
    setTimeout(() => {
      setIsClicked(false);
    }, 50);
  };

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      icon: <Globe size={24} />,
      color: "blue",
      skills: [
        { name: "React", level: 90, category: "frontend" },
        { name: "JavaScript", level: 88, category: "frontend" },
        { name: "HTML", level: 95, category: "frontend" },
        { name: "CSS", level: 85, category: "frontend" },
        { name: "TypeScript", level: 80, category: "frontend" },
        { name: "Tailwind CSS", level: 90, category: "frontend" }
      ]
    },
    {
      name: "Backend Development",
      icon: <Server size={24} />,
      color: "green",
      skills: [
        { name: "Node.js", level: 85, category: "backend" },
        { name: "Express.js", level: 90, category: "backend" },
        { name: "REST APIs", level: 90, category: "backend" },
       
      ]
    },
    {
      name: "Database & Tools",
      icon: <Database size={24} />,
      color: "purple",
      skills: [
        { name: "MongoDB", level: 85, category: "database" },
        { name: "PostgreSQL", level: 70, category: "database" },
        { name: "Git/Github", level: 90, category: "tools" },
        { name: "Docker", level: 60, category: "tools" },
        { name: "AWS", level: 50, category: "tools" }
      ]
    },
    {
      name: "Programming Languages",
      icon: <Code size={24} />,
      color: "orange",
      skills: [
        { name: "C", level: 90, category: "language" },
        { name: "C++", level: 80, category: "language" },
        { name: "C#", level: 70, category: "language" },
        { name: "Python", level: 75, category: "language" },
        { name: "Java", level: 70, category: "language" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900",
        text: "text-blue-600 dark:text-blue-400",
        progress: "bg-blue-500",
        progressBg: "bg-blue-200 dark:bg-blue-800"
      },
      green: {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-600 dark:text-green-400",
        progress: "bg-green-500",
        progressBg: "bg-green-200 dark:bg-green-800"
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900",
        text: "text-purple-600 dark:text-purple-400",
        progress: "bg-purple-500",
        progressBg: "bg-purple-200 dark:bg-purple-800"
      },
      orange: {
        bg: "bg-orange-100 dark:bg-orange-900",
        text: "text-orange-600 dark:text-orange-400",
        progress: "bg-orange-500",
        progressBg: "bg-orange-200 dark:bg-orange-800"
      }
    };
    return colors[color as keyof typeof colors];
  };

  // Determine if we should animate (either visible or clicked)
  const shouldAnimate = isVisible || isClicked;

  return (
    <section 
      id="skills" 
      ref={skillsRef} 
      className="py-20 bg-white dark:bg-gray-900 cursor-pointer"
      onClick={handleSectionClick}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Click anywhere in this section to animate the skill bars! Here are my core competencies and the technologies I work with to create modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const colorClasses = getColorClasses(category.color);

            return (
              <div
                key={category.name}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
                    <div className={colorClasses.text}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full h-2 ${colorClasses.progressBg} rounded-full overflow-hidden`}>
                        <div
                          className={`h-full ${colorClasses.progress} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: shouldAnimate ? `${skill.level}%` : '0%',
                            transitionDelay: shouldAnimate ? `${Math.random() * 300}ms` : '0ms'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Vite",  "VS Code", "Postman", "Netlify",
              "Firebase", "JWT", "Next.js",
              
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                style={{
                  animation: shouldAnimate ? `fadeInUp 0.5s ease-out ${index * 100}ms both` : 'none'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;