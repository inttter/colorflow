import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface ButtonComponentProps {
  color: string;
  textColor: string;
}

const ButtonExample: React.FC<ButtonComponentProps> = ({ color, textColor }) => {
  const isGradient = color.startsWith("linear-gradient") || color.startsWith("radial-gradient");

  return (
    <>
      <Button
        className="border border-neutral-800 hover:opacity-85 transition-opacity duration-300"
        style={{
          backgroundColor: isGradient ? 'transparent' : color || '#1C1917',
          backgroundImage: isGradient ? color : 'none',
          color: textColor,
        }}
      >
        Button
      </Button>
      <Button
        className="border border-neutral-800 hover:opacity-85 transition-opacity duration-200"
        style={{
          backgroundColor: isGradient ? 'transparent' : color || '#1C1917',
          backgroundImage: isGradient ? color : 'none',
          color: textColor,
        }}
      >
        <Sparkles size={15} className="mr-1" /> Button with Icon
      </Button>
    </>
  );
};

export default ButtonExample;
