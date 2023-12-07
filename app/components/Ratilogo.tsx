import classNames from "classnames";

type LogoSize = "sm" | "md" | "lg";

const imageSizes: Record<LogoSize, { width: number; height: number }> = {
  sm: { width: 40, height: 40 },
  md: { width: 80, height: 80 },
  lg: { width: 120, height: 120 },
};

const textSizes: Record<LogoSize, string> = {
  sm: "text-xl",
  md: "text-5xl",
  lg: "text-6xl",
};

export default function Ratilogo({ size = "md" }: { size?: LogoSize }) {
  return (
    <div className="flex items-end -space-x-4">
      <svg
        style={{
          width: imageSizes[size].width,
          height: imageSizes[size].height,
        }}
        className="text-base-content"
        width="130"
        height="132"
        viewBox="0 0 130 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_137_144)">
          <path
            d="M107.55 15.77L108.61 10.3L106.99 1.76004L98.05 0.540039L91.54 12.33L89.51 14.77L78.13 12.33L67.97 14.77L62.28 7.86004L58.22 0.950039"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.74 32.6501L58.62 35.9001L38.3 70.4501L33.83 100.53L35.45 107.03L16.76 115.97L5.38 107.84L0.5 100.12V106.16L11.47 119.63H18.44L35.86 112.72L36.67 111.5L46.83 120.85L43.58 122.07L41.96 125.73M41.96 125.73L40.74 126.54V128.17M41.96 125.73L43.58 126.95M43.58 126.95L42.84 128.17L42.77 130.2M43.58 126.95L45.62 127.35M45.62 127.35L45.21 128.57L45.09 130.2M45.62 127.35H48.46M48.46 127.35L47.65 128.57V130.6M48.46 127.35H50.49M50.49 127.35L50.09 128.17V130.2M50.49 127.35L53.34 125.73L56.18 124.91L51.31 119.63L52.12 114.75L63.91 115.57L68.38 119.22H72.03L73.66 120.04L74.88 120.44M74.88 120.44V121.62M74.88 120.44L74.07 119.63H75.69L76.51 120.04M76.51 120.04L76.91 121.26M76.51 120.04L76.91 119.26L77.51 119.93L78.54 120.44L77.72 120.04L78.13 119.22H79.35M79.35 119.22L79.76 120.04M79.35 119.22L78.13 118.41L76.91 116.38L69.6 115.16L83.01 104.19V119.76L88.7 125.32L94.39 126.95L96.42 129.38M96.42 129.38L97.19 130.6V132.04M96.42 129.38L97.64 127.35L99.27 128.17L100.49 128.98M100.49 128.98V131M100.49 128.98L100.08 127.35L102.52 128.17M102.52 128.17L103.74 130.6M102.52 128.17L101.7 126.95L103.74 126.39M103.74 126.39L104.96 127.35M103.74 126.39L102.52 125.73L100.49 122.48L89.51 119.63L99.27 90.3701L105.77 74.5101L102.92 59.0701L104.14 58.2601H107.4L108.61 55.0101H110.65L112.27 53.3801L115.12 48.9101L108.21 34.6801L104 30.5L108.61 31.4301L106.99 28.5901L103.74 27.7701L100.08 24.9301"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M108.21 48.1001L106.58 53.7901"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M83.4101 30.62L77.3201 38.75L88.2901 44.84L83.4101 30.62Z"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M101.7 51.3501L84.2299 56.2201L66.7499 55.8201L66.1399 45.2001L84.2299 56.2201L88.2899 44.8401L103.07 51.3101"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M47.5 16L47.6199 5.62007L51.3799 1.59007L58 1"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M51.7101 24.52L47.5 16"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60.5 10L58.22 0.950073"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.36 15.99L107.55 15.77L105.32 15.72L103.04 3.19005C102.99 2.92005 102.66 2.80005 102.45 2.98005L91.54 12.33L102.92 2.58005M102.92 2.58005L98.04 0.550049M102.92 2.58005L106.98 1.77005"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60.5 10L70 17.5L67.9699 14.7701L71.5799 19.6401M71.5799 19.6401L66.2199 32.4501M71.5799 19.6401L86.1599 17.9601L83.4099 30.6201L108.21 48.1001M108.21 48.1001L101.7 51.3501L104.14 54.1901L106.18 54.6001M108.21 48.1001L112.27 50.1301M108.21 48.1001L99.3599 24.9301L86.6699 17.6101L78.5 12.5L89.5099 14.7701L96.4199 19.2401M106.18 54.6001L108.61 55.0101M106.18 54.6001L106.58 53.7901L111.05 52.9701M111.05 52.9701L112.27 53.3801M111.05 52.9701L112.27 50.1301M112.27 50.1301L115.12 48.9101M96.4199 19.2401L100.08 24.9301M96.4199 19.2401L105.36 15.9901"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.81 81.4501L34.2 100.17L48.02 101.51L41.11 81.4401C41.06 81.3001 40.86 81.3001 40.81 81.4401V81.4501Z"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M78.1299 100.53L83.8199 95.25M83.8199 95.25L83.0099 104.19M83.8199 95.25L85.0299 92.43C85.0899 92.3 85.2599 92.28 85.3399 92.4L89.9099 98.91L83.1899 119.62H89.4999L82.9999 119.76L94.7899 123.29M94.7899 123.29L94.3799 126.95M94.7899 123.29H96.4199M96.4199 123.29L99.2699 128.17M96.4199 123.29L98.4499 122.88M98.4499 122.88L101.7 126.94M98.4499 122.88L100.48 122.47"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M69 107.5L82.29 104.19L78.13 100.53L69 107"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M73.6599 117.19L76.5099 120.04L73.6599 117.19ZM73.6599 117.19L76.9099 116.38L73.6599 117.19Z"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M48.46 101.75V113.98L51.31 119.63L48.46 113.98"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M91.54 83.8601L95.61 61.1001L84.48 60.5801"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M91.54 83.8601L105.43 74.4801L98.86 60.2901L102.92 59.0701L98.86 60.2901L95.61 61.1001"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M96.16 99.68L89.92 98.9L91.54 84.57L99.27 90.37L91.54 83.86L85.04 92.4"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M55.71 104.19V119.76L61.4 125.32L67.09 126.95L69.12 129.38L69.89 130.6V132.04V130.6L69.12 129.38L70.34 127.35L71.97 128.17L73.19 128.98V131V128.98L72.78 127.35L75.22 128.17L72.78 127.35L75.22 128.17L76.44 130.6L75.22 128.17L74.41 126.95L76.44 126.39L77.66 127.35L76.44 126.39L75.22 125.73L73.19 122.48L62.21 119.63L71.97 90.37"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M55.71 104.19L56.52 95.24L57.74 92.4L62.62 98.9L56.26 119.75L62.21 119.63L55.71 119.76L67.5 123.29L67.09 126.95L67.5 123.29H69.12L71.97 128.17L69.12 123.29L71.16 122.88L74.41 126.95L71.16 122.88L73.19 122.48"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68.86 99.68L62.62 98.9L64.25 83.86L71.97 90.37L64.25 83.86L57.74 92.4"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.4199 111.54L48.4599 101.75L37.4199 111.54ZM37.4199 111.54L50.4199 119.54L46.8299 120.85"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M53.3401 125.73L51.7101 122.48H50.8301L48.8701 127.35"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M47.94 127.35L49.27 122.48H48.04L46.02 127.35"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M45.2801 127.29L46.8301 122.48H45.6201L43.5801 126.95"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M102.11 57.44L84.48 60.58L84.23 56.22L97.23 55.41M102.11 57.44L99.44 55.62L97.23 55.41M102.11 57.44L104.14 58.26M102.11 57.44L105.52 55.62L108.61 55.01M97.23 55.41L98.5 52.5"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68.3799 35.5L70.2099 32.85L72.4399 30.62"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M66.75 55.8201L84.48 60.5801"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M107 29L103.74 27.77L104 30.5C104 30.5 104.19 30.57 104.22 30.54L107 29Z"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M71.5801 19.64L72.0301 28.59L77.7201 31.43L77.6901 32.03L77.3201 38.75"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M115.12 48.9101L126.34 33.0601"
            stroke="#929292"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M125.69 47.69L114.31 50.18L128.53 37.12"
            stroke="#929292"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M129.72 52.1601L114.31 50.1801"
            stroke="#929292"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M125.28 59.8801L113.35 51.6901"
            stroke="#929292"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M118.37 65.57L110.65 55.01"
            stroke="#929292"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M56.5901 42.41L66.7501 55.82"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68.3799 35.5L57.45 42.24L65.8899 44.84L74.47 43.62L88.29 44.84L96.0999 52.91"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M74.47 43.62L77.32 38.75"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.43 52.78L98.9299 60.91"
            stroke="#929292"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M77.6801 31.49L77.3201 38.6H72.1401L70.5601 37.24L69.0601 32.22L72.1301 28.38"
            fill="#929292"
          />
          <path d="M72.47 29.27L73.06 32.43L77.08 31.56" fill="currentColor" />
          <path
            d="M107.55 15.77L103.07 26.88"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M49.6799 70.4501L57.6799 92.4101L41.1499 81.0201L49.6899 70.4501M49.6899 70.4501L66.7599 55.8201M49.6899 70.4501L56.5999 42.4101L60.6599 38.3501L66.0799 32.5701L49.1599 4.45005C49.0999 4.35005 48.9399 4.40005 48.9499 4.52005L51.7099 24.5201L53.7399 32.6501L58.6199 35.9001L60.7199 38.0201L60.6499 38.3401"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M69 107L63.9099 115.57L69.9699 114.99L69 107Z"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M78.13 100.53L71.9701 90.3701L75.6201 78.7801L72.4401 67.9301L62.3 73.7701L64.25 83.8601"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M91 84L71.97 90.37L75.62 78.78L91 84Z"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M95.61 61.1001L72.44 67.9301L66.75 55.8201L57.68 92.4101L48.46 101.75"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.45 107.03L36.6699 111.5"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.76 115.97L11.47 119.63"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M104.85 52.1901L91.9399 63.1601"
            stroke="#929292"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M104.3 51.29L87.6299 63.08"
            stroke="#929292"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105.56 54.4L84.99 53.76"
            stroke="#929292"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M104.14 30.7301L105.77 28.9901L106.99 28.5901L108.86 31.7801L107.5 33.9701L104.14 30.7301Z"
            fill="#929292"
          />
        </g>
        <defs>
          <clipPath id="clip0_137_144">
            <rect width="130" height="132" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>

      <p
        className={classNames(
          textSizes[size],
          "text-base-content tracking-tighter select-none"
        )}
      >
        Rati<span className="font-medium text-success">green</span>
      </p>
    </div>
  );
}
