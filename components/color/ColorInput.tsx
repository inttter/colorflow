import React from "react";
import copy from 'copy-to-clipboard';
import { Dices, Copy, Github, RotateCcw, Palette, Paintbrush, ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from "@/hooks/use-toast";

interface ColorInputProps {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  randomizeColor: () => void;
}

const ColorInput: React.FC<ColorInputProps> = ({ color, setColor, randomizeColor }) => {
  const { toast } = useToast();
  const normalToast = 'bg-neutral-900 text-zinc-100 border border-neutral-800 shadow-xl rounded-lg p-4 max-w-sm';

  const handleCopy = () => {
    if (!color) {
      toast({
        title: "Nothing to copy!",
        description: "Enter or randomize a color value before trying to copy again.",
        variant: 'destructive',
      });
      return;
    }

    try {
      copy(color);
  
      toast({
        title: "Copied to clipboard successfully!",     
        description: (
          <>
            You can now paste{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] font-semibold text-zinc-100">
              {color}
            </span>{" "}
            anywhere you'd like.
          </>
        ),
        className: normalToast,
      });
    } catch (error) {
      toast({
        title: "Failed to copy!", 
        description: "There was an error copying the text to the clipboard.",
        className: normalToast,
      });
    }
  };

  const handleReset = () => {
    setColor('');
    toast({
      title: "Color has been reset!",
      description: "You can now enter another color value.",
      className: normalToast,
    });
  };

  return (
    <div className="flex flex-col items-center sm:items-start w-full justify-center">
      <div className="flex flex-col gap-4 w-full pr-2">
        
        <Label htmlFor="color" className="text-left -mb-1 flex items-center" aria-label="Label Message">
          <Palette size={15} className="mr-1 text-stone-400" /> Enter a color value or gradient
        </Label>

        <div className="flex items-center w-full">
          <Input
            type="text"
            id="color"
            value={color}
            placeholder="eg. #6b92a0"
            onChange={(e) => setColor(e.target.value)}
            className="text-center text-xs font-[family-name:var(--font-jetbrains-mono)] border border-neutral-800 focus:border-neutral-700 duration-300 flex-grow"
            aria-label="Color Value Input"
          />
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  onClick={handleReset}
                  className="ml-2 border border-neutral-800 px-3"
                  aria-label="Reset Color Button"
                >
                  <RotateCcw size={15} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Reset color
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Button
          variant="secondary"
          onClick={randomizeColor}
        >
          <Dices size={15} className="mr-1" /> Randomize
        </Button>

        <Button
          variant="secondary" 
          onClick={handleCopy}
        >
          <Copy size={15} className="mr-1" /> Copy to clipboard
        </Button>

        <Button
          variant="default"
          className="border border-neutral-800 hover:bg-stone-800"
          asChild
        >
          <Link 
            href="https://github.com/inttter/colorflow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={15} className="mr-1" /> View on GitHub
          </Link>
        </Button>

        {/* May be repurposed/reused in future, so its being kept here */}
        {/* <div className="text-sm text-stone-400 flex items-center">
          <Badge variant="secondary">BADGE</Badge>
          <span className="ml-2">
            [Message]
          </span>
        </div> */}

      </div>
    </div>
  );
};

export default ColorInput;