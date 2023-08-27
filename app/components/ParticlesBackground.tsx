"use client";
import { useTheme } from "@mui/material";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  particlesBackgoundDarkConfig,
  particlesBackgoundLightConfig,
} from "./config/particles-config";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const theme = useTheme();

  return (
    <Particles
      id="tsparticles"
      height="100%"
      width="100%"
      key={theme.palette.mode}
      params={
        theme.palette.mode === "dark"
          ? particlesBackgoundDarkConfig
          : particlesBackgoundLightConfig
      }
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default ParticlesBackground;
