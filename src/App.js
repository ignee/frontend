import React from "react";
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">Irasshaimase</h1>
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
          <h2>Konichiwa!!</h2>
          <p>This is My First Nihongo Lesson!!</p>
          <button className="cta-button">Get Started</button>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <h2> Knacks</h2>
          <div className="feature-cards">
            <div className="card">
              <h3>Fast</h3>
              <p>Experience quick learning.</p>
            </div>
            <div className="card">
              <h3>Modern</h3>
              <p>Go with Innovative Learning.</p>
            </div>
            <div className="card">
              <h3>Flexible</h3>
              <p>Can Be Learn Anytime and Anywere.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy;THE END.</p>
      </footer>
    </div>
  );
}

export default App;