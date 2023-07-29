import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  particlesBackgoundDarkConfig,
  particlesBackgoundLightConfig,
} from "./config/particles-config";

interface ParticlesBackgroundProps {
  darkModeEnabled: boolean;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  darkModeEnabled,
}) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      height="100%"
      width="100%"
      key={darkModeEnabled ? "darkMode" : "lightMode"}
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
