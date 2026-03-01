import amdLogo from "../assets/companis_logo/amd-logo-1.svg";
import intelLogo from "../assets/companis_logo/intel-3.svg";
import talkitLogo from "../assets/companis_logo/talkit 1.svg";
import teslaLogo from "../assets/companis_logo/tesla-9 1.svg";
import vodafoneLogo from "../assets/companis_logo/vodafone-2017-logo.svg";

const logos = [
  { src: vodafoneLogo, alt: "Vodafone" },
  { src: intelLogo, alt: "Intel" },
  { src: teslaLogo, alt: "Tesla" },
  { src: amdLogo, alt: "AMD" },
  { src: talkitLogo, alt: "Talkit" },
];

const CompaniesLogo = () => {
  return (
    <div className="flex flex-col gap-8 px-5">
      <p className="text-[#202430] text-[18px] epilogueFont mb-7 tracking-wide">
        Companies we helped grow
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-5 md:flex-wrap justify-between items-center gap-[40px] pb-9">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="w-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesLogo;