import tinycolor from 'tinycolor2';

// * Determine text color based on background color brightness
// ie. If white text goes on a white color background,
// the text will change to become black.
export function getTextColor(backgroundColor: string): string {
  const color = tinycolor(backgroundColor);
  const luminance = color.getLuminance();

  // Make sure there's a suitable contrast by checking the alpha value
  const alpha = color.getAlpha();
  
  // To account for cases in which hsla()'s or rgba()'s generate very low opacities
  // and makes the text invisible due to the color of the background and text,
  // make the text white when they have less than 0.30 opacity.
  if (alpha < 0.30) {
    return 'white';
  }

  return luminance > 0.5 ? 'black' : 'white';
}

// * Convert HEX to RGB
export function hexToRgb(hex: string): [number, number, number] {
  const color = tinycolor(hex);
  const { r, g, b } = color.toRgb();
  return [r, g, b];
}

// * Convert HEX to RGBA
export function hexToRgba(hex: string, alpha: number): string {
  const color = tinycolor(hex);
  return color.setAlpha(alpha).toRgbString();
}

// * Convert HSL to RGB
export function hslToRgb(hsl: string): string {
  const color = tinycolor(hsl);
  return color.toRgbString();
}

// * Convert HSL to RGBA
export function hslToRgba(hsl: string, alpha: number): string {
  const color = tinycolor(hsl);
  return color.setAlpha(alpha).toRgbString();
}

// * Convert RGBA to Hex
export function rgbaToHex(rgba: string): string {
  const color = tinycolor(rgba);
  return color.toHexString();
}

// * Generate a random hex color
export function getRandomHexColor(): string {
  return tinycolor.random().toHexString();
}

// * Generate a random RGB color
export function getRandomRgbColor(): string {
  return tinycolor.random().toRgbString();
}

// * Generate a random RGBA color
export function getRandomRgbaColor(): string {
  return tinycolor.random().setAlpha(Math.random()).toRgbString();
}

// * Generate a random HSL color
export function getRandomHslColor(): string {
  return tinycolor.random().toHslString();
}

// * Generate a random HSLA color
export function getRandomHslaColor(): string {
  return tinycolor.random().setAlpha(Math.random()).toHslString();
}

// * Generate a random linear gradient
export function getRandomLinearGradient(): string {
  const color1 = getRandomHexColor();
  const color2 = getRandomHexColor();
  const directions = [
    'to right',
    'to left',
    'to top',
    'to bottom',
    'to top right',
    'to top left',
    'to bottom right',
    'to bottom left'
  ];
  const direction = directions[Math.floor(Math.random() * directions.length)];
  return `linear-gradient(${direction}, ${color1}, ${color2})`;
}

// * Generate a random radial gradient
export function getRandomRadialGradient(): string {
  const useHex = Math.random() > 0.5; // 50/50 on whether to use hex or RGB colors
  const color1 = useHex ? getRandomHexColor() : getRandomRgbColor();
  const color2 = useHex ? getRandomHexColor() : getRandomRgbColor();
  const shapes = ['circle', 'ellipse'];
  const positions = [
    'center',
    'top left',
    'top right',
    'bottom left',
    'bottom right'
  ];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  const position = positions[Math.floor(Math.random() * positions.length)];

  return `radial-gradient(${shape} at ${position}, ${color1}, ${color2})`;
}