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
              A society based on legitimate rights, equity, justice, honesty,
              social sensitivity, and a culture of service in which all are
              self-reliant.
            </p>

            <p className="mb-4 text-lg text-gray-600 sm:text-xl">
              Deepalaya’s focus and sole reason for existence is the child,
              especially the girl child, street child, and disabled child. The
              family of the child is the medium through which the development
              takes place. Organisation and sensitisation of the community is
              the approach through which empowerment, capacity building, and
              social transformation are attempted.
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
              A society based on legitimate rights, equity, justice, honesty,
              social sensitivity, and a culture of service in which all are
              self-reliant.
            </p>

            <p className="mb-4 font-tajwal text-lg text-gray-600 sm:text-xl">
              Deepalaya’s focus and sole reason for existence is the child,
              especially the girl child, street child, and disabled child. The
              family of the child is the medium through which the development
              takes place. Organisation and sensitisation of the community is
              the approach through which empowerment, capacity building, and
              social transformation are attempted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVission;