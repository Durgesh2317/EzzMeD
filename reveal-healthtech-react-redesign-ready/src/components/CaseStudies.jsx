import React from "react";

export default function CaseStudies() {
  const studies = [
    {
      title: "Digital Therapeutics Platform",
      desc: "Scaled a HIPAA-compliant digital therapeutics app improving chronic disease management for thousands of patients.",
      img: "https://media.licdn.com/dms/image/v2/D5612AQEIy8eUQUD2-Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1692178146348?e=2147483647&v=beta&t=f6rWx41lml0oJJv99ImU7Q42LtpwhTebT8jnzLzUk_0"
    },
    {
      title: "AI-powered Diagnostics",
      desc: "Developed an AI solution for early disease detection using medical imaging, enhancing clinical accuracy.",
      img: "https://www.aha.org/sites/default/files/2023-05/How-AI-Is-Improving-Diagnostics-Decision-Making-and-Care.png"
    },
    {
      title: "Interoperability with EHRs",
      desc: "Integrated a healthcare SaaS product with major EHR systems, ensuring secure and seamless data exchange.",
      img: "https://demigos.com/media/cache/13/1b/131bcd97248b9a8682e3c5f7e49db1d9.jpg"
    },
    {
      title: "Telehealth Platform",
      desc: "Developed a telehealth platform for remote patient consultations, improving access to quality care.",
      img: "https://docsink.com/wp-content/uploads/2020/06/rpm-landing-banner.jpg"
    },
    {
      title: "Personalized Medicine",
      desc: "Developed a platform for precision medicine, enabling healthcare providers to offer tailored treatment plans.",
      img: "https://blogs.dpuerp.in/images/blog/14/11091-personalized-medicine-precision-care-for-every-patient.jpg"
    }
  ];

  return (
    <section id="case-studies" className="section case-studies">
      <div className="container">
        <h2>Case Studies</h2>
        <p className="case-lead">
          Explore how we’ve partnered with healthcare innovators to deliver
          transformative outcomes.
        </p>

        <div className="case-grid">
          {studies.map((study, i) => (
            <article className="case-card" key={i}>
              <img src={study.img} alt={study.title} />
              <div className="case-content">
                <h3>{study.title}</h3>
                <p>{study.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
