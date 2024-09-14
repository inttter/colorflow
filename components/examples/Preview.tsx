import React from "react";
import { Label } from "@/components/ui/label";

interface ColorPreviewerProps {
  color: string;
}

const PreviewExample: React.FC<ColorPreviewerProps> = ({ color }) => {
  const isGradient = color.startsWith("linear-gradient") || color.startsWith("radial-gradient");

  return (
    <div className="flex flex-col items-start justify-center w-full mt-8 sm:mt-0 sm:w-1/2">
      <Label className="text-left mb-2">
        Background
      </Label>
      <div
        className="w-full h-[200px] sm:h-[410px] rounded-lg border-2 border-neutral-800 duration-300"
        style={{ 
          backgroundColor: isGradient ? 'transparent' : color || '#1C1917',
          backgroundImage: isGradient ? color : 'none',
          backgroundClip: isGradient ? 'padding-box' : 'border-box',
        }}
      ></div>
    </div>
  );
};

export default PreviewExample;