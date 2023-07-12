"use client";
import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
const transformValue = 400;
interface RandomAnimationParameters {
  x: number;
  y: number;
  angle: number;
}
export function HelloLoader({
  word,
  children,
}: {
  children: ReactNode;
  word: { letter: string; animationParameters: RandomAnimationParameters }[];
}) {
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(false);
    }, 0);
  }, []);
  const wordElem = (
    <div className="self-center">
      {word.map(({ letter, animationParameters }, i) => (
        <motion.span
          className="inline-block font-bold p-4 text-2xl"
          key={i}
          initial={{
            x: animationParameters.x * transformValue - transformValue / 2,
            y: animationParameters.y * transformValue - transformValue / 2,
            rotate: animationParameters.angle * 360,
          }}
          animate={{ x: 0, y: 0, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
  return <>{firstLoad ? wordElem : children}</>;
}
