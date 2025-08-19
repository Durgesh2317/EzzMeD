// src/components/ClinicalNetwork.jsx
import React from "react";

export default function ClinicalNetwork() {
  return (
    <section id="network" className="section clinical-network">
      <div className="container">
        <h2>Reveal Clinical Network (RCN)</h2>

        <p className="rcn-lead">
          We prioritize the clinical perspective during software development. Our
          Reveal Clinical Network bridges the gap between clinicians and
          engineering teams, leading to purposeful healthcare solutions.
        </p>

        <div className="rcn-grid">
          <article className="rcn-card">
          <img className="rcn-img" src="https://revealhealthtech.com/wp-content/uploads/2024/02/Untitled-design.png" alt="catalysts" />
            <h3>Innovative Care Catalysts (ICC)</h3>
            <p>
              These are boutique partners that provide industry insights and
              guidance on healthcare operations and clinical pathways.
            </p>
          </article>

          <article className="rcn-card">
          <img className="rcn-img" src="https://revealhealthtech.com/wp-content/uploads/2024/02/1-min.png" alt="advisory" />
            <h3>Clinical Advisory Panel (CAP)</h3>
            <p>
              This panel consists of leading clinicians, technologists, and
              executives from the healthcare industry that can advise on
              building purposeful technology.
            </p>
          </article>

          <article className="rcn-card">
          <img className="rcn-img" src="https://revealhealthtech.com/wp-content/uploads/2024/02/TECC1.png" alt="champions" />
            <h3>Tech-Enabled Care Champions (TECC)</h3>
            <p>
              We train frontline nurses and staff in the software development
              process and leverage their on-ground experience in our work.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
