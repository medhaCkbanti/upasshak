import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import DonateButton from "./DonateButton";
import { useState } from "react";

// MobileMenu.jsx - Updated for better responsiveness
const MobileMenu = ({ isOpen, navItems, closeMenu }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-0 top-24 bg-[#EFFFF3] z-20 shadow-lg overflow-y-auto"
        >
          <div className="p-4 space-y-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-gray-200">
                {item.path ? (
                  <Link
                    to={item.path}
                    className="hover:text-yellow-300 font-semibold block p-2"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <MobileDropdown
                    item={item}
                    isOpen={openDropdown === item.label}
                    toggleOpen={() => 
                      setOpenDropdown(prev => prev === item.label ? null : item.label)
                    }
                    closeMenu={closeMenu}
                  />
                )}
              </li>
              ))}
            </ul>
            <div className="px-2">
              <DonateButton mobile onClick={closeMenu} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu