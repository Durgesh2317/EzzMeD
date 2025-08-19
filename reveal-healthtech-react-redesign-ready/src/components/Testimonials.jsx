import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer, HealthTech Co.",
      quote:
        "Reveal HealthTech has been instrumental in accelerating our digital health platform. Their technical expertise and clinical insight are unmatched.",
      img: "https://drsaurabhtiwari.com/wp-content/uploads/2018/05/Sarah-Johnson.jpg"
    },
    {
      name: "Michael Lee",
      role: "CEO, MedAI Diagnostics",
      quote:
        "The team brought our AI vision to life, integrating seamlessly with our clinical workflows while ensuring compliance and scalability.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBH-Gza9Y7pmKGeSkoRx_Gi16Cj8Arjn9ItA&s"
    },
    {
      name: "Dr. Emily Chen",
      role: "Clinical Psychologist, HealthTech Co.",
      quote:
        "Our greatest asset isn't our code; it's our people.They nurtured a culture of innovation, where every voice mattered.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOZFsazaimQUoeApU_ga6k7thWRaMkf53qw&s"
    },
    {
      name: "Rahul Maroli",
      role: "Chief Executive Officer & Board Member at Tap Health.",
      quote:
        "Rahul Maroli is involved in health tech, particularly with Tap Health, India's first voice-based AI Health Assistant, with the goal of increasing healthcare accessibility.",
      img: "https://admin.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2020/04/27/rshul.jpg?itok=ggx2PfGn"
    },
    {
      name: "Anita Patel",
      role: "Founder, CareConnect",
      quote:
        "Partnering with Reveal gave us confidence in building a secure and impactful healthcare product. Their commitment to quality shines through.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OzBvop9Mi7t_Kb1qhGo_wIupzrslKmgnYQ&s"
    }
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-header">
                <img src={t.img} alt={t.name} className="testimonial-avatar" />
                <div>
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </div>
              </div>
              <p className="testimonial-quote">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
