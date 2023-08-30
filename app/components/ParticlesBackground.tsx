"use client";

import { useTheme } from "@mui/material";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import {
  particlesBackgoundDarkConfig,
  particlesBackgoundLightConfig,
} from "./config/particles-config";

export const ParticlesBackground = () => {
  const theme = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      key={theme.palette.mode}
      options={
        theme.palette.mode === "dark"
          ? particlesBackgoundDarkConfig
          : particlesBackgoundLightConfig
      }
      init={particlesInit}
    />
  );
};
