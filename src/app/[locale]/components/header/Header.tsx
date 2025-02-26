"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("header"); // Подключаем переводы

  return (
    <header className="bg-black py-4 px-8 md:px-16 flex items-center justify-between">
      {/* Логотип */}
      <div className="flex items-center">
        <Image src="/NSBdbrd.svg" alt="NSB Events" width={80} height={30} />
      </div>

      {/* Навигация */}
      <nav className="flex space-x-8 text-white text-[18px] font-medium">
        <Link href="#soon" className="hover:text-gray-400 transition">
          {t("soon")}
        </Link>
        <Link href="#past" className="hover:text-gray-400 transition">
          {t("pastEvents")}
        </Link>
        <Link href="#about" className="hover:text-gray-400 transition">
          {t("aboutUs")}
        </Link>
        <Link href="#contacts" className="hover:text-gray-400 transition">
          {t("contacts")}
        </Link>
      </nav>
    </header>
  );
}
