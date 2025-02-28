import AboutUs from "../aboutUs/AboutUs";

const AboutUsContainer = () => {
  return (
    <div className="relative w-full flex justify-center items-center bg-[#111] py-[20px] px-4 sm:py-[30px]">
      <div className="w-full max-w-[1440px] px-4 sm:px-10">
        <AboutUs />
      </div>
    </div>
  );
};

export default AboutUsContainer;
