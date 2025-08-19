import React from "react";

export default function AISection() {
  return (
    <section id="ai" className="section ai-section">
      <div className="container ai-container">
        <div className="ai-text">
          <h2>Applied AI in Healthcare</h2>
          <p>
            Unlock the potential of Artificial Intelligence to enhance clinical
            outcomes, optimize workflows, and personalize patient care. Our AI
            solutions are built with compliance and scalability in mind.
          </p>
          <ul>
            <li>Predictive analytics for clinical decision support</li>
            <li>Natural language processing of clinical notes</li>
            <li>Medical imaging & diagnostics with AI</li>
            <li>Operational efficiency & workflow automation</li>
          </ul>
        </div>
        <div className="ai-graphic">
          <img
            src="https://impressivetimes.com/wp-content/uploads/2025/05/IT-BRAEING-2025-05-08T115429.593.jpg" 
            alt="AI in Healthcare illustration"
          />
        </div>
      </div>
    </section>
  );
}
