import classNames from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

dayjs.locale("pt-br");
dayjs.extend(relativeTime);

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "BookWise",
  authors: {
    url: "https://github.com/wfl-junior",
    name: "Wallace Júnior | wflj1997@gmail.com",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body
        className={classNames(
          "flex min-h-screen flex-col overflow-x-hidden bg-app-gray-800 p-5 font-sans text-app-gray-100 scrollbar-thin scrollbar-track-app-gray-600 scrollbar-thumb-app-gray-700",
          nunitoSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
