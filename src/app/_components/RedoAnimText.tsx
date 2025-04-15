"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export interface IRedoAnimTextProps {
  delay: number;
}

export default function RedoAnimText({ delay }: IRedoAnimTextProps) {
  const textIndex = useMotionValue(0);
  const texts = [
    "TheGreat4U.com",
    "Find Local Businesses",
    "Discover Local Gems",
    "Your Service Directory",
    "Connecting You Fast",
    "Find What You Need",
    "Explore Local Anytime",
    "Unlock Local Deals",
    "Empower Your Community",
    "Discover & Thrive Locally",
    "Exciting Things Ahead!",
    "Almost There — Stay Tuned!",
    "Get Ready — Coming Soon!",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 40, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span className="inline lg:-tracking-[5px]">
      {displayText}
    </motion.span>
  );
}
