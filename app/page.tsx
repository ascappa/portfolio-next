import Image from "next/image";
import styles from "./home.module.css"

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <header className="flex justify-between">
      <Image src="/vercel.svg" width={100} height={24} alt="logo" />
      <nav>
        <ul className="flex list-none justify-evenly [&>li]:bg-red-600">
          <li>about</li>
          <li>blog</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}
