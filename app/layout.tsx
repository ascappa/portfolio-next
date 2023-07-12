import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sphere } from "iconoir-react";
import Link from "next/link";
import { HelloLoader } from "./helloLoader";

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
  const word = "hello";
  const randomValues = Array.from(word).map((letter) => {
    return {
      letter: letter.toUpperCase(),
      animationParameters: {
        x: Math.random(),
        y: Math.random(),
        angle: Math.random(),
      },
    }
  });
  const transformValue = 400;
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center bg-zinc-50 p-8`}>
        <HelloLoader word={randomValues}>
          <div className="w-full max-w-5xl">
            <header className="flex items-center justify-between">
              <Sphere className="w-7 text-purple-600" />
              <nav>
                <ul className="flex justify-evenly gap-4">
                  {navItems.map((item) => (
                    <Link
                      href={`/${item}`}
                      key={item}
                      className="rounded border border-purple-200 bg-purple-100 p-1 px-2 font-semibold uppercase text-purple-600 transition-colors hover:bg-purple-600 hover:text-purple-100"
                    >
                      
                      <li>{item}</li>
                    </Link>
                  ))}
                </ul>
              </nav>
            </header>
            {children}
          </div>
        </HelloLoader>
      </body>
    </html>
  );
}
