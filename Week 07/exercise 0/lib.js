// this function was created with the help of chaptGPT, with the prompt: give me a js function that returns the lightness of a color given its hex value.


function hexToLightness(hex) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');

  // Parse r, g, b values
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  // Normalize r, g, b to the range 0-1
  r /= 255;
  g /= 255;
  b /= 255;

  // Calculate the minimum and maximum values
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  // Calculate lightness
  let lightness = (max + min) / 2;

  // Convert lightness back to a percentage (0-100)
  return Math.round(lightness * 100);
}