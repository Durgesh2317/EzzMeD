import React, { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
       <div className="logo">
        <img src="https://i.postimg.cc/fT4tmvSC/logo.jpg" alt="logo" />
       </div>
        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          <a href="#network">EzzMed Clinical Network</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#ai">AI</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#blogs">Blogs</a>
          <a href="#values">Values</a>
          <a href="#contact" className="btn">Contact</a>
        </nav>

      </div>
    </header>
  );
}
