"use client";
import { StaticImageData } from "next/image";
import { CSSProperties, FC } from "react";
import { Typewriter } from "react-simple-typewriter";

interface DarkModeAdjustingImageProps {
  style?: CSSProperties;
  onDarkModeStyles?: CSSProperties;
  onLightModeStyles?: CSSProperties;
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const MyTypewriter: FC<{ words: string[] }> = ({ words = [] }) => {
  return (
    <Typewriter
      words={words}
      loop={0}
      cursor
      cursorStyle="_"
      typeSpeed={50}
      deleteSpeed={50}
      delaySpeed={1200}
    />
  );
};

export default MyTypewriter;
