import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Header Micro Frontend" />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Header MFE Running Standalone</h2>
        <p>This is the header micro frontend running independently.</p>
      </main>
    </div>
  );
}

export default App;