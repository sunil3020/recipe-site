import React from 'react';
import "./footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white pt-12 pb-8 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#F28C48] p-1.5 rounded-full">
              {/* Simplified Fork/Knife Icon to match 6806907977058599378.png */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8v8M14 8v8M2 8c0 2.2 1.8 4 4 4h1v8h2v-8h1c2.2 0 4-1.8 4-4V2h-2v6h-1V2h-2v6h-1V2H6v6H4V2H2v6Z"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Flavor <span className="text-[#F28C48]">Fusion</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discovering your next culinary adventure, one recipe at a time. Join our community of home chefs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#F28C48] font-bold mb-4 uppercase tracking-wider text-xs">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/recipes" className="hover:text-white transition">All Recipes</a></li>
            <li><a href="/meal-plans" className="hover:text-white transition">Meal Plans</a></li>
            <li><a href="/chefs" className="hover:text-white transition">Featured Chefs</a></li>
            <li><a href="/blog" className="hover:text-white transition">Cooking Tips</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-[#F28C48] font-bold mb-4 uppercase tracking-wider text-xs">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-[#F28C48] font-bold mb-4 uppercase tracking-wider text-xs">Fresh Recipes in your Inbox</h4>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-[#444444] border-none rounded px-4 py-2 text-sm focus:ring-2 focus:ring-[#F28C48] outline-none"
            />
            <button className="bg-[#F28C48] hover:bg-[#E67E22] text-white font-bold py-2 rounded text-sm transition shadow-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs text-center md:text-left">
          © {currentYear} Flavor Fusion. All culinary rights reserved.
        </p>
        <div className="flex gap-6">
          {/* Social Icons Placeholder */}
          {['facebook', 'instagram', 'twitter', 'pinterest'].map((social) => (
            <a key={social} href={`#${social}`} className="text-gray-400 hover:text-[#F28C48] transition">
              <span className="capitalize text-xs">{social}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;