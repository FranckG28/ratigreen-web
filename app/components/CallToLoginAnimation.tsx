"use client";

import Lottie from "lottie-react";
import * as christmasAnimation from "../animations/christmas_gift.json";

export default function ChristmanGiftAnimation() {
  return (
    <Lottie
      animationData={christmasAnimation}
      loop={true}
      autoplay={true}
      className="h-24 w-24 lg:h-32 lg:w-32 self-center mx-auto"
    />
  );
}
