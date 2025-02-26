"use client";

import Link from "next/link";
import ScrollToTopButton from "../scrollToTopButton/ScrollToTopButton";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer"); // Подключаем переводы

  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-[1140px] mx-auto flex justify-between items-start px-5 relative">
        {/* Контейнер с колонками, сдвинутый левее */}
        <div className="flex justify-between w-full" style={{ marginLeft: "-10px" }}>
          {/* Наши соцсети */}
          <div className="text-left w-1/3">
            <h3 className="text-lg font-bold mb-3">{t("socials")}</h3>
            <p className="text-gray-300">@nsb.events</p>
            <p className="text-gray-300">+971 58 164 0910</p>
            <p className="text-gray-300">@nsbevents</p>
          </div>

          {/* Партнерам */}
          <div className="text-left w-1/3">
            <h3 className="text-lg font-bold mb-3">{t("partners")}</h3>
            <p className="text-gray-300">info@nsbevents.com</p>
            <p className="text-gray-300">+971 58 164 0910</p>
            <p className="text-gray-300">{t("presentation")}</p>
          </div>

          {/* Меню */}
          <div className="text-left w-1/3">
            <h3 className="text-lg font-bold mb-3">{t("menu")}</h3>
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

        {/* Кнопка "Наверх" - Сдвинута вправо на 20px */}
        <div className="absolute top-1/2 transform -translate-y-1/2" style={{ right: "-50px" }}>
          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
