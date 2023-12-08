"use client";
import React, { useContext, createContext, useEffect } from "react";
import { useKonamiCode } from "../hooks/useKonamiCode";

interface KonaContextInterface {
    konami: boolean;
}

export const KonaContext = createContext<KonaContextInterface>({
    konami: false,
});

export default function KonamiProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const konami = useKonamiCode();
    return (
        <KonaContext.Provider
            value={{
                konami,
            }}
        >
            {children}
        </KonaContext.Provider>
    );
}