import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import logoImage from "../assets/FooterLogo/Footer_logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#202430] px-5">
      <footer className="max-w-298 mx-auto w-full footer sm:footer-horizontal text-white py-18 -mt-4.5 -mb-[50] ">
        
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-10">
          <div className="md:w-[35%]">
            <nav className="flex flex-col gap-5">
              <img src={logoImage} alt="QuickHire Logo" className="w-32 h-12" />
              <p className="link link-hover">Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
            </nav>
          </div>

          <div className="md:w-[65%] grid grid-cols-2 md:flex md:flex-row gap-10 md:gap-20">
            <nav className=" flex flex-col gap-5">
              <h6 className="text-white epilogueFontSemiBold text-lg">About</h6>
              <a className="link link-hover text-[#D6DDEB]">Companies</a>
              <a className="link link-hover text-[#D6DDEB]">Pricing</a>
              <a className="link link-hover text-[#D6DDEB]">Terms</a>
              <a className="link link-hover text-[#D6DDEB]">Advice</a>
              <a className="link link-hover text-[#D6DDEB]">Privacy Policy</a>
            </nav>

            <nav className="flex flex-col gap-5">
              <h6 className="text-white epilogueFontSemiBold text-lg">Resources</h6>
              <a className="link link-hover text-[#D6DDEB]">Help Docs</a>
              <a className="link link-hover text-[#D6DDEB]">Guide</a>
              <a className="link link-hover text-[#D6DDEB]">Updates</a>
              <a className="link link-hover text-[#D6DDEB]">Contact Us</a>
            </nav>

            <form className="space-y-5 ">
              <h6 className="text-white epilogueFontSemiBold text-lg">Get job notifications</h6>
              <p>The latest job news, articles, sent to your inbox weekly.</p>
              <fieldset className="w-80">
                <div className="join gap-5">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered h-12.5 join-item rounded-none text-gray-500"
                  />
                  <button className="btn btn-primary join-item h-12.5 rounded-none">Subscribe</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>

      </footer>

      <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t-2 border-[#2f2f31] ">
        <p className="text-center text-gray-500 text-sm py-4">
          2021 @ QuickHire. All rights reserved.
        </p>

        <div className="flex justify-center space-x-4">
          <div className="py-2 bg-[#686868] rounded-full cursor-pointer">
            <FaFacebookF className="text-white text-sm mx-2"></FaFacebookF>
          </div>

          <div className="py-2 bg-[#686868] rounded-full cursor-pointer">
            <FaInstagram className="text-white text-sm mx-2"></FaInstagram>
          </div>

          <div className="py-2 bg-[#686868] rounded-full cursor-pointer">
            <FaDribbble className="text-white text-sm mx-2"></FaDribbble>
          </div>

          <div className="py-2 bg-[#686868] rounded-full cursor-pointer">
            <FaLinkedinIn className="text-white text-sm mx-2"></FaLinkedinIn>
          </div>

          <div className="py-2 bg-[#686868] rounded-full cursor-pointer">
            <FaTwitter className="text-white text-sm mx-2"></FaTwitter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
