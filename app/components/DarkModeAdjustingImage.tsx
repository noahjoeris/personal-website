"use client";
import { useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { CSSProperties, FC } from "react";

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

const DarkModeAdjustingImage: FC<DarkModeAdjustingImageProps> = ({
  style = null,
  onDarkModeStyles = null,
  onLightModeStyles = null,
  src,
  alt,
  width,
  height,
  priority = false,
}) => {
  const theme = useTheme();

  return (
    <Image
      src={src}
      alt={alt}
      style={{
        ...style,
        ...(theme.palette.mode === "dark"
          ? onDarkModeStyles
          : onLightModeStyles),
      }}
      priority={priority}
    />
  );
};

export default DarkModeAdjustingImage;
