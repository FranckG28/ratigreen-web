import { useEffect, useState } from "react";

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyQ",
];

export const useInputEvent = () => {
  const [key, setKey] = useState<string | null>(null);
  useEffect(() => {
    const keyDownHandler = ({ code }: { code: string }) => setKey(code);
    const keyUpHandler = () => setKey(null);
    global.addEventListener("keydown", keyDownHandler);
    global.addEventListener("keyup", keyUpHandler);
    return () => {
      global.removeEventListener("keydown", keyDownHandler);
      global.removeEventListener("keyup", keyUpHandler);
    };
  }, []);
  return key;
};

export const useKonamiCode = () => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const key = useInputEvent();

  useEffect(() => {
    if (key == null) return;
    if (key !== konamiCode[count]) {
      setCount(0);
      return;
    }

    setCount((state) => state + 1);
    if (count + 1 === konamiCode.length) {
      setSuccess(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return success;
};
