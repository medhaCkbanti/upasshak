import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DonateButton = ({ mobile, onClick }) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <Link to="/donation" onClick={onClick}>
      <div className={`${
        mobile ? "w-full h-12" : "w-[150px] h-14"
      } flex items-center justify-center border-2 border-[#ff9f0d] bg-[#ff9f0d] rounded-lg hover:bg-white transition-all`}>
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold group-hover:text-[#ff9f0d]">
            Donate Now
          </span>
          <div className={`bg-white ${
            mobile ? "w-6 h-6 text-[12px]" : "w-8 h-8 text-[14px]"
          } flex items-center justify-center rounded-lg text-orange-700`}>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default DonateButton;