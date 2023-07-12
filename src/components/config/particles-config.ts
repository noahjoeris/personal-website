const particlesBackgoundDarkConfig: any = {
  autoPlay: true,
  background: {
    color: { value: "#567698" },
    image: "linear-gradient(19deg,  #9000bd 0%, #000bae 100%)",
    position: "",
    repeat: "",
    size: "",
    opacity: 1,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: { color: { value: "#fff" }, opacity: 0.8 },
    enable: false,
  },
  backgroundMode: { enable: true, zIndex: -1 },
  detectRetina: false,
  infection: {
    cure: false,
    delay: 0,
    enable: true,
    infections: 0,
    stages: [],
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: { enable: true, mode: "repulse" },
      onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
      onHover: {
        enable: true,
        mode: "connect",
        parallax: { enable: true, force: 50, smooth: 30 },
      },
      resize: true,
    },
    modes: {
      attract: { distance: 200, duration: 0.4, speed: 1 },
      bounce: { distance: 200 },
      bubble: { distance: 250, duration: 2, opacity: 0, size: 0 },
      connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
      grab: {
        distance: 400,
        links: { blink: false, consent: false, opacity: 1 },
      },
      light: {
        area: {
          gradient: { start: { value: "#ffffff" }, stop: { value: "#000000" } },
          radius: 1000,
        },
        shadow: { color: { value: "#000000" }, length: 2000 },
      },
      push: { quantity: 4 },
      remove: { quantity: 2 },
      repulse: { distance: 300, duration: 0.5, speed: 0.5 },
      slow: { factor: 3, radius: 200 },
      trail: { delay: 1, quantity: 1 },
    },
  },
  manualParticles: [],
  motion: { disable: false, reduce: { factor: 4, value: false } },
  particles: {
    bounce: {
      horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
    },
    collisions: {
      bounce: {
        horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
        vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      },
      enable: false,
      mode: "bounce",
    },
    color: {
      value: "#ffffff",
      animation: { enable: false, speed: 1, sync: true },
    },
    life: {
      count: 0,
      delay: {
        random: { enable: false, minimumValue: 0 },
        value: 0,
        sync: false,
      },
      duration: {
        random: { enable: false, minimumValue: 0.0001 },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: { value: "#ffffff" },
      consent: false,
      distance: 150,
      enable: false,
      frequency: 1,
      opacity: 0.4,
      shadow: { blur: 5, color: { value: "#00ff00" }, enable: false },
      triangles: { enable: false, frequency: 1 },
      width: 1,
      warp: false,
    },
    move: {
      angle: { offset: 45, value: 90 },
      attract: { enable: false, rotate: { x: 600, y: 600 } },
      direction: "none",
      distance: 0,
      enable: true,
      gravity: { acceleration: 9.81, enable: false, maxSpeed: 50 },
      noise: {
        delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
        enable: false,
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: true,
      size: false,
      speed: 1,
      straight: false,
      trail: { enable: false, length: 10, fillColor: { value: "#000000" } },
      vibrate: false,
      warp: false,
    },
    number: {
      density: { enable: true, area: 800, factor: 1000 },
      limit: 0,
      value: 160,
    },
    opacity: {
      random: { enable: true, minimumValue: 1 },
      value: 1,
      animation: { enable: true, minimumValue: 0, speed: 1, sync: false },
    },
    reduceDuplicates: false,
    rotate: {
      random: { enable: false, minimumValue: 0 },
      value: 0,
      animation: { enable: false, speed: 0, sync: false },
      direction: "clockwise",
      path: false,
    },
    shadow: {
      blur: 0,
      color: { value: "#000000" },
      enable: false,
      offset: { x: 0, y: 0 },
    },
    shape: {
      options: {
        polygon: { nb_sides: 5 },
        star: { nb_sides: 5 },
        image: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100,
        },
        images: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100,
        },
      },
      type: "circle",
    },
    size: {
      random: { enable: true, minimumValue: 1 },
      value: 3,
      animation: {
        destroy: "none",
        enable: false,
        minimumValue: 0.3,
        speed: 4,
        startValue: "max",
        sync: false,
      },
    },
    stroke: {
      width: 0,
      color: {
        value: "#000000",
        animation: { enable: false, speed: 1, sync: true },
      },
    },
    twinkle: {
      lines: { enable: false, frequency: 0.05, opacity: 1 },
      particles: { enable: false, frequency: 0.05, opacity: 1 },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: false,
  themes: [],
};

const particlesBackgoundLightConfig = {
  autoPlay: true,
  background: {
    color: { value: "#567698" },
    image: "linear-gradient(19deg, #000bae 0%, #9000bd 100%)",
    position: "",
    repeat: "",
    size: "",
    opacity: 1,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: { color: { value: "#fff" }, opacity: 1 },
    enable: true,
  },
  backgroundMode: { enable: true, zIndex: -1 },
  detectRetina: false,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: [],
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: { enable: true, mode: "repulse" },
      onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
      onHover: {
        enable: true,
        mode: "connect",
        parallax: { enable: true, force: 50, smooth: 30 },
      },
      resize: true,
    },
    modes: {
      attract: { distance: 200, duration: 0.4, speed: 1 },
      bounce: { distance: 200 },
      bubble: { distance: 250, duration: 2, opacity: 0, size: 0 },
      connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
      grab: {
        distance: 400,
        links: { blink: false, consent: false, opacity: 1 },
      },
      light: {
        area: {
          gradient: { start: { value: "#ffffff" }, stop: { value: "#000000" } },
          radius: 1000,
        },
        shadow: { color: { value: "#000000" }, length: 2000 },
      },
      push: { quantity: 4 },
      remove: { quantity: 2 },
      repulse: { distance: 300, duration: 0.5, speed: 0.5 },
      slow: { factor: 3, radius: 200 },
      trail: { delay: 1, quantity: 1 },
    },
  },
  manualParticles: [],
  motion: { disable: false, reduce: { factor: 4, value: false } },
  particles: {
    bounce: {
      horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
    },
    collisions: {
      bounce: {
        horizontal: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
        vertical: { random: { enable: false, minimumValue: 0.1 }, value: 1 },
      },
      enable: false,
      mode: "bounce",
    },
    color: {
      value: "#000",
      animation: { enable: false, speed: 1, sync: true },
    },
    life: {
      count: 0,
      delay: {
        random: { enable: false, minimumValue: 0 },
        value: 0,
        sync: false,
      },
      duration: {
        random: { enable: false, minimumValue: 0.0001 },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: { value: "#ffffff" },
      consent: false,
      distance: 150,
      enable: false,
      frequency: 1,
      opacity: 0.4,
      shadow: { blur: 5, color: { value: "#00ff00" }, enable: false },
      triangles: { enable: false, frequency: 1 },
      width: 1,
      warp: false,
    },
    move: {
      angle: { offset: 45, value: 90 },
      attract: { enable: false, rotate: { x: 600, y: 600 } },
      direction: "none",
      distance: 0,
      enable: true,
      gravity: { acceleration: 9.81, enable: false, maxSpeed: 50 },
      noise: {
        delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
        enable: false,
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: true,
      size: false,
      speed: 1,
      straight: false,
      trail: { enable: false, length: 10, fillColor: { value: "#000000" } },
      vibrate: false,
      warp: false,
    },
    number: {
      density: { enable: true, area: 800, factor: 1000 },
      limit: 0,
      value: 160,
    },
    opacity: {
      random: { enable: true, minimumValue: 1 },
      value: 1,
      animation: { enable: true, minimumValue: 0, speed: 1, sync: false },
    },
    reduceDuplicates: false,
    rotate: {
      random: { enable: false, minimumValue: 0 },
      value: 0,
      animation: { enable: false, speed: 0, sync: false },
      direction: "clockwise",
      path: false,
    },
    shadow: {
      blur: 0,
      color: { value: "#000000" },
      enable: false,
      offset: { x: 0, y: 0 },
    },
    shape: {
      options: {
        polygon: { nb_sides: 5 },
        star: { nb_sides: 5 },
        image: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100,
        },
        images: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100,
        },
      },
      type: "circle",
    },
    size: {
      random: { enable: true, minimumValue: 1 },
      value: 3,
      animation: {
        destroy: "none",
        enable: false,
        minimumValue: 0.3,
        speed: 4,
        startValue: "max",
        sync: false,
      },
    },
    stroke: {
      width: 0,
      color: {
        value: "#000000",
        animation: { enable: false, speed: 1, sync: true },
      },
    },
    twinkle: {
      lines: { enable: false, frequency: 0.05, opacity: 1 },
      particles: { enable: false, frequency: 0.05, opacity: 1 },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: false,
  themes: [],
};

export { particlesBackgoundDarkConfig, particlesBackgoundLightConfig };
