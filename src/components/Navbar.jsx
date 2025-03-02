import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const menuItems = [
    { name: "Features", link: "/features" },
    { name: "Socials", link: "#", dropdown: true },
    { name: "Resources", link: "/resources" },
    { name: "Pricing", link: "/pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[rgb(231,235,255)] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 15 70 100"
              >
                <defs>
                  <linearGradient id="grad" x1="0%" y1="50%" x2="100%" y2="0%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "#4355ff", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#7081ff", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M20 20 L70 20 L80 30 L30 30 L30 50 L70 50 L70 60 L30 60 L30 80 L80 80 L70 90 L20 90 Z"
                  fill="url(#grad)"
                />
              </svg>
              <span className="text-xl font-bold bg-gradient-to-r from-[#4355ff] to-[#7081ff] bg-clip-text text-transparent">
                rudexa
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
              >
                {item.dropdown ? (
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-[#4355ff] transition-colors">
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link
                    to={item.link}
                    className="text-gray-600 hover:text-[#4355ff] transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    <Link
                      to="/linkedin"
                      className="block px-4 py-2 text-gray-600 hover:text-[#4355ff] hover:bg-gray-50"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      to="/twitter"
                      className="block px-4 py-2 text-gray-600 hover:text-[#4355ff] hover:bg-gray-50"
                    >
                      Twitter
                    </Link>
                    <Link
                      to="/instagram"
                      className="block px-4 py-2 text-gray-600 hover:text-[#4355ff] hover:bg-gray-50"
                    >
                      Instagram
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-[#4355ff] font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#4355ff] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#3b4ce0] transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[rgb(231,235,255)] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <button
                      className="flex items-center justify-between w-full text-gray-600 hover:text-[#4355ff] transition-colors"
                      onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown size={16} />
                    </button>
                  ) : (
                    <Link
                      to={item.link}
                      className="text-gray-600 hover:text-[#4355ff] transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Mobile Dropdown */}
                  {item.dropdown && isMobileDropdownOpen && (
                    <div className="mt-2 pl-4 flex flex-col space-y-2">
                      <Link
                        to="/linkedin"
                        className="text-gray-600 hover:text-[#4355ff] transition-colors"
                      >
                        LinkedIn
                      </Link>
                      <Link
                        to="/twitter"
                        className="text-gray-600 hover:text-[#4355ff] transition-colors"
                      >
                        Twitter
                      </Link>
                      <Link
                        to="/instagram"
                        className="text-gray-600 hover:text-[#4355ff] transition-colors"
                      >
                        Instagram
                      </Link>
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/login"
                  className="block text-gray-600 hover:text-[#4355ff] font-medium transition-colors mb-3"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block bg-[#4355ff] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#3b4ce0] transition-colors text-center"
                >
                  Sign up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;