import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { ContactButtons } from './components/ContactButtons';
import { ThemeToggle } from './components/ThemeToggle';
import { About } from './components/About';

function App() {
  // Your actual social media links
  const socialLinks = {
    github: 'https://github.com/jacobalvarad0',
    instagram: 'https://www.instagram.com/jacobalvarad0/',
    linkedin: 'https://www.linkedin.com/in/jacobsalvarado/',
    discord: 'https://discord.com/users/130020642392113152',
    email: 'contact@alvarado.to'
  };

  const myName = "Hi! I'm Jacob Alvarado";

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <ThemeToggle />
        
        <main className="container mx-auto px-6 py-12 max-w-5xl">
          <Header name={myName} />
          <ContactButtons links={socialLinks} />
          <About />
        </main>

        <footer className="border-t border-gray-200 dark:border-gray-700 mt-12">
          <div className="container mx-auto px-6 py-6 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © 2025 Jacob Alvarado. Made with ❤️ and React.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;