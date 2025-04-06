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
               ` Upasshak Hostel, nestled in the heart of Bandarban Hill District, Bangladesh, stands as a transformative sanctuary for hill tribe 
                children whose dreams of education were once hindered by poverty, geography, and cultural marginalization. Founded in January 2009 
                by Humanitarian Foundation (HF) in partnership with CO-OPERAID Switzerland, Upasshak—meaning "guardian" in the Chakma language—embodies 
                its name by safeguarding the futures of indigenous children from the Chakma, Marma, Mro, Tripura, and other ethnic communities. 
                Over the past 15 years, this initiative has grown from a modest dormitory into a holistic educational ecosystem, blending academic rigor, 
                cultural preservation, and sustainable development to break the cycle of intergenerational poverty.`
     
          
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
               `The genesis of Upasshak lies in the stark realities faced by hill tribe families. Bandarban’s rugged terrain and remoteness 
               isolate villages, leaving schools under-resourced and children—especially girls—vulnerable to early dropout due to economic pressures or 
               societal norms. Recognizing education as the cornerstone of empowerment, HF envisioned a residential program that not only provided 
               shelter but also nurtured academic excellence, life skills, and pride in indigenous heritage. Today, Upasshak supports 75 students 
               (28 boys, 48 girls) from 30 villages, primarily in Rowa Kyang, offering them a pathway to secondary education while addressing 
               systemic barriers like language gaps, financial instability, and lack of mentorship. 
               At its core, Upasshak is a rebellion against inequality. The hostel operates two facilities—a boys’ hostel and a girls’ hostel—where students from grades 6 to 10 live, study, and grow under the guidance of dedicated caregivers, teachers, and staff. The curriculum extends far beyond textbooks:

    Academic Support: Students receive daily tutoring, SSC exam preparation, and access to computer labs (10 computers across hostels) where they learn coding, graphic design, and software development. In 2024, 13 of 16 SSC candidates passed, continuing Upasshak’s legacy of 83 SSC graduates since 2009.

    Cultural Roots: Dance and music lessons in traditional Marma, Chakma, and Mro styles ensure students stay connected to their heritage. Festivals like Sangrai (Buddhist New Year) and International Mother Language Day are celebrated vibrantly, fostering pride in their identity.

    Life Skills: Workshops on stress management, financial literacy, and moral education prepare students for adulthood. In 2024, a 4-day life skills training covered empathy, critical thinking, and goal-setting, equipping children to navigate challenges beyond the classroom.

The hostel’s impact is amplified by its emphasis on gender equity. Girls, who once faced societal pressure to prioritize household duties over schooling, now comprise nearly 50% of the student body. Six girls received scholarships from the Prime Minister’s Education Assistance Trust in 2023, and initiatives like "Promotion of Girls" sessions empower them to pursue careers in medicine, engineering, and civil service`
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