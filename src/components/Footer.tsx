import React from "react";
import kirusawhite from "../res/kirusawhite.png"; // Adjust path as needed
import { Button } from "./ui/button";
import { Mail, Linkedin } from "lucide-react";
// import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 pt-16 pb-10 relative overflow-hidden">
      {/* Subtle top gradient for soft fade */}
      <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-[#0a0a0a] to-transparent pointer-events-none"></div>

      {/* Main Grid Layout */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        
        {/* 🔹 Brand + About */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <img
              src={kirusawhite}
              alt="KirusaAI Logo"
              className="h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(230,57,70,0.4)]"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Empowering businesses with{" "}
            <span className="text-white font-semibold">AI-driven innovation</span>{" "}
            to transform industries and create meaningful impact across the globe.
          </p>

          <Button
            className="bg-[#e63946] hover:bg-[#c92e3c] transition-all duration-300 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-[0_0_12px_rgba(230,57,70,0.3)] hover:shadow-[0_0_20px_rgba(230,57,70,0.5)]"
            onClick={() => window.open("", "_blank")}
          >
            View Demo
          </Button>
        </div>

        {/* 🔹 Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-l-4 border-[#e63946] pl-3">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            {/* <li className="flex items-start space-x-2">
              <MapPin size={18} className="text-[#e63946] mt-1" />
              <span>
                <strong>Headquarters</strong>
                <br />
                123 Innovation Drive, Princeton, NJ, USA
              </span>
            </li> */}
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-[#e63946]" />
              <a href="mailto:info@kirusa.com" className="hover:text-white">
                info@kirusa.com
              </a>
            </li>
            {/* <li className="flex items-center space-x-2">
              <Phone size={18} className="text-[#e63946]" />
              <a href="tel:+11234567890" className="hover:text-white">
                +1 (123) 456-7890
              </a>
            </li> */}
          </ul>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-l-4 border-[#e63946] pl-3">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" className="hover:text-[#e63946] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#e63946] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-[#e63946] transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#e63946] transition-colors">
                Contact
              </a>
            </li>
            
          </ul>
        </div>

        {/* 🔹 Social Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-l-4 border-[#e63946] pl-3">
            Follow Us
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Stay connected with our latest updates and insights.
          </p>
          <div className="flex space-x-5">
            <a
              href="https://www.linkedin.com/company/kirusa-inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#e63946] transition-all hover:scale-110"
            >
              <Linkedin size={22} />
            </a>

            {/* <a
              href="#"
              className="text-gray-400 hover:text-[#e63946] transition-all hover:scale-110"
            >
              <Twitter size={22} />
            </a> */}
          </div>
        </div>
      </div>

      {/* 🔹 Divider + Footer Note */} 
       <div className="border-t border-gray-800 mt-14 pt-6 text-center relative">
        {/* <p className="text-lg text-white font-semibold tracking-wide mb-1">
          © {new Date().getFullYear()} Kirusa
        </p>
        <p className="text-sm text-gray-400">
          All rights reserved • Built with AI-driven innovation
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
