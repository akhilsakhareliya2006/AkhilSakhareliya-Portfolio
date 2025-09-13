import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  grade?: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      id: 1,
      degree: "Bachelor of Techology (B.Tech)",
      institution: "Charotar University of Science and Technology (CHARUSAT)- Institute : DEPSTAR",
      location: "Anand, Gujarat",
      period: "2023 - 2027",
      description: "Specialized in software development and web technologies. Completed advanced coursework in algorithms, data structures, and system design.",
      grade: "8.00 CGPA"
    },
    {
      id: 2,
      degree: "Higher Secondary Education (12th)",
      institution: "Prayag Vidhya Sankul",
      location: "Junagadh, Gujarat",
      period: "2022 - 2023",
      description: "Class 12 Science is a pivotal academic stage that builds core knowledge in Physics, Chemistry, and Mathematics or Biology, preparing students for careers in engineering, medicine, and research.",
      grade: "93.36 PR"
    },


    {
      id: 3,
      degree: "Secondary School Certificate (10th)",
      institution: "Alpha Vidhya Sankul",
      location: "Junagadh, India",
      period: "2019",
      description: "Completed Secondary Education with a focus on Science and Mathematics. Built a solid foundation in logical reasoning, quantitative analysis, and core academic disciplines.",
      grade: "97.98 PR"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My educational journey that laid the foundation for my career in technology and software development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>

          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

              {/* Content card */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={16} />
                      {item.period}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h3>

                  <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    {item.institution}
                  </h4>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {item.location}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  {item.grade && (
                    <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      Grade: {item.grade}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;