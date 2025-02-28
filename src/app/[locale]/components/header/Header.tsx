"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Header() {
  const t = useTranslations("header"); // Подключаем переводы
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black py-4 px-4 sm:px-8 md:px-16 flex items-center justify-between">
      {/* Логотип */}
      <div className="flex items-center">
        <Image
          src="/NSBdbrd.svg"
          alt="NSB Events"
          width={60}
          height={25}
          className="sm:w-[80px] sm:h-[30px]"
        />
      </div>

      {/* Десктопная навигация */}
      <nav className="hidden md:flex space-x-6 text-white text-[16px] sm:text-[18px] font-medium">
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

      {/* Кнопка открытия мобильного меню */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Открыть меню"
      >
        ☰
      </button>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col items-center justify-center text-white">
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            ✕
          </button>
          <nav className="flex flex-col space-y-6 text-2xl">
            <Link
              href="#soon"
              className="hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("soon")}
            </Link>
            <Link
              href="#past"
              className="hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("pastEvents")}
            </Link>
            <Link
              href="#about"
              className="hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("aboutUs")}
            </Link>
            <Link
              href="#contacts"
              className="hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contacts")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
