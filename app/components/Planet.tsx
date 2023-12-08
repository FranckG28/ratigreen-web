
"use client";

import createGlobe from "cobe";
import { useContext, useEffect, useRef } from "react";
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '../../tailwind.config.ts'
// import { ThemeContext } from "../providers/ThemeProvider";


export default function Planet() {
    const canvasRef = useRef();
    const width = 700;
    const height = 700;
    // const fullConfig = resolveConfig(tailwindConfig)

    // const { theme } = useContext(ThemeContext);

    // useEffect(() => {
    //     const pVariableValue = getComputedStyle(document.documentElement).getPropertyValue('--a');
    //     console.log(pVariableValue);
    // }, [theme]);

    useEffect(() => {
        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: height * 2,
            phi: 0,
            theta: 0.2,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                // { location: [37.7595, -122.4367], size: 0.03 },
                // { location: [40.7128, -74.006], size: 0.1 }
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.005; // this is the speed of the rotation of the earth
            }
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div>
            <canvas
                ref={canvasRef}
                style={{ width: width, height: height, maxWidth: "100%", aspectRatio: 1 }}
            />
        </div>
    );
}