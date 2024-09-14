import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectDemoProps {
  color: string;
  textColor: string;
}

const SelectExample: React.FC<SelectDemoProps> = ({ color, textColor }) => {
  const isGradient = color.startsWith("linear-gradient") || color.startsWith("radial-gradient");
  const languages = ["JavaScript", "Python", "Rust", "Swift", "C++"]; // Examples to be displayed in the dropdown

  return (
    <div className="flex justify-center w-full">
      <Select>
        <SelectTrigger
          aria-label="Select Dropdown Button"
          className="flex items-center w-full mt-1 hover:opacity-85 border border-neutral-800 duration-300"
          style={{
            backgroundColor: isGradient ? 'transparent' : color || '#1C1917',
            backgroundImage: isGradient ? color : 'none',
            color: textColor,
          }}
        >
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent className="border border-neutral-800 bg-background text-zinc-100 bg-[#0A0A0A] font-[family-name:var(--font-jetbrains-mono)] tracking-tighter">
          <SelectGroup>
            {languages.map((language, index) => (
              <SelectItem
                key={index}
                value={language.toLowerCase()}
              >
                {language}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectExample;