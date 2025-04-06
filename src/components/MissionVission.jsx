import React from "react";

const MissionVission = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 py-6 mt-12">
        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row justify-center items-start py-10 gap-8">
          {/* Vision Heading */}
          <h1 className="w-full lg:w-[38%] text-3xl sm:text-4xl font-bold text-[#005069]">
            OUR VISION
          </h1>

          {/* Vision Content */}
          <div className="w-full lg:w-[58%]">
            <p className="mb-4 text-lg text-gray-600 sm:text-xl">
            We envision a Bandarban where every hill tribe child thrives as a torchbearer—Marma 
            doctors healing villages, Mro artists globalizing heritage, Chakma coders scripting equity.
            </p>

            <p className="mb-4 text-lg text-gray-600 sm:text-xl">
            Solar-powered campuses replace rented walls; alumni networks fund scholarships; dragon fruit profits fuel dreams. 
            Here, tradition dances with progress, classrooms echo with folktales and algorithms, and generations rise, 
            unbroken, from these hills to light Bangladesh’s tomorrow.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row justify-center items-start py-10 gap-8">
          {/* Mission Heading */}
          <h1 className="w-full lg:w-[38%] text-3xl sm:text-4xl font-bold text-[#005069]">
            OUR MISSION
          </h1>

          {/* Mission Content */}
          <div className="w-full lg:w-[58%]">
            <p className="mb-4 font-tajwal text-lg text-gray-600 sm:text-xl">
            Upasshak Hostel empowers Bandarban’s hill tribe youth through transformative education, merging rigorous academics with cultural pride.
            </p>

            <p className="mb-4 font-tajwal text-lg text-gray-600 sm:text-xl">
            We nurture scholars in safe residential hubs, where SSC success meets indigenous dance, coding labs coexist with dragon fruit farms, 
            and girls lead revolutions. By bridging ancestral wisdom and innovation, we cultivate leaders who honor their roots while 
            reshaping futures—proving poverty bows to courage, books, and blooming orchards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVission;