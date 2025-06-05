import React from 'react';
import RemoteHeaderWrapper from './components/RemoteHeaderWrapper';
import RemoteProductsWrapper from './components/RemoteProductsWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <RemoteHeaderWrapper title="Micro Frontend Shell App" />
      <main style={{ minHeight: '80vh', backgroundColor: '#f8f9fa' }}>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Welcome to the Shell Application</h2>
          <p>This shell application orchestrates multiple micro frontends using Module Federation.</p>
        </div>
        <RemoteProductsWrapper />
      </main>
      <footer style={{ 
        padding: '1rem', 
        backgroundColor: '#282c34', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        <p>&copy; 2024 Micro Frontend Demo - Powered by Module Federation</p>
      </footer>
    </div>
  );
}

export default App;