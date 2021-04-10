import React, { useState, useEffect } from 'react';
import Pages from './pages';
import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    
    document.title = 'Sim Kennedy - Software Developer'
    // NOTE: Use your username below
    fetch('https://gitconnected.com/v1/portfolio/simkennedy')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;
