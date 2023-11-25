export const firefly = {
    fpsLimit: 60,
    particles: {
        move: {
            bounce: false,
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 1,
            straight: false,
        },
    },
    number: { density: { enable: true, area: 200 }, value: 100 },
    opacity: {
        value: 0.3,
    },
    shape: {
        type: "circle",
    },
    size: {
        value: { min: 0.5, max: 0.5 },
    },
    themes: [
        {
            name: "light",
            default: {
                value: true,
                mode: "light",
            },
            options: {
                background: {
                    color: "#fff",
                },
                particles: {
                    color: {
                        value: "#00000042",
                    },
                },
            },
        },
        {
            name: "dark",
            default: {
                value: true,
                mode: "dark",
            },
            options: {
                particles: {
                    color: {
                        // value: "#75075E"
                        value: "#FD4495",
                    },
                },
            },
        },
    ],
};

export const links = {
    fps_limit: 60,
    interactivity: {
        detect_on: "canvas",
        events: {
            // onclick: { enable: true, mode: "push" },
            // onhover: {
            //     enable: true,
            //     mode: "attract",
            //     parallax: { enable: false, force: 60, smooth: 10 },
            // },
            resize: true,
        },
        modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 },
        },
    },
    particles: {
        color: { value: "#323232" },
        line_linked: {
            color: "#5c5c5c2c",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
           
        },
        move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 1,
            straight: false,
        },
        number: { density: { enable: true, value_area: 800 }, value: 70 },
        opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5,
        },
        shape: {
            character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "30",
            },
            image: {
                height: 30,
                replace_color: true,
                src: "images/github.svg",
                width: 10,
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#00000059", width: 0 },
            type: "circle",
        },
        size: {
            anim: { enable: false, size_min: 0.1, speed: 10, sync: false },
            random: true,
            value: 5,
        },
    },
    polygon: {
        draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
        move: { radius: 10 },
        scale: 1,
        type: "none",
        url: "",
    },
    retina_detect: true,
};
