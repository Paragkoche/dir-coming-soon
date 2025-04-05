"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import RedoAnimText from "./RedoAnimText";
import CursorBlinker from "./CursorBlinker";

export interface IAnimTextProps {
  delay: number;
}

export default function AnimText({ delay }: IAnimTextProps) {
  const baseText = "";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="text-2xl md:text-4xl lg:text-7xl   text-[#241f1a]">
      <motion.span>{displayText}</motion.span>

      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </span>
  );
}
