import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "./components/header/Header";
import { Roboto } from "next/font/google";
import { Suspense } from "react";

const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "700"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Проверяем, что язык допустимый
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Загружаем переводы
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages} key={locale}>
          <Header />
          <Suspense fallback={<div className="h-screen w-full bg-black"></div>}>
            {children}
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
