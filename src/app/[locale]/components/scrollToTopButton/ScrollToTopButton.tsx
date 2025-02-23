"use client";

import Image from "next/image";

const ScrollToTopButton = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-[113px] h-[172px] flex flex-col items-center justify-center bg-transparent mr-10"
    >
      <Image src="/UpButton.svg" alt="Наверх" width={80} height={110} />
    </button>
  );
};

export default ScrollToTopButton;
