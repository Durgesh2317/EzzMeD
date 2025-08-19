import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1>We help build healthcare products that matter</h1>
          <p>
            Reveal HealthTech partners with healthcare organizations to design,
            build, and scale digital solutions that improve patient care,
            enhance clinician workflows, and drive better outcomes.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn primary">Let’s Talk</a>
            <a href="#case-studies" className="btn ghost">View Case Studies</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://revealhealthtech.com/wp-content/uploads/2023/08/ezgif.com-gif-maker-12.webp"
            alt="Healthcare product illustration"
          />
        </div>
      </div>
    </section>
  );
}
