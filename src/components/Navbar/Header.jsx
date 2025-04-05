import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DonateButton from "./DonateButton";
import TopBar from "./TopBar";
import NavigationItem from "./NavigationItem";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    {
      label: "About Us",
      dropdown: [
        { label: "Who We Are", path: "/about-us" },
        { label: "Vision & Mission", path: "/about-us" },
        { label: "Management Team", path: "/management-team" },
        { label: "Students", path: "/students" },
      ],
    },
    {
      label: "Gallery",
      dropdown: [
        { label: "Photos", path: "/gallery/photos" },
        { label: "Videos", path: "/gallery/videos" },
      ],
    },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.desktop-nav') && !e.target.closest('.mobile-menu')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <header>
      <TopBar />
      
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-30 flex bg-[#EFFFF3] text-[#106700] shadow-md relative"
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-40">
          <Link to="/" className="text-3xl font-bold tracking-widest">
            Upasshak
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 desktop-nav">
            <ul className="flex space-x-6 text-lg font-medium">
              {navItems.map((item) => (
                <NavigationItem
                  key={item.label}
                  item={item}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              ))}
            </ul>
            <DonateButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          navItems={navItems}
          closeMenu={() => setIsMenuOpen(false)}
        />
      </motion.nav>
    </header>
  );
};

export default Header;