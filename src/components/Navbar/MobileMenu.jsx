import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import DonateButton from "./DonateButton";
import LogoutButton from "./LogoutButton";
import { useState } from "react";

const MobileMenu = ({ isOpen, navItems, closeMenu, isLoggedIn, handleLogout }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-24 left-0 w-full bg-[#EFFFF3] z-20 shadow-lg"
        >
          <ul className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <li key={item.label}>
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
            <li>
              {isLoggedIn ? (
                <LogoutButton mobile onClick={handleLogout} />
              ) : (
                <DonateButton mobile onClick={closeMenu} />
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// MobileDropdown component remains the same
export default MobileMenu;