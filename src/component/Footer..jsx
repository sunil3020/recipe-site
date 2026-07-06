import React from 'react';
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <div className="brand">
            <div className="brand-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 8v8M14 8v8M2 8c0 2.2 1.8 4 4 4h1v8h2v-8h1c2.2 0 4-1.8 4-4V2h-2v6h-1V2h-2v6h-1V2H6v6H4V2H2v6Z"/>
              </svg>
            </div>
            <h2 className="brand-name">
              Flavor <span>Fusion</span>
            </h2>
          </div>

          <p className="footer-text">
            Discovering your next culinary adventure, one recipe at a time. Join our community of home chefs.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><a href="/recipes">All Recipes</a></li>
            <li><a href="/meal-plans">Meal Plans</a></li>
            <li><a href="/chefs">Featured Chefs</a></li>
            <li><a href="/blog">Cooking Tips</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <form className="newsletter">
            <input type="email" placeholder="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {currentYear} Flavor Fusion. All rights reserved.</p>

        <div className="socials">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Pinterest</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;