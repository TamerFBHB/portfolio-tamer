import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";



const Particule = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{

                background: {
                    color: {
                        value: "#06b6d4",
                    },
                },
                style: {
                    display: "flex",
                    position: "absolute",
                    width: "100%",
                    height: " 100%",
                    top: " 0%",
                    left: " 0%",
                    right:"0",
                    bottom:"0",
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
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
                            distance: 50,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000",
                    },
                    links: {
                        color: "#000",
                        distance: 250,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none", enable: true, outModes: { default: "bounce", },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: { density: { enable: true, area: 800, }, value: 100, },
                    opacity: { value: 0.5, },
                    shape: { type: "circle", },
                    size: { value: { min: 1, max: 5 }, },
                },
                detectRetina: true,
            }}
        />

    )
}

export default Particule;