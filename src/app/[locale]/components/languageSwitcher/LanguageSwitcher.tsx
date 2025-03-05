"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() ?? ""; // Устанавливаем пустую строку, если pathname null

  // Определяем текущий язык из пути
  const currentLocale = pathname.split("/")[1] || "en";

  // Функция смены языка
  const changeLanguage = (locale: string) => {
    if (locale !== currentLocale) {
      const newPath = `/${locale}${pathname.replace(/^\/[a-z]{2}/, "")}`;
      router.replace(newPath); // Меняем `push` на `replace`
    }
  };

  return (
    <div className="flex ml-2 sm:ml-4 bg-gray-700 rounded-[8px] p-[2px] sm:p-1">
      {" "}
      {/* Уменьшаем отступы на мобилках */}
      <button
        onClick={() => changeLanguage("ru")}
        className={`px-3 py-1 text-xs sm:text-sm rounded-[8px] transition ${
          currentLocale === "ru" ? "bg-yellow-400 text-black" : "bg-gray-500 text-white"
        }`}
      >
        рус
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 text-xs sm:text-sm rounded-[8px] transition ${
          currentLocale === "en" ? "bg-yellow-400 text-black" : "bg-gray-500 text-white"
        }`}
      >
        eng
      </button>
    </div>
  );
}
