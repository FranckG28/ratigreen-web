
"use client";

import createGlobe from "cobe";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import daisyuiColors from "daisyui/src/theming/themes";
import { Theme } from "daisyui";

function normalizeOKLCHArray(oklchArray: number[]) {
    // Define the minimum and maximum values for each component
    const minValues = [0, 0, 0];
    const maxValues = [100, 50, 360];

    // Normalize each component
    const normalizedArray = oklchArray.map((value, index) => {
        return (value - minValues[index]) / (maxValues[index] - minValues[index]);
    });

    // Return the normalized values as an array
    return normalizedArray;
}

function convertColor(theme: string, which: string) {
    var parse = require('color-parse')
    const parsed_value = parse.default(daisyuiColors[theme as Theme][which]);
    console.log(parsed_value);
    if (parsed_value.space == "oklch") {
        return normalizeOKLCHArray(parsed_value.values);
    } else {
        return ([parsed_value.values[0] / 255, parsed_value.values[1] / 255, parsed_value.values[2] / 255]);
    }
}

export default function Planet() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const width = 700;
    const height = 700;

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        let phi = 0;

        const base = convertColor(theme, "primary");
        const glow = convertColor(theme, "accent")

        const globe = createGlobe(canvasRef.current!, {
            devicePixelRatio: 2,
            width: width * 2,
            height: height * 2,
            phi: 0,
            theta: 0.2,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 100,
            baseColor: [glow[0], glow[1], glow[2]],
            markerColor: [0.1, 0.8, 1],
            glowColor: [base[0], base[1], base[2]],
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
    }, [theme]);

    return (
        <div>
            <canvas
                ref={canvasRef}
                style={{ width: width, height: height, maxWidth: "100%", aspectRatio: 1 }}
            />
        </div>
    );
}