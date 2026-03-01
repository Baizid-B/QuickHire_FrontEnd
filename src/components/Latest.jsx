import { FaArrowRight } from "react-icons/fa6";
import companyLogo from "../assets/Company Logo/Company Logo.svg"
import bgImages from "../assets/bg-image/Desktop.svg"
import rectangleImages from "../assets/AllImages/Rectangle top.png"

const Latest = () => {
  return (
    <div className="px-4 md:px-10 pt-18 relative">
      <img src={bgImages} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover bg-top z-[-1]" />
      <img src={rectangleImages} alt="Background" className="absolute top-0 left-0 w-[150px] md:w-[200px]  z-[-1]" />

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mt-5 mb-10 ">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold clashFont text-[#25324B] leading-tight">
            Latest <span className="text-[#26A4FF] relative"> jobs open</span>
          </h2>
        </div>

        <a
          href="#"
          className="group flex items-center gap-2 text-[#4C3EE8] font-semibold text-sm hidden md:flex"
        >
          Show all jobs
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Latest Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5 pb-16">

        {/* latest card-1 */}
        <div className="py-5 px-5 md:py-6 md:px-10 bg-white flex flex-col md:flex-row items-top gap-6">
            <img className="w-16 h-16" src={companyLogo} alt="Company Logo" />

            <div className="space-y-2">
                <p className="epilogueFontSemiBold text-lg">Social Media Assistant</p>

                <div className="flex justify-start items-center gap-2">
                    <p className="text-[16px] text-[#515B6F]">Nomad</p>
                    <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                    <p className="text-[16px] text-[#515B6F]">Paris, France</p>
                </div>

                <div className="flex justify-start items-center gap-2 mt-4">
                    <div className="secondaryColor">Full Time</div>
                    <div className="w-0.5 h-8 bg-[#D6DDEB]"></div>
                    <div className="latestPrimaryColor">Full Time</div>
                    <div className="latestSecondaryColor">Full Time</div>
                </div>
            </div>
        </div>

        {/* latest card-1 */}
        <div className="py-5 px-5 md:py-6 md:px-10 bg-white flex flex-col md:flex-row items-top gap-6">
            <img className="w-16 h-16" src={companyLogo} alt="Company Logo" />

            <div className="space-y-2">
                <p className="epilogueFontSemiBold text-lg">Social Media Assistant</p>

                <div className="flex justify-start items-center gap-2">
                    <p className="text-[16px] text-[#515B6F]">Nomad</p>
                    <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                    <p className="text-[16px] text-[#515B6F]">Paris, France</p>
                </div>

                <div className="flex justify-start items-center gap-2 mt-4">
                    <div className="secondaryColor">Full Time</div>
                    <div className="w-0.5 h-8 bg-[#D6DDEB]"></div>
                    <div className="latestPrimaryColor">Full Time</div>
                    <div className="latestSecondaryColor">Full Time</div>
                </div>
            </div>
        </div>

        {/* latest card-1 */}
        <div className="py-5 px-5 md:py-6 md:px-10 bg-white flex flex-col md:flex-row items-top gap-6">
            <img className="w-16 h-16" src={companyLogo} alt="Company Logo" />

            <div className="space-y-2">
                <p className="epilogueFontSemiBold text-lg">Social Media Assistant</p>

                <div className="flex justify-start items-center gap-2">
                    <p className="text-[16px] text-[#515B6F]">Nomad</p>
                    <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                    <p className="text-[16px] text-[#515B6F]">Paris, France</p>
                </div>

                <div className="flex justify-start items-center gap-2 mt-4">
                    <div className="secondaryColor">Full Time</div>
                    <div className="w-0.5 h-8 bg-[#D6DDEB]"></div>
                    <div className="latestPrimaryColor">Full Time</div>
                    <div className="latestSecondaryColor">Full Time</div>
                </div>
            </div>
        </div>

        {/* latest card-1 */}
        <div className="py-5 px-5 md:py-6 md:px-10 bg-white flex flex-col md:flex-row items-top gap-6">
            <img className="w-16 h-16" src={companyLogo} alt="Company Logo" />

            <div className="space-y-2">
                <p className="epilogueFontSemiBold text-lg">Social Media Assistant</p>

                <div className="flex justify-start items-center gap-2">
                    <p className="text-[16px] text-[#515B6F]">Nomad</p>
                    <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                    <p className="text-[16px] text-[#515B6F]">Paris, France</p>
                </div>

                <div className="flex justify-start items-center gap-2 mt-4">
                    <div className="secondaryColor">Full Time</div>
                    <div className="w-0.5 h-8 bg-[#D6DDEB]"></div>
                    <div className="latestPrimaryColor">Full Time</div>
                    <div className="latestSecondaryColor">Full Time</div>
                </div>
            </div>
        </div>

        {/* latest card-1 */}
        <div className="py-5 px-5 md:py-6 md:px-10 bg-white flex flex-col md:flex-row items-top gap-6">
            <img className="w-16 h-16" src={companyLogo} alt="Company Logo" />

            <div className="space-y-2">
                <p className="epilogueFontSemiBold text-lg">Social Media Assistant</p>

                <div className="flex justify-start items-center gap-2">
                    <p className="text-[16px] text-[#515B6F]">Nomad</p>
                    <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                    <p className="text-[16px] text-[#515B6F]">Paris, France</p>
                </div>

                <div className="flex justify-start items-center gap-2 mt-4">
                    <div className="secondaryColor">Full Time</div>
                    <div className="w-0.5 h-8 bg-[#D6DDEB]"></div>
                    <div className="latestPrimaryColor">Full Time</div>
                    <div className="latestSecondaryColor">Full Time</div>
                </div>
            </div>
        </div>

        {/* latest card-1 */}
        <div className="py-5 px-5 md:py-6 md:px-10 bg-white flex flex-col md:flex-row items-top gap-6">
            <img className="w-16 h-16" src={companyLogo} alt="Company Logo" />

            <div className="space-y-2">
                <p className="epilogueFontSemiBold text-lg">Social Media Assistant</p>

                <div className="flex justify-start items-center gap-2">
                    <p className="text-[16px] text-[#515B6F]">Nomad</p>
                    <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                    <p className="text-[16px] text-[#515B6F]">Paris, France</p>
                </div>

                <div className="flex justify-start items-center gap-2 mt-4">
                    <div className="secondaryColor">Full Time</div>
                    <div className="w-0.5 h-8 bg-[#D6DDEB]"></div>
                    <div className="latestPrimaryColor">Full Time</div>
                    <div className="latestSecondaryColor">Full Time</div>
                </div>
            </div>
        </div>

        {/* latest card-1 */}
        <div className="py-5 px-5 md:py-6 md:px-10 bg-white flex flex-col md:flex-row items-top gap-6">
            <img className="w-16 h-16" src={companyLogo} alt="Company Logo" />

            <div className="space-y-2">
                <p className="epilogueFontSemiBold text-lg">Social Media Assistant</p>

                <div className="flex justify-start items-center gap-2">
                    <p className="text-[16px] text-[#515B6F]">Nomad</p>
                    <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                    <p className="text-[16px] text-[#515B6F]">Paris, France</p>
                </div>

                <div className="flex justify-start items-center gap-2 mt-4">
                    <div className="secondaryColor">Full Time</div>
                    <div className="w-0.5 h-8 bg-[#D6DDEB]"></div>
                    <div className="latestPrimaryColor">Full Time</div>
                    <div className="latestSecondaryColor">Full Time</div>
                </div>
            </div>
        </div>

        {/* latest card-1 */}
        <div className="py-5 px-5 md:py-6 md:px-10 bg-white flex flex-col md:flex-row items-top gap-6">
            <img className="w-16 h-16" src={companyLogo} alt="Company Logo" />

            <div className="space-y-2">
                <p className="epilogueFontSemiBold text-lg">Social Media Assistant</p>

                <div className="flex justify-start items-center gap-2">
                    <p className="text-[16px] text-[#515B6F]">Nomad</p>
                    <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                    <p className="text-[16px] text-[#515B6F]">Paris, France</p>
                </div>

                <div className="flex justify-start items-center gap-2 mt-4">
                    <div className="secondaryColor">Full Time</div>
                    <div className="w-0.5 h-8 bg-[#D6DDEB]"></div>
                    <div className="latestPrimaryColor">Full Time</div>
                    <div className="latestSecondaryColor">Full Time</div>
                </div>
            </div>
        </div>

        

      </div>


      <div className="my-6">
        <a
          href="#"
          className="group flex items-center gap-2 text-[#4C3EE8] font-semibold text-sm flex md:hidden"
        >
          Show all jobs
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

    </div>
  );
};

export default Latest;
