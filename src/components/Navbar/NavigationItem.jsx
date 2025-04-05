import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const NavigationItem = ({ item, activeDropdown, setActiveDropdown }) => {
  const isActive = activeDropdown === item.label;
  const hasDropdown = !!item.dropdown;

  const handleClick = (e) => {
    e.stopPropagation();
    if (hasDropdown) {
      setActiveDropdown(isActive ? null : item.label);
    }
  };

  return (
    <li className="relative">
      {item.path ? (
        <Link
          to={item.path}
          className="hover:text-yellow-300 font-semibold transition-colors"
        >
          {item.label}
        </Link>
      ) : (
        <div className="cursor-pointer" onClick={handleClick}>
          <div className="flex items-center hover:text-yellow-300 font-semibold transition-colors">
            {item.label}
            <ChevronDown
              className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                isActive ? "rotate-180" : ""
              }`}
            />
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 w-52 bg-[#E6F7E6] z-10 text-[#106700] rounded-lg shadow-lg p-3"
              >
                {item.dropdown.map((subItem) => (
                  <motion.li
                    key={subItem.path}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-2 hover:bg-[#b8e0b8] hover:text-white rounded-md transition-colors"
                  >
                    <Link to={subItem.path} onClick={() => setActiveDropdown(null)}>
                      {subItem.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      )}
    </li>
  );
};

export default NavigationItem;