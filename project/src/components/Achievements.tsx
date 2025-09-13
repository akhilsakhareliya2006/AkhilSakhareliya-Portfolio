import React from 'react';
import { Award, Trophy, Star, FileBadge } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'certification' | 'award' | 'project' | 'recognition';
  issuer?: string;
  link?: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Full Stack Web Development Certification",
      description: "Completed comprehensive course covering MERN stack development, deployment strategies, and modern web development practices.",
      date: "2023",
      type: "certification",
      issuer: "freeCodeCamp",
      
    },
    {
      id: 2,
      title: "Best Final Year Project",
      description: "Awarded for developing an innovative e-learning platform with real-time collaboration features and AI-powered recommendations.",
      date: "2023",
      type: "award",
      issuer: "Gujarat Technological University"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects with 50+ contributions and multiple merged pull requests.",
      date: "2022-2023",
      type: "recognition",
      issuer: "GitHub Community"
    },
    {
      id: 4,
      title: "React.js Developer Certification",
      description: "Advanced certification covering React hooks, context API, performance optimization, and modern React patterns.",
      date: "2022",
      type: "certification",
      issuer: "Meta (Facebook)",
      link: "https://developers.facebook.com/developercircles"
    },
    {
      id: 5,
      title: "Hackathon Winner - Smart City Solutions",
      description: "First place winner for developing a smart parking management system using IoT and web technologies.",
      date: "2022",
      type: "award",
      issuer: "TechFest Gujarat"
    },
    {
      id: 6,
      title: "Node.js Application Development",
      description: "Professional certification in backend development with Node.js, Express.js, and database integration.",
      date: "2022",
      type: "certification",
      issuer: "IBM",
      link: "https://www.ibm.com/training"
    },
    {
      id: 7,
      title: "Academic Excellence Award",
      description: "Recognized for maintaining consistent academic performance with distinction throughout the degree program.",
      date: "2021",
      type: "recognition",
      issuer: "Saurashtra University"
    },
    {
      id: 8,
      title: "JavaScript Algorithms and Data Structures",
      description: "Comprehensive certification covering advanced JavaScript concepts, algorithms, and data structure implementations.",
      date: "2021",
      type: "certification",
      issuer: "freeCodeCamp",
      link: "https://freecodecamp.org/certification"
    }
  ];

  const getIcon = (type: Achievement['type']) => {
    switch (type) {
      case 'certification':
        return <FileBadge size={24} />;
      case 'award':
        return <Trophy size={24} />;
      case 'project':
        return <Star size={24} />;
      case 'recognition':
        return <Award size={24} />;
      default:
        return <Award size={24} />;
    }
  };

  const getTypeColor = (type: Achievement['type']) => {
    switch (type) {
      case 'certification':
        return 'blue';
      case 'award':
        return 'yellow';
      case 'project':
        return 'purple';
      case 'recognition':
        return 'green';
      default:
        return 'blue';
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
      green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition and certifications that demonstrate my commitment to continuous learning and excellence in development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => {
            const colorClasses = getColorClasses(getTypeColor(achievement.type));

            return (
              <div
                key={achievement.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${colorClasses} flex-shrink-0`}>
                    {getIcon(achievement.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                        {achievement.date}
                      </span>
                    </div>

                    {achievement.issuer && (
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                        {achievement.issuer}
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${achievement.type === 'certification' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                      achievement.type === 'award' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                        achievement.type === 'project' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                          'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    }`}>
                    {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                  </span>

                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;