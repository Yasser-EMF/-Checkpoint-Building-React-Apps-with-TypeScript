// Greeting.tsx

import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-3xl font-bold text-white">
        Hello, <span className="text-yellow-300">{name}</span>!
      </h1>
    </div>
  );
};

export default Greeting;
