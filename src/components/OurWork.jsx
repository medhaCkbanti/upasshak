import img1 from "../assets/Numong.jpg";
import img2 from "../assets/13-12-2023.jpg";
import img3 from "../assets/activity-2-600x576.jpg";

const OurWork = () => {
  const workItems = [
    {
      title: "EDUCATION",
      description:
        "We are working on high-quality education, spreading awareness about the importance of education and enrolling as many children...",
      imgSrc: img1,
    },
    {
      title: "HEALTH CARE",
      description:
        "Deepalaya aims to restore healthcare as a universal right by targeting the grassroots. With this goal in mind, we launched the Community Health program...",
      imgSrc: img2,
    },
    {
      title: "WOMEN EMPOWERMENT",
      description:
        "Financial independence directly correlates to social independence. Thus, alleviation of poverty has the potential to positively impact women...",
      imgSrc: img3,
    },
  ];

  return (
    <div className="bg-white pt-10 pb-10 sm:pt-14 sm:pb-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-36">
        <div className="py-8 sm:py-12">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-red-500 mb-8 sm:mb-16">
            OUR WORK
          </h2>

          {/* Grid for Work Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-0 justify-items-center items-center">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-xs sm:max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 object-cover transition-all duration-500 ease-in-out hover:opacity-80"
                />

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 text-center">
                    {item.description}
                  </p>
                  <button className="text-red-500 font-medium hover:underline block mx-auto transition-all duration-500 ease-in-out hover:scale-105">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
