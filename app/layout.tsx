import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sphere } from "iconoir-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My first nextjs project",
  description: "Trying out nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = ["about", "blog", "contact"];
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center p-8`}>
        {<div className="w-full max-w-5xl">
          <header className="flex items-center justify-between">
            <Sphere className="w-7 text-purple-600" />
            <nav>
              <ul className="flex justify-evenly gap-4">
                {navItems.map((item) => (
                  <Link
                    href={`/${item}`}
                    key={item}
                    className="rounded bg-purple-100 p-1 px-2 font-semibold uppercase text-purple-600 transition-colors hover:bg-purple-600 hover:text-purple-100"
                  >
                    {item}
                  </Link>
                ))}
              </ul>
            </nav>
          </header>
          {children}
        </div>}
      </body>
    </html>
  );
}
