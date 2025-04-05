import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import MissionVission from "../components/MissionVission";
import img1 from "../assets/Home_02.jpg"

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
      animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      className="aboutUs bg-gray-50 min-h-screen py-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-40 mt-10">
        {/* Flex Container for Text and Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col lg:flex-row gap-10"
        >
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}

              className="text-3xl sm:text-4xl font-bold mb-6 font-merriweather"
            >
              ABOUT <br /> UPASSHAK
            </motion.h1>

            {/* Fading Text Paragraphs */}
            {[
              "Deepalaya started in 1979 with 7 founding members with the objective of educating not-so-privileged children. Over the years, our focus has expanded from providing education only to children to helping underprivileged women, youth, and children become self-reliant through education and vocational training.",
              "Deepalaya is the largest operational NGO that has established projects across Delhi, Haryana, Uttar Pradesh, Uttarakhand, Punjab, Kerala, Andhra Pradesh, Maharashtra, and Telangana.",
              "We have been working for four decades and contributing to the crusade against illiteracy. Every child deserves a chance is what Deepalaya strongly believes in and has been working towards it.",
              "Over the years, Deepalaya has established several projects in the areas of Education (Formal/Non-Formal/Remedial), Women Empowerment (Reproductive Health, Self Help Groups, Livelihood, Microfinance), Institutional Care, Community Health, ECCD, Vocational Training, Environmental Sustainability, and Differently Abled. These projects are operational across India.",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }} // Staggered delay
                viewport={{ once: true, amount: 0.5 }}
                className="mb-4  text-lg text-gray-600 sm:text-xl"
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="lg:w-1/2"
          >
            <img
              src={img1}
              alt="About Upasshak"
              className="w-full h-auto max-h-[600px] rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Additional Fading Text Content */}
        {[
          "Deepalaya has reached out to more than 3,78,145 children, given vocational training to 24,870 adults, and helped more than 1,616 Self Help Groups with 17,892 women who have established more than 8,431 micro-enterprises and many more.",
          "Deepalaya’s growth, however, has not been a solitary one. The organisation takes the initiative to collaborate with the government and other agencies to make a meaningful intervention in the policymaking process of the State.",
        ].map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }} // Staggered delay
            viewport={{ once: true, amount: 0.5 }}
            className="mb-4 font-tajwal text-lg text-gray-600 sm:text-xl"
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* MissionVission Component */}
      <MissionVission />
    </motion.div>
  );
};

export default AboutUs;