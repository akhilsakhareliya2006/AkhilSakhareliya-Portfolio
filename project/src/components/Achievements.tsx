import React, { useState } from 'react';
import { Award, Trophy, Star, FileBadge, ExternalLink, X, Download } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'certification' | 'award' | 'project' | 'recognition';
  issuer?: string;
  link?: string;
  certificate?: string; // Path to certificate image/PDF
}

const Achievements: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Foundational of C# with Microsoft",
      description: "The Foundational C# Certification with Microsoft and freeCodeCamp is a free, globally accessible 35-hour course that teaches core C# programming skills through hands-on training and culminates in a certification exam.",
      date: "2025",
      type: "certification",
      issuer: "freeCodeCamp",
      certificate: "/certificates/C.jpg" // URL encoded path without spaces
    },
    {
      id: 2,
      title: ".Net based Web Application",
      description: "A .NET web application is a dynamic website or web service built using Microsoft’s .NET platform. It leverages frameworks like ASP.NET or ASP.NET Core to deliver scalable, secure, and high-performance web experiences.",
      date: "2025",
      type: "certification",
      issuer: "CHARUSAT",
      certificate: "/certificates/C.net.jpg"
    },
    {
      id: 3,
      title: "AWS-Cloud Clubs",
      description: "Cloud-based ML platforms like Google Cloud and CloudyML empower developers to build, deploy, and scale intelligent systems with hands-on tools, real-world projects, and end-to-end learning paths.",
      date: "2024",
      type: "certification",
      issuer: "CHARUSAT-Cloud Clubs",
      certificate: "/certificates/Cloud.jpg"
    },
    {
      id: 4,
      title: "Java 11 Essentials",
      description: "Java 11 Essentials introduce powerful updates like the new HTTP client API, enhanced string methods, and long-term support (LTS), making it a robust, modern foundation for scalable, production-ready applications.",
      date: "2023",
      type: "certification",
      issuer: "Infosys",
      certificate: "/certificates/java.png"
    },

    {
      id: 5,
      title: "MERN-Web Application",
      description: "A MERN web application is a full-stack JavaScript solution built using MongoDB, Express.js, React, and Node.js, enabling developers to create dynamic, scalable, and responsive web apps entirely in JavaScript—from database to UI.",
      date: "2025",
      type: "certification",
      issuer: "CHARUSAT",
      certificate: "/certificates/MERN.jpg"
    },
    {
      id: 6,
      title: "DSA using JAVA",
      description: "DSA using Java empowers developers to implement efficient algorithms and data structures—like arrays, linked lists, trees, and graphs—using Java’s object-oriented features, making it ideal for scalable, modular, and interview-ready solutions",
      date: "2022",
      type: "certification",
      issuer: "Swayam NPTEL",
      certificate: "/certificates/NPTEL-java.jpg"
    },
    
    {
      id: 7,
      title: "Web Designing",
      description: "Web designing is the creative and technical process of planning, structuring, and styling websites to deliver an engaging, user-friendly experience—blending visual aesthetics, intuitive navigation, and responsive layouts using tools like HTML, CSS, JavaScript, and design principles like UI/UX.",
      date: "2023",
      type: "certification",
      issuer: "Great Learning",
      certificate: "/certificates/WEB.png"
    },
    
      
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

  const handleViewCertificate = (certificate: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedCertificate(certificate);
  };

  const handleDownloadCertificate = (certificate: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = certificate;
    link.download = certificate.split('/').pop() || 'certificate';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  const isPdfFile = (filename: string) => {
    return filename.toLowerCase().endsWith('.pdf');
  };

  return (
    <>
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

                    <div className="flex gap-2">
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center gap-1"
                        >
                          Verify <ExternalLink size={14} />
                        </a>
                      )}

                      {achievement.certificate && (
                        <button
                          onClick={(e) => handleViewCertificate(achievement.certificate!, e)}
                          className="text-sm text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium flex items-center gap-1"
                        >
                          View Cert
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Certificate
              </h3>
              <div className="flex gap-2">
                {selectedCertificate && (
                  <button
                    onClick={(e) => handleDownloadCertificate(selectedCertificate, e)}
                    className="p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    title="Download Certificate"
                  >
                    <Download size={20} />
                  </button>
                )}
                <button
                  onClick={closeCertificateModal}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-4 max-h-[calc(90vh-80px)] overflow-auto flex justify-center items-center">
              {isPdfFile(selectedCertificate) ? (
                <iframe
                  src={selectedCertificate}
                  className="w-full h-[70vh] border rounded"
                  title="Certificate PDF"
                />
              ) : (
                <div className="text-center">
                  <img
                    src={selectedCertificate}
                    alt="Certificate"
                    className="max-w-full max-h-[70vh] object-contain mx-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Show error message if image fails to load
                      const errorDiv = document.createElement('div');
                      errorDiv.className = 'text-red-500 p-4';
                      errorDiv.textContent = `Certificate not found. Please check if the file exists at: ${selectedCertificate}`;
                      target.parentNode?.appendChild(errorDiv);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements;