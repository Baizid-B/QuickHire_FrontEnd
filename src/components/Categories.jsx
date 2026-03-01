import { FaArrowRight } from "react-icons/fa6";
import {
  PencilRuler,
  BarChart2,
  Megaphone,
  Wallet,
  Monitor,
  Code2,
  Briefcase,
  Users,
} from "lucide-react";

const Categories = () => {
  return (
    <div className="my-18 px-5">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-10 ">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold clashFont text-[#25324B] leading-tight">
            Explore by <span className="text-[#26A4FF] relative">category</span>
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

      {/* Categories card */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* card-1 */}
        <div className="p-8 flex flex-col border border-[#D6DDEB] hover:bg-[#4640DE] group cursor-pointer hover:duration-300">
          <PencilRuler className="w-12 h-12 mb-8 text-[#4C3EE8] group-hover:text-white" />
          <p className="text-[#25324B] clashFont text-2xl mb-3 group-hover:text-white">
            Design
          </p>
          <p className="text-[#7C8493] text-lg group-hover:text-white">
            235 jobs available
            <FaArrowRight className="text-[#25324B] inline-block ml-2 group-hover:text-white" />
          </p>
        </div>

        {/* card-2 */}
        <div className="p-8 flex flex-col border border-[#D6DDEB] hover:bg-[#4640DE] group cursor-pointer hover:duration-300">
          <BarChart2 className="w-12 h-12 mb-8 text-[#4C3EE8] group-hover:text-white" />
          <p className="text-[#25324B] clashFont text-2xl mb-3 group-hover:text-white">
            Sales
          </p>
          <p className="text-[#7C8493] text-lg group-hover:text-white">
            756 jobs available
            <FaArrowRight className="text-[#25324B] inline-block ml-2 group-hover:text-white" />
          </p>
        </div>

        {/* card-3 */}
        <div className="p-8 flex flex-col border border-[#D6DDEB] hover:bg-[#4640DE] group cursor-pointer hover:duration-300">
          <Megaphone className="w-12 h-12 mb-8 text-[#4C3EE8] group-hover:text-white" />
          <p className="text-[#25324B] clashFont text-2xl mb-3 group-hover:text-white">
            Marketing
          </p>
          <p className="text-[#7C8493] text-lg group-hover:text-white">
            140 jobs available
            <FaArrowRight className="text-[#25324B] inline-block ml-2 group-hover:text-white" />
          </p>
        </div>

        {/* card-4 */}
        <div className="p-8 flex flex-col border border-[#D6DDEB] hover:bg-[#4640DE] group cursor-pointer hover:duration-300">
          <Wallet className="w-12 h-12 mb-8 text-[#4C3EE8] group-hover:text-white" />
          <p className="text-[#25324B] clashFont text-2xl mb-3 group-hover:text-white">
            Finance
          </p>
          <p className="text-[#7C8493] text-lg group-hover:text-white">
            325 jobs available
            <FaArrowRight className="text-[#25324B] inline-block ml-2 group-hover:text-white" />
          </p>
        </div>

        {/* card-5 */}
        <div className="p-8 flex flex-col border border-[#D6DDEB] hover:bg-[#4640DE] group cursor-pointer hover:duration-300">
          <Monitor className="w-12 h-12 mb-8 text-[#4C3EE8] group-hover:text-white" />
          <p className="text-[#25324B] clashFont text-2xl mb-3 group-hover:text-white">
            Technology
          </p>
          <p className="text-[#7C8493] text-lg group-hover:text-white">
            436 jobs available
            <FaArrowRight className="text-[#25324B] inline-block ml-2 group-hover:text-white" />
          </p>
        </div>

        {/* card-6 */}
        <div className="p-8 flex flex-col border border-[#D6DDEB] hover:bg-[#4640DE] group cursor-pointer hover:duration-300">
          <Code2 className="w-12 h-12 mb-8 text-[#4C3EE8] group-hover:text-white" />
          <p className="text-[#25324B] clashFont text-2xl mb-3 group-hover:text-white">
            Engineering
          </p>
          <p className="text-[#7C8493] text-lg group-hover:text-white">
            542 jobs available
            <FaArrowRight className="text-[#25324B] inline-block ml-2 group-hover:text-white" />
          </p>
        </div>

        {/* card-7 */}
        <div className="p-8 flex flex-col border border-[#D6DDEB] hover:bg-[#4640DE] group cursor-pointer hover:duration-300">
          <Briefcase className="w-12 h-12 mb-8 text-[#4C3EE8] group-hover:text-white" />
          <p className="text-[#25324B] clashFont text-2xl mb-3 group-hover:text-white">
            Business
          </p>
          <p className="text-[#7C8493] text-lg group-hover:text-white">
            211 jobs available
            <FaArrowRight className="text-[#25324B] inline-block ml-2 group-hover:text-white" />
          </p>
        </div>

        {/* card-7 */}
        <div className="p-8 flex flex-col border border-[#D6DDEB] hover:bg-[#4640DE] group cursor-pointer hover:duration-300">
          <Users className="w-12 h-12 mb-8 text-[#4C3EE8] group-hover:text-white" />
          <p className="text-[#25324B] clashFont text-2xl mb-3 group-hover:text-white">
            Human Resource
          </p>
          <p className="text-[#7C8493] text-lg group-hover:text-white">
            346 jobs available
            <FaArrowRight className="text-[#25324B] inline-block ml-2 group-hover:text-white" />
          </p>
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

export default Categories;
