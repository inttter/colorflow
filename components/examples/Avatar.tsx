import React from "react";
import Avvvatars from 'avvvatars-react';

interface AvatarComponentProps {
  color: string;
}

const AvatarExample: React.FC<AvatarComponentProps> = ({ color }) => {
  const isGradient = color.startsWith("linear-gradient") || color.startsWith("radial-gradient");

  const avatars = [
    {
      name: "User 1",
      role: "Role #1"
    },
    {
      name: "User 2",
      role: "Role #2"
    }
  ];

  return (
    <div className="flex justify-between px-6 gap-6 sm:gap-4 md:gap-10 mt-2">
      {avatars.map((avatar, index) => (
        <div key={index} className="flex items-center gap-1 sm:gap-1.5">
          <div
            className="relative p-[3.5px] border border-neutral-800 rounded-full duration-300"
            style={{
              backgroundColor: isGradient ? 'transparent' : color || '#1C1917',
              backgroundImage: isGradient ? color : 'none',
              backgroundClip: isGradient ? 'padding-box' : 'border-box',
            }}
          >
            <Avvvatars value={avatar.name} size={35} style="shape" />
          </div>
          <div className="text-xs overflow-hidden truncate">
            <div className="font-semibold">
              {avatar.name}
            </div>
            <div className="text-stone-400 text-xs">
              {avatar.role}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarExample;