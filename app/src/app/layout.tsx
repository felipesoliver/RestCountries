import classNames from "classnames";
import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "~/src/styles/globals.css";

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: "Countries Rest API",
  description: "Web app for global countries consults",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(roboto.className)}>{children}</body>
    </html>
  );
}
