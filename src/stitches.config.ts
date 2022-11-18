import { createStitches, CSS } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      // Neutral
      black: "#000000",
      white: "#FFFFFF",
      // Primary
      primary900: "#0099CC",
      primary800: "#00BFFF",
      primary700: "#4CD2FF",
      // Secondary
      secondaryAlert: "#CC3100",
      secondaryInformation: "#4BA3C1",
      secondaryGeneric: "#B8B8B8",
      // Shades
      shade900: "#222222",
      shade800: "#484848",
      shade700: "#676767",
    },
    space: {
      1: "6px",
      2: "10px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "32px",
      7: "40px",
      8: "80px",
    },
    fonts: {},
    radii: {
      postCover: "6px",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
    bp2: "(min-width: 480px)",
    bp3: "(min-width: 1024px)",
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
    customGrid: (type: "content" | "regular") => ({}),
    subHeading: (type: "1" | "2" | "3") => {
      const sizes: Record<string | number, string> = {
        1: "31.3px",
        2: "25px",
        3: "20px",
      };

      return {
        fontSize: sizes[type],
        fontWeight: "normal",
      };
    },
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    color: "$shade900",
  },
});

export type CSSType = CSS<typeof config>;
