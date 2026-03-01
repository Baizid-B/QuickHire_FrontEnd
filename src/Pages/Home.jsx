import designImage from "../assets/Group.png";
import heroImaeg from "../assets/Hero_Right_image/Hero_image.png";
import heroPatten from "../assets/Hero_Right_image/Pattern.png";
import rectangleImage from "../assets/Rectangle2732.png";
import { FiSearch, FiMapPin } from "react-icons/fi";
import CompaniesLogo from "../components/ComaniesLogo";
import Categories from "../components/Categories";
import Start from "../components/Start";

const Home = () => {
  return (
    <>
    {/* Hero Section */}
    <div className="mt-14 mb-20 relative overflow-hidden min-h-[650px] px-5">
      {/* Background Graphic placeholder */}
      <div className="absolute -right-10 top-90 h-62.5  md:-right-30 md:-top-16.5 md:w-[90%]">
        <img src={heroPatten} alt="Hero Pattern" />
      </div>

      <div className="flex flex-col lg:flex-row items-top justify-between gap-12 relative ">
        {/* Left Content */}
        <div className="flex-1 space-y-10">
          <h1 className="text-5xl clashFont lg:text-7xl font-bold text-[#1F2937] leading-[1.1]">
            Discover <br />
            more than <br />
            <span className="text-[#00B4FF] relative inline-block">
              5000+ Jobs
              {/* Replace with actual squiggly line image */}
              <img
                className="w-112.5"
                src={designImage}
                alt="Hero Section design"
              />
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          {/* Search Box */}
          <div className="w-full md:w-200 absolute z-90 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col md:flex-row items-center gap-2 ">
            <div className="flex items-center gap-2 flex-1 px-4 py-2 w-full md:w-auto md:border-r border-gray-200">
              <FiSearch className="text-[#25324B] text-2xl" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="bg-transparent py-2.25 outline-none w-full text-gray-700 placeholder-gray-400 border-b-[1px] border-[#7C8493]"
              />
            </div>
            <div className="flex items-center gap-2 flex-1 px-4 py-2 w-full md:w-auto">
              <FiMapPin className="text-[#25324B] text-2xl" />
              <select defaultValue="Pick a color" className=" focus:outline-none bg-transparent py-2.25 w-full text-gray-700 placeholder-gray-400 border-b-[1px] border-[#7C8493]">
                <option disabled={false}>Select location</option>
                <option>Florence, Italy</option>
                <option>New York, USA</option>
                <option>London, UK</option>
              </select>
            </div>

            <button className="bg-[#4C3EE8] hover:bg-[#3b2fc9] text-white px-8 py-3 w-full md:w-auto font-medium transition-colors">
              Search my job
            </button>
          </div>

          <p className="text-sm absolute top-150 md:bottom-36 lg:bottom-28 text-gray-500">
            Popular :{" "}
            <span className="font-medium text-gray-700">
              UI Designer, UX Researcher, Android, Admin
            </span>
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 hidden md:flex justify-center lg:justify-end relative">
          {/* Use your provided man pointing image here */}
          <img
            src={heroImaeg}
            alt="Happy Man Pointing"
            className="shape w-full max-w-125 object-cover rounded-full lg:rounded-none z-10"
          />
          <img
            src={rectangleImage}
            alt="Rectangle Image"
            className="absolute bottom-0 w-[58%] z-10"
          />
        </div>
      </div>
    </div>

    {/* Companies Section */}
    <CompaniesLogo></CompaniesLogo>

    {/* Categories Section */}
    <Categories></Categories>

    {/* Start Section */}
    <Start></Start>
    </>
  );
};

export default Home;
