"use client";

import Image from "next/image";

const ScrollToTopButton = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-[80px] h-[120px] sm:w-[113px] sm:h-[172px] flex flex-col items-center justify-center bg-transparent mr-4 sm:mr-10"
    >
      <Image
        src="/UpButton.svg"
        alt="Наверх"
        width={80}
        height={110}
        className="w-[60px] h-[80px] sm:w-[80px] sm:h-[110px]"
      />
    </button>
  );
};

export default ScrollToTopButton;
