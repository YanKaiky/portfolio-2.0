"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";

interface Character {
  char: string;
  x: number;
  y: number;
  speed: number;
  color: string;
}

export const RainingLetters: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const charactersRef = useRef<Character[]>([]);
  const [isMdScreen, setIsMdScreen] = useState(false);

  const allChars = "YANKIDSTYANKIDST22122002!@#$$$$$¥¥¥¥£¢%&*</>?";

  const getRandomColor = () => {
    const colors = ["#475569", "#29bc5f", "#00ff00"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const createCharacters = useCallback(() => {
    const newCharacters: Character[] = [];
    const charCount = 300;

    for (let i = 0; i < charCount; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * document.documentElement.clientWidth,
        y: Math.random() * document.documentElement.clientHeight,
        speed: 0.5 + Math.random() * 1,
        color: getRandomColor(),
      });
    }

    charactersRef.current = newCharacters;
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMdScreen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    createCharacters();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      charactersRef.current.forEach((char) => {
        ctx.fillStyle = char.color;
        ctx.font = "20px Arial";
        ctx.fillText(char.char, char.x, char.y);

        char.y += char.speed;

        if (char.y > canvas.height) {
          char.y = -10;
          char.x = Math.random() * canvas.width;
          char.char = allChars[Math.floor(Math.random() * allChars.length)];
          char.color = getRandomColor();
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
      createCharacters();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [createCharacters, isMdScreen]);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    isMdScreen && (
      <canvas
        ref={canvasRef}
        className="hidden md:inline-block absolute top-0 left-0 z-0 w-full h-full overflow-x-hidden"
      />
    )
  );
};
