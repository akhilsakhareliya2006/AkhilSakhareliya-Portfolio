import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Home />
          <Projects />
          <Education />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Akhil Sakhareliya. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;