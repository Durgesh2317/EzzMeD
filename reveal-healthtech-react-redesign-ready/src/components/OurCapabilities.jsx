import React from "react";

export default function OurCapabilities() {
  const capabilities = [
    {
      title: "Product Engineering",
      desc: "End-to-end development of secure, scalable healthcare software products tailored to your vision.",
      img: "https://t3.ftcdn.net/jpg/02/97/79/96/360_F_297799634_elHYKPFh99cq1Zz0iP52aVMbxTkgR87v.jpg"
    },
    {
      title: "Cloud & DevOps",
      desc: "HIPAA-compliant, secure cloud architecture with automated CI/CD pipelines for reliable deployments.",
      img: "https://cdn.prod.website-files.com/624af442a8151d5a2ef5644c/62fa369d749dae20008a32b1_cloud-mobile-header.svg"
    },
    {
      title: "Data & AI",
      desc: "Healthcare-focused data engineering, interoperability with EHRs, and applied AI/ML for insights.",
      img: "https://static.vecteezy.com/system/resources/previews/004/885/882/non_2x/ai-artificial-intelligence-logo-in-hands-artificial-intelligence-and-machine-learning-concept-sphere-grid-wave-with-binary-code-big-data-innovation-technology-neural-networks-illustration-vector.jpg"
    },
    {
      title: "Design & UX",
      desc: "Clinician- and patient-centered design that drives usability, adoption, and meaningful outcomes.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR15df6DxZ48oqoIRtBljY9Jvym5n742xS3cQ&s"
    },
    {
      title: "Quality & Compliance",
      desc: "QA, security audits, and adherence to healthcare regulations like HIPAA, GDPR, and FDA guidance.",
      img: "https://www.shutterstock.com/image-vector/compliance-vector-icon-isolated-on-600nw-2080715119.jpg"
    },
    {
      title: "Staff Augmentation",
      desc: "Flexible, healthcare-trained engineering talent to scale your product development teams faster.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzlhGp3w8bhJFAdcqNKvo5i4sGJj6IvVmJQ&s"
    }
  ];

  return (
    <section id="capabilities" className="section capabilities">
      <div className="container">
        <h2>Our Capabilities</h2>
        <p className="capabilities-lead">
          We provide specialized healthcare technology services that cover the
          entire product lifecycle.
        </p>

        <div className="capabilities-grid">
          {capabilities.map((c, i) => (
            <article className="cap-card" key={i}>
            <img src={c.img} alt={c.name} className="cap-icons" />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
