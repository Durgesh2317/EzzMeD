import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <h3>EzzMed</h3>
          <p>
            Driving healthcare innovation through technology, design, and
            clinical expertise.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#capabilities">Capabilities</a></li>
            <li><a href="#ai">AI in Healthcare</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: contact@revealhealthtech.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Health St, Innovation City</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EzzMed. All rights reserved.</p>
      </div>
    </footer>
  );
}
