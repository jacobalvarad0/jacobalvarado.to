import React from 'react';

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps) {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
        {name}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
        DevOps Engineer & IT Professional
      </p>
    </header>
  );
}