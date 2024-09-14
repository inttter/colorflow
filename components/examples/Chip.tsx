import React from 'react';

interface ChipProps {
  color: string;
  textColor: string;
}

const Chip: React.FC<ChipProps> = ({ color, textColor }) => {
  const isGradient = color.startsWith("linear-gradient") || color.startsWith("radial-gradient");

  return (
    <div className="flex justify-center flex-wrap">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="inline-flex items-center px-3 py-0.5 mx-1 mt-1 rounded-full text-xs font-medium border border-neutral-800 duration-300"
          style={{
            backgroundColor: isGradient ? 'transparent' : color || '#1C1917',
            backgroundImage: isGradient ? color : 'none',
            color: textColor,
          }}
        >
          Chip #{index + 1}
        </div>
      ))}
    </div>
  );
};

export default Chip;