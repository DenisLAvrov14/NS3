"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#FC7357] py-4 px-6 md:px-12 flex items-center justify-between">
    <div className="flex items-center space-x-4 pl-6 md:pl-12">
      <Image src="/NSBdbrd.svg" alt="NSB Events" width={90} height={30} />
      <h1 className="text-black text-xl font-bold">ИВЕНТЫ В ДУБАИ</h1>
    </div>
  </header>  
  );
}
