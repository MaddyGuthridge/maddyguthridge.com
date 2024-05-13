// place files you want to import through the `$lib` alias in this folder.

const MAX_HEIGHT_DIFF = 30;

/**
 * Generates a random colour, but only blues, pinks, reds and purples.
 */
export function randomColour(): string {
  return `#${Math.round(Math.random() * 255).toString(16)}00${Math.round(Math.random() * 255).toString(16)}`;
}

export type Curve = {
  start: number
  end: number
  c1: number
  c2: number
  color: string
  opacity: number
};

/**
 * Generate a bezier curve to go across the screen
 *
 * Returns an array with the following values:
 *
 * * `startHeight` (`number`): height of start point
 * * `control1Height` (`number`): height of first control point
 * * `control2Height` (`number`): height of second control point
 * * `endHeight` (`number`): height of end point
 * * `color` (`string`): color to use for this line
 */
export function generateBezier(): Curve {
  let start = Math.round(Math.random() * 100);
  let end = start + Math.round(Math.random() * MAX_HEIGHT_DIFF * 2 - MAX_HEIGHT_DIFF);

  if (end > 100) {
    const diff = end - 100;
    end = 100;
    start -= diff;
  }

  if (end < 0) {
    const diff = -end;
    end = 0;
    start += diff;
  }

  const c1 = Math.round(Math.random() * 100);
  const c2 = Math.round(Math.random() * 100);

  const opacity = Math.random() / 2;

  return {
    start,
    c1,
    c2,
    end,
    color: randomColour(),
    opacity,
  };
}
