/** An array of basic commands. */
export const basicCommands = ["welcome", "help", "about", "connect", "projects", "papers", "theme"] as const;

/** An array of ignored commands. */
export const silentCommands = ["", "clear", "cv"] as const;

/** An array of all commands. */
export const allCommands = [...silentCommands, ...basicCommands] as const;

/** DaisyUI themes (https://daisyui.com/docs/themes/) */
export const themes = [
  "light",
  "dark",
  "cupcake",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "black",
  "luxury",
  "dracula",
  "autumn",
  "business",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];
