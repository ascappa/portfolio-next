import Image from "next/image";
import uwu from "./assets/header.svg";
import leaf from "./leaf.jpeg";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="my-12 bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-4xl font-extrabold uppercase text-transparent inline-block">
        Welcome to my website!
      </h1>
      <p className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
        repudiandae beatae molestias minus minima ratione iusto recusandae, ipsa
        quibusdam obcaecati optio veniam, dolore deserunt quia fugiat. Iusto eos
        quam optio!
      </p>
      <p className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
        repudiandae beatae molestias minus minima ratione iusto recusandae, ipsa
        quibusdam obcaecati optio veniam, dolore deserunt quia fugiat. Iusto eos
        quam optio!
      </p>
      <p className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
        repudiandae beatae molestias minus minima ratione iusto recusandae, ipsa
        quibusdam obcaecati optio veniam, dolore deserunt quia fugiat. Iusto eos
        quam optio!
      </p>
      <p className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
        repudiandae beatae molestias minus minima ratione iusto recusandae, ipsa
        quibusdam obcaecati optio veniam, dolore deserunt quia fugiat. Iusto eos
        quam optio!
      </p>
    </div>
  );
}
