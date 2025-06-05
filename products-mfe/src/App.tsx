import React from 'react';
import Products from './components/Products';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '1rem', backgroundColor: '#f5f5f5', marginBottom: '2rem' }}>
        <h1>Products Micro Frontend</h1>
      </header>
      <Products />
    </div>
  );
}

export default App;