import React from "react";

const blogs = [
  {
    id: 1,
    title: "How AI is Transforming Healthcare",
    excerpt:
      "Artificial Intelligence is reshaping patient care, diagnostics, and operational efficiency in healthcare organizations worldwide.",
    img: "https://itbrief.asia/uploads/story/2024/12/11/techday_26169f03bf0a929134f3.webp",
    link: "#",
  },
  {
    id: 2,
    title: "Design Thinking in Healthcare for All People",
    excerpt:
      "Learn how user-centered design approaches can improve patient experiences and reduce system inefficiencies.",
    img: "https://walkingtree.tech/wp-content/uploads/2020/03/2.png",
    link: "#",
  },
  {
    id: 3,
    title: "Building Scalable HealthTech Platforms",
    excerpt:
      "Explore strategies for developing scalable, secure, and compliant digital healthcare platforms.",
    img: "https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2021/01/HealthTech-Feature.jpg",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section id="blogs" className="section blog-section">
      <div className="container">
        <h2>Latest Insights</h2>
        <p className="blog-intro">
          Explore our thoughts on technology, design, and innovation in
          healthcare.
        </p>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.img} alt={blog.title} />
              <div className="blog-card-body">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <a href={blog.link} className="btn btn-secondary">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
