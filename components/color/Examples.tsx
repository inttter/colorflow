import React from 'react';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import Buttons from '@/components/examples/Buttons';
import Text from '@/components/examples/Text';
import Avatar from '@/components/examples/Avatar';
import Badge from '@/components/examples/Badge';
import Progress from '@/components/examples/Progress';
import Preview from '@/components/examples/Preview';
import Chip from '@/components/examples/Chip';
import Select from '@/components/examples/Select';
import { getTextColor } from '@/utils/colors';

interface ColorExamplesProps {
  color: string;
  randomizeTrigger: boolean;
}

const ColorExamples: React.FC<ColorExamplesProps> = ({ color, randomizeTrigger }) => {
  const textColor = getTextColor(color);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col gap-4 ml-0 sm:-ml-6 md:-ml-6"
    >
      <div className="flex flex-col sm:flex-row gap-4 overflow-x-auto">
        <Preview color={color} />
        <div className="flex flex-col gap-2 w-full max-w-full">
          <Label className="text-left mb-1">Examples</Label>
          <div className="flex flex-col gap-2">
            <Buttons color={color} textColor={textColor} />
            <Text color={color} textColor={textColor} />
            <Avatar color={color} />
            <Badge color={color} textColor={textColor} />
            <Progress color={color} textColor={textColor} randomizeTrigger={randomizeTrigger} />
            <Chip color={color} textColor={textColor} />
            <Select color={color} textColor={textColor} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ColorExamples;
