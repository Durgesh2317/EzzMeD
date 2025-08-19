import React from "react";

const values = [
  {
    id: 1,
    title: "Integrity",
    desc: "We prioritize honesty, transparency, and ethical practices in everything we do.",
    icon: "💎",
  },
  {
    id: 2,
    title: "Innovation",
    desc: "Driving creative solutions and embracing new technologies to improve healthcare outcomes.",
    icon: "🚀",
  },
  {
    id: 3,
    title: "Collaboration",
    desc: "Working closely with partners and clients to co-create meaningful solutions.",
    icon: "🤝",
  },
  {
    id: 4,
    title: "Excellence",
    desc: "Maintaining the highest standards in quality, design, and delivery of our services.",
    icon: "🌟",
  },
];

export default function ValuesSection() {
  return (
    <section id="values" className="section values-section">
      <div className="container">
        <h2>Our Values</h2>
        <p className="values-intro">
          The principles that guide our work and shape our culture.
        </p>

        <div className="values-grid">
          {values.map((val) => (
            <div key={val.id} className="value-card">
              <div className="value-icon">{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
