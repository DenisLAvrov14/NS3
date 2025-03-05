"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Функция для плавного скролла
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Закрываем мобильное меню при выборе
  };

  // Следит за сменой пути, закрывает мобильное меню
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-black py-4 px-4 sm:px-8 md:px-16 flex items-center justify-between">
      {/* Логотип */}
      <Link href="/" passHref>
        <Image
          src="/NSBdbrd.svg"
          alt="NSB Events"
          width={60}
          height={25}
          className="cursor-pointer sm:w-[80px] sm:h-[30px]"
        />
      </Link>

      {/* Контейнер с языковым переключателем и бургер-меню */}
      <div className="flex items-center gap-4">
        {/* Переключатель языка */}
        <div className="hidden sm:block">
          <LanguageSwitcher />
        </div>

        {/* Кнопка открытия мобильного меню */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Открыть меню"
        >
          ☰
        </button>
      </div>

      {/* Десктопная навигация */}
      <nav className="hidden md:flex space-x-6 text-white text-[16px] sm:text-[18px] font-medium">
        <button onClick={() => scrollToSection("soon")} className="hover:text-gray-400 transition">
          {t("soon")}
        </button>
        <button onClick={() => scrollToSection("past")} className="hover:text-gray-400 transition">
          {t("pastEvents")}
        </button>
        <button onClick={() => scrollToSection("about")} className="hover:text-gray-400 transition">
          {t("aboutUs")}
        </button>
        <button
          onClick={() => scrollToSection("contacts")}
          className="hover:text-gray-400 transition"
        >
          {t("contacts")}
        </button>
      </nav>

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
            <button
              onClick={() => scrollToSection("soon")}
              className="hover:text-gray-400 transition"
            >
              {t("soon")}
            </button>
            <button
              onClick={() => scrollToSection("past")}
              className="hover:text-gray-400 transition"
            >
              {t("pastEvents")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-gray-400 transition"
            >
              {t("aboutUs")}
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="hover:text-gray-400 transition"
            >
              {t("contacts")}
            </button>
          </nav>
          {/* Переключатель языка в мобильном меню */}
          <div className="mt-6">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
