import bg_image from "../assets/Untitled/Rectangle 2742.png";
import absolute_image from "../assets/AllImages/Dashboard Company.png";

const Start = () => {
  return (
    <div className="relative overflow-hidden md:overflow-visible md:px-2">
      <img
        src={bg_image}
        alt="Start Background"
        className="w-full h-[580px] md:h-full md:object-cover"
      />

      <div className="w-[100%] absolute inset-0 flex flex-col md:flex-row justify-center gap-6 md:justify-around items-center">
        <div className="w-[100%] md:w-[50%] flex flex-col items-start justify-center px-4 md:px-8">
          <h2 className="clashFont text-3xl md:text-5xl md:text-4xl font-bold text-white text-center md:text-left mt-10">
            Start posting jobs today
          </h2>
          <p className="w-full epilogueFont text-white text-center md:text-left text-lg my-6">
            Start posting jobs for only $10.
          </p>
          <div className="w-[100%] md:w-auto flex justify-center items-center">
            <button className="epilogueFontSemiBold  bg-white hover:bg-[#3b2fc9] hover:text-white text-[#4C3EE8] px-8 py-3 w-full md:w-auto transition-colors mx-auto block mt-4">
              Sign Up For Free
            </button>
          </div>
        </div>

        <div className="w-[100%] md:w-[50%] md:mt-[82px] md:pr-6">
          <img
            className="ml-[16px] w-[100%] md:w-[95%]"
            src={absolute_image}
            alt="Dashboard image Company"
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
