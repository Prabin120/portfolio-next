import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
        fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        //   onHover: {
        //     enable: true,
        //     mode: "repulse",
        //   },
        },
        modes: {
          push: {
            quantity: 1,
          },
        //   repulse: {
        //     distance: 200,
        //     duration: 0.4,
        //   },
        },
      },
      particles: {
        color: {
          value: "#f7d652",
        },
        links: {
        //   color: "#ffffff",
        //   distance: 150,
        //   enable: true,
          enable: false,
        //   opacity: 0.5,
        //   width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 20,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
            type: [
                "image",
                "circle"
            ],
            image: [
                {
                    src: "pythonIcon",
                    height: "20",
                    width: "23"
                },
                {
                    src: "pythonIcon", 
                    height: "20",
                    width: "23"
                },
                {
                    src: "pythonIcon",
                    height: "20",
                    width: "23"
                },
            ]
        },
        size: {
          value: { min: 20, max: 30 },
        },
      },
      detectRetina: true,
	}),
    [],
  );

  if (init) {
    return (
      <Particles
        id="skillsFly"
        particlesLoaded={particlesLoaded}
        options={options}
        className="-z-20"
      />
    );
  }

  return <></>;
};

export default App;