import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const CustomParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
              fpsLimit: 120,
              interactivity: {
                  events: {
                      onHover: {
                          enable: true,
                          mode: "repulse",
                      },
                      resize: true,
                  },
                  modes: {
                      push: {
                          quantity: 4,
                      },
                      repulse: {
                          distance: 110,
                          duration: 0.3,
                      },
                  },
              },
              particles: {
                  color: {
                      value: "#000000",
                  },
                  links: {
                      color: "#000000",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                  },
                  collisions: {
                      enable: true,
                  },
                  move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                          default: "bounce",
                      },
                      random: true,
                      speed: 4,
                      straight: false,
                  },
                  number: {
                      density: {
                          enable: true,
                          area: 800,
                      },
                      value: 90,
                  },
                  opacity: {
                      value: 0.5,
                  },
                  shape: {
                      type: "circle",
                  },
                  size: {
                      value: { min: 1, max: 5 },
                  },
              },
              detectRetina: true,
          }}
          />
    )
}

export default CustomParticles;