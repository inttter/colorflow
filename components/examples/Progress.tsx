import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';
import { Progress } from "@/components/ui/progress";

interface ProgressComponentProps {
  color: string;
  textColor: string;
  randomizeTrigger: boolean;
}

const ProgressBarExample: React.FC<ProgressComponentProps> = ({ color, textColor, randomizeTrigger }) => {
  const [progressBarValue, setProgressBarValue] = useState(0);
  const isGradient = color.startsWith("linear-gradient") || color.startsWith("radial-gradient");

  // Randomize the progress of the bar when `randomizeTrigger` changes
  useEffect(() => {
    // This won't go over 40% since then it covers the percentage number
    // which has `textColor` applied to it, and as such, if a dark color
    // is previewed/randomized, the percentage becomes invisible.
    const randomProgress = Math.floor(Math.random() * 41); // 0-40%
    setProgressBarValue(randomProgress);
  }, [randomizeTrigger]);

  return (
    <div className="relative w-full">
      <Progress
        role="progressbar"
        aria-label="Progress Bar Color Example"
        value={progressBarValue}
        className="relative h-5 rounded-full border border-neutral-800 overflow-hidden bg-neutral-700 duration-300"
        style={{
          backgroundColor: isGradient ? 'transparent' : color || '#292524',
          backgroundImage: isGradient ? color : 'none',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium font-[family-name:var(--font-jetbrains-mono)] duration-300" style={{ color: textColor }}>
        <CountUp
          start={0}
          end={progressBarValue}
          duration={0.3}
          separator=","
        />
        % {/* Keep percent sign here so it's directly next to the value */}
      </div>
    </div>
  );
};

export default ProgressBarExample;