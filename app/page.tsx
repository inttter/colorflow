"use client";

import React, { useState } from "react";
import { motion } from 'framer-motion';
import ColorInput from '@/components/color/ColorInput';
import ColorExamples from "@/components/color/Examples";
import RandomizeScroll from '@/components/color/RandomizeScrollButton';
import { getRandomHexColor, getRandomRgbColor, getRandomHslaColor, getRandomHslColor, getRandomRgbaColor, getRandomLinearGradient, getRandomRadialGradient } from '@/utils/colors';
import { Sparkles } from "lucide-react";

export default function Home() {
  const [color, setColor] = useState('');
  const [randomizeTrigger, setRandomizeTrigger] = useState(false);

  const randomizeColor = () => {
    const randomFunctions = [getRandomHexColor, getRandomRgbColor, getRandomHslaColor, getRandomHslColor, getRandomRgbaColor, getRandomLinearGradient, getRandomRadialGradient];
    const randomColor = randomFunctions[Math.floor(Math.random() * randomFunctions.length)]();
    setColor(randomColor);
    setRandomizeTrigger(prev => !prev);
  };

  const name = 'Colorflow';
  const description = 'Generate and preview different colors.'

  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 py-20 sm:p-20 bg-background font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl gap-0 md:gap-16 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-start justify-center w-full sm:w-1/2"
        >
          <div className="flex flex-col items-start mb-5" aria-label="Header and Descreiption">
            <div className="flex items-center text-4xl font-extrabold tracking-tight lg:text-5xl sm:text-3xl">
              <Sparkles size={60} className="mr-2" />
              <div>
                {name}
                <div className="text-xs md:text-sm tracking-normal font-medium text-stone-400">
                  {description}
                </div>
              </div>
            </div>
          </div>
          <ColorInput color={color} setColor={setColor} randomizeColor={randomizeColor} />
        </motion.div>
        
        <div className="flex flex-col sm:flex-row w-full sm:w-1/2 gap-4">
          <ColorExamples color={color} randomizeTrigger={randomizeTrigger} />
        </div>
      </div>
      <RandomizeScroll randomizeColor={randomizeColor} />
    </div>
  );
}
