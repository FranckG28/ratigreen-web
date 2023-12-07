import { MetadataRoute } from "next";

export const appName = "Ratigreen";
export const description = "Les rats ne font pas des chats";
export const appUrl = "https://ratigreen.ratiscrum.fr";
export const themeColor = "#101323";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appName,
    short_name: appName,
    description: description,
    start_url: "/",
    display: "standalone",
    background_color: themeColor,
    theme_color: themeColor,
    icons: [
      {
        src: `${appUrl}/favicon-512.png`,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: `${appUrl}/favicon-192.png`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `${appUrl}/favicon-384.png`,
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: `${appUrl}/favicon.ico`,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
