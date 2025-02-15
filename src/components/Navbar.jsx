import React, { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop dropdown visibility
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile dropdown visibility
  const navigate = useNavigate(); // For programmatic navigation

  // Updated links to use React Router paths
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Features", link: "/features" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
    { name: "Socials", link: "#", dropdown: true },
    { name: "FAQ", link: "/faq" },
  ];

  // Handle smooth scrolling for anchor links
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#f3f5fc] py-4 px-8 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">HD</span>
          </div>
          <Link to="/" className="text-lg font-semibold text-blue-600">
            Hellodigisir
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden p-2 focus:outline-none hover:cursor-pointer z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} className="text-gray-800" />
        </button>

        {/* Navigation (Desktop) */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 text-gray-800 font-medium">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative cursor-pointer hover:text-blue-600"
                onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
              >
                {item.dropdown ? (
                  <div className="flex items-center space-x-1">
                    <span>{item.name}</span>
                    <ChevronDown size={16} />
                  </div>
                ) : (
                  <Link to={item.link}>{item.name}</Link>
                )}

                {/* Dropdown for Socials (Desktop) */}
                {item.dropdown && isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                    <ul className="py-2">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                          Facebook
                        </a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                          Twitter
                        </a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Navigation (Mobile) */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-[#f3f5fc] shadow-md z-40">
            <ul className="flex flex-col space-y-4 p-4 text-gray-800 font-medium">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() =>
                    item.dropdown && setIsMobileDropdownOpen(!isMobileDropdownOpen)
                  }
                >
                  {item.dropdown ? (
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </div>
                  ) : (
                    <Link to={item.link} onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown for Socials (Mobile) */}
                  {item.dropdown && isMobileDropdownOpen && (
                    <ul className="pl-4 mt-2 space-y-2">
                      <li className="hover:bg-gray-100">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                          Facebook
                        </a>
                      </li>
                      <li className="hover:bg-gray-100">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                          Twitter
                        </a>
                      </li>
                      <li className="hover:bg-gray-100">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                          Instagram
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;