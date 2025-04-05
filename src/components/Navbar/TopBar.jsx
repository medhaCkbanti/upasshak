import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const TopBar = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-[#EFFFF3] py-2"
  >
    <div className="container mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-40">
      <div className="flex space-x-4">
        {[Facebook, Twitter, Instagram].map((Icon, index) => (
          <motion.a
            key={index}
            href="#"
            whileHover={{ scale: 1.1, color: "#106700" }}
            className="transition-all"
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>

      <div className="hidden sm:flex space-x-6 text-sm">
        <ContactLink icon={Mail} text="info@upasshak.com" href="mailto:info@upasshak.com" />
        <ContactLink icon={Phone} text="+123 456 7890" href="tel:+1234567890" />
      </div>
    </div>
  </motion.div>
);

const ContactLink = ({ icon: Icon, text, href }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05, color: "#106700" }}
    className="flex items-center transition-all"
  >
    <Icon className="w-4 h-4 mr-2" />
    {text}
  </motion.a>
);

export default TopBar;