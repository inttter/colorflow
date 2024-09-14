import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dices } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';

interface RandomizeScrollButtonProps {
  randomizeColor: () => void;
}

const RandomizeScrollButton: React.FC<RandomizeScrollButtonProps> = ({ randomizeColor }) => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  // Appears on the page when Y offest is greater than 200
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    randomizeColor();
  };

  if (!showScrollButton) {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <motion.button
            className="fixed bottom-6 right-6 text-zinc-100 p-2 bg-primary hover:bg-accent-foreground border-2 border-neutral-800 hover:border-neutral-700 rounded-full duration-300 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: showScrollButton ? 1 : 0 }}
            transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.3, ease: "easeOut" } }}
            onClick={handleClick}
            aria-label="Randomize Color Mobile Button"
          >
            <Dices />
          </motion.button>
        </TooltipTrigger>
        <TooltipContent side="left">
          Randomize Color
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RandomizeScrollButton;
