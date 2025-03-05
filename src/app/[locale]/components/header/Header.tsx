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
  };

  // Следит за сменой пути, закрывает мобильное меню
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-black py-4 px-4 sm:px-8 md:px-16 flex items-center justify-between">
      {/* Логотип, теперь ведет на главную */}
      <Link href="/" passHref>
        <Image
          src="/NSBdbrd.svg"
          alt="NSB Events"
          width={60}
          height={25}
          className="cursor-pointer sm:w-[80px] sm:h-[30px]"
        />
      </Link>

      {/* Переключатель языка (сдвинут вправо) */}
      <div className="ml-auto mr-6">
        <LanguageSwitcher />
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
    </header>
  );
}
