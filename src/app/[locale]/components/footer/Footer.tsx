"use client";

import Link from "next/link";
import ScrollToTopButton from "../scrollToTopButton/ScrollToTopButton";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer"); // Подключаем переводы

  return (
    <footer className="bg-black text-white py-6 px-4 sm:py-10 sm:px-5">
      <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row justify-between items-start relative">
        {/* Контейнер с колонками */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full sm:ml-[-10px]">
          {/* Наши соцсети */}
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3">{t("socials")}</h3>
            <p className="text-gray-300">@nsb.events</p>
            <p className="text-gray-300">+971 58 164 0910</p>
            <p className="text-gray-300">@nsbevents</p>
          </div>

          {/* Партнерам */}
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3">{t("partners")}</h3>
            <p className="text-gray-300">info@nsbevents.com</p>
            <p className="text-gray-300">+971 58 164 0910</p>
            <p className="text-gray-300">{t("presentation")}</p>
          </div>

          {/* Меню */}
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3">{t("menu")}</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#soon" className="text-gray-300 hover:text-white">
                  {t("soon")}
                </Link>
              </li>
              <li>
                <Link href="#past-events" className="text-gray-300 hover:text-white">
                  {t("pastEvents")}
                </Link>
              </li>
              <li>
                <Link href="#about-us" className="text-gray-300 hover:text-white">
                  {t("aboutUs")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Кнопка "Наверх" */}
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 sm:right-[-50px]">
          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
