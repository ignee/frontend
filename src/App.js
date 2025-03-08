import React from "react";
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">My React App</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <h2>Welcome to My React App</h2>
          <p>Your one-stop solution for modern web development!</p>
          <button className="cta-button">Get Started</button>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <h2>Features</h2>
          <div className="feature-cards">
            <div className="card">
              <h3>Fast</h3>
              <p>Experience blazing-fast performance with React.</p>
            </div>
            <div className="card">
              <h3>Modern</h3>
              <p>Built with the latest technologies in mind.</p>
            </div>
            <div className="card">
              <h3>Scalable</h3>
              <p>Perfect for projects of any size.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;