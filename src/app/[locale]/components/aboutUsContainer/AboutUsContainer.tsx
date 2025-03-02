import AboutUs from "../aboutUs/AboutUs";

const AboutUsContainer = () => {
  return (
    <div className="relative w-full flex justify-center items-center bg-[#111] py-6 sm:py-10 px-6 md:px-12">
      <div className="w-full max-w-screen-xl">
        <AboutUs />
      </div>
    </div>
  );
};

export default AboutUsContainer;
