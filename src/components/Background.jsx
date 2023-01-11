import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const Background = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

   /*  const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []); */

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            /* loaded={particlesLoaded} */
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    detectsOn: "canvas",
                     events: {
                        /*onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },*/
                        resize: true,
                    }, 
                    modes: {
                        /* push: {
                            quantity: 4,
                        }, */
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#CF0063",
                    },
                    /* links: {
                        color: "#CF0063",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    }, */
                    /* move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        speed: 2,
                        straight: true,
                    }, */
                    number: {
                        density: {
                            enable: true,
                            area: 1080,
                        },
                        limit: 0,
                        value: 300,
                    },
                    opacity: {
                        /* value: 0.5, */
                        animation: {
                            enable: true,
                            minimumValue: 0.05,
                            speed: 2,
                            sync: false,
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.05,
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        /* value: { min: 1, max: 2 }, */
                        random: {
                            enable: true,
                            minimumValue: 0.5,
                        }
                    },
                },
                detectRetina: true,
            }}
        />
    );
};