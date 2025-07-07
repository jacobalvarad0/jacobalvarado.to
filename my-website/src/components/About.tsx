import React from 'react';
import { Cloud, Shield, Zap } from 'lucide-react';

// Proxmox logo component
function ProxmoxIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );
}

// Kubernetes logo component
function KubernetesIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12.001 2.001c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1s1-.45 1-1v-1.5c0-.55-.45-1-1-1zm6.364 1.636c-.39-.39-1.02-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.06-1.06c.39-.39.39-1.02 0-1.41zm-12.728 0c-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.06-1.06c-.39-.39-1.02-.39-1.41 0zm6.364 2.364c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-8.5 5.5c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.55 0 1-.45 1-1s-.45-1-1-1h-1.5zm17 0c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.55 0 1-.45 1-1s-.45-1-1-1h-1.5zm-14.728 5.864c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.06-1.06zm12.728 0l-1.06 1.06c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.06-1.06c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0zm-6.364 1.636c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1s1-.45 1-1v-1.5c0-.55-.45-1-1-1z"/>
    </svg>
  );
}

export function About() {
  const skills = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Building scalable cloud solutions and managing distributed systems.'
    },
    {
      icon: ProxmoxIcon,
      title: 'Proxmox',
      description: 'Virtualization platform management and enterprise server solutions.'
    },
    {
      icon: KubernetesIcon,
      title: 'Kubernetes',
      description: 'Container orchestration, deployment automation, and microservices.'
    },
    {
      icon: Shield,
      title: 'Security & Monitoring',
      description: 'Implementing robust security practices and system monitoring.'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'CI/CD pipelines, infrastructure as code, and process optimization.'
    }
  ];

  return (
    <section>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map(({ icon: Icon, title, description }) => (
          <div 
            key={title}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg mb-4 mx-auto">
              <Icon size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}