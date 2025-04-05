import { motion } from "framer-motion";
import { FaSignOutAlt } from "react-icons/fa";

const LogoutButton = ({ onClick, mobile }) => (
  <motion.div whileHover={{ scale: mobile ? 1 : 1.05 }}>
    <button
      onClick={onClick}
      className={`${
        mobile ? "w-full h-12 px-4" : "w-[150px] h-14"
      } flex items-center justify-center border-2 border-red-500 bg-red-500 rounded-lg  transition-all`}
    >
      <div className="flex items-center gap-2 ">
        <span className="text-white font-semibold group-hover:text-red-500">
          Logout
        </span>
        <div className={`bg-white ${
          mobile ? "w-6 h-6 text-[12px]" : "w-8 h-8 text-[14px]"
        } flex items-center justify-center rounded-lg text-red-600`}>
          <FaSignOutAlt />
        </div>
      </div>
    </button>
  </motion.div>
);

export default LogoutButton;