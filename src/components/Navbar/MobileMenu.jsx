import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import DonateButton from "./DonateButton";
import { useState } from "react";

const MobileMenu = ({ isOpen, navItems, closeMenu }) => {
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
              <DonateButton mobile onClick={closeMenu} />
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MobileDropdown = ({ item, isOpen, toggleOpen, closeMenu }) => (
  <div className="space-y-2">
    <button
      className="flex items-center w-full justify-between p-2 font-semibold"
      onClick={toggleOpen}
    >
      {item.label}
      <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="pl-4 space-y-2 overflow-hidden"
        >
          {item.dropdown.map((subItem) => (
            <motion.li
              key={subItem.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hover:bg-[#b8e0b8] rounded-md"
            >
              <Link
                to={subItem.path} // Use subItem.path instead of transforming label
                className="block p-2"
                onClick={closeMenu}
              >
                {subItem.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </div>
);

export default MobileMenu;