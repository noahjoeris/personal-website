import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { particlesBackgoundDarkConfig } from "./config/particles-config";

const ParticlesBackground = () => {
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
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
      params={particlesBackgoundDarkConfig}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default ParticlesBackground;

/*  <Particles
      id="tsparticles"
      params={particlesConfettiConfig}
      init={particlesInit}
      loaded={particlesLoaded}
    /> */
