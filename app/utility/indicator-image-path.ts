import { Indicator } from "../models/indicator";

export function getIndicatorImage(indicator: Indicator): string {
    switch (indicator) {
      case Indicator.MONEY:
        return "/coins-hand.svg";
      case Indicator.ENJOYMENT:
        return "/activity-heart.svg";
      case Indicator.HAPPY:
        return "/face-happy.svg";
      default:
        throw new Error("Invalid indicator");
    }
  }