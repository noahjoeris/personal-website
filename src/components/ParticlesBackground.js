import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {
  particlesBackgoundDarkConfig,
  particlesBackgoundLightConfig,
} from "./config/particles-config";

const ParticlesBackground = ({ darkModeEnabled }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      height="100%"
      width="100%"
      params={
        darkModeEnabled
          ? particlesBackgoundDarkConfig
          : particlesBackgoundLightConfig
      }
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default ParticlesBackground;
