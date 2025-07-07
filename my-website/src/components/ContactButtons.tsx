import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

interface ContactButtonsProps {
  links: {
    github: string;
    instagram: string;
    linkedin: string;
    discord: string;
    email: string;
  };
}

// Discord icon component to match the actual Discord app icon
function DiscordIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

export function ContactButtons({ links }: ContactButtonsProps) {
  const buttons = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: links.linkedin,
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: links.github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: links.instagram,
      color: 'hover:text-pink-500'
    },
    {
      name: 'Discord',
      icon: DiscordIcon,
      href: links.discord,
      color: 'hover:text-indigo-500'
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${links.email}`,
      color: 'hover:text-green-500'
    }
  ];

  return (
    <div className="flex justify-center items-center gap-6 mb-12">
      {buttons.map(({ name, icon: Icon, href, color }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex flex-col items-center justify-center p-3 transition-all duration-200 ${color}`}
          aria-label={`Visit my ${name} ${name === 'Email' ? '' : 'profile'}`}
        >
          <Icon 
            size={32} 
            className="text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-all duration-200"
          />
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
}