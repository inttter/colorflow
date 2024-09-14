import React from "react";
import { Badge } from "@/components/ui/badge";

interface BadgeComponentProps {
  color: string;
  textColor: string;
}

const BadgeExample: React.FC<BadgeComponentProps> = ({ color, textColor }) => {
  const isGradient = color.startsWith("linear-gradient") || color.startsWith("radial-gradient");

  return (
    <div className="grid grid-cols-2 gap-2 pt-1.5">
      {[...Array(4)].map((_, index) => (
        <Badge
          key={index}
          className="py-1 border border-neutral-800 text-center justify-center duration-300"
          style={{
            backgroundColor: isGradient ? 'transparent' : color || '#1C1917',
            backgroundImage: isGradient ? color : 'none',
            color: textColor,
          }}
        >
          Badge #{index + 1}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeExample;
