// App.tsx

import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Greeting name="John" />
      <Counter />
    </div>
  );
};

export default App;
