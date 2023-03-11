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
      shade600: "#979797",
      shade500: "#B8B8B8",
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
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "25px",
      5: "31.25px",
      6: "39.06px",
      7: "48.83px",
    },
    radii: {
      postCover: "3px",
      codeSnippet: "3px",
    },
  },
  media: {
    bp1: "(max-width: 480px)",
    bp2: "(min-width: 780px)",
    bp3: "(min-width: 1024px)",
    bp4: "(min-width: 1200px)",
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
    title: (type: "1" | "2" | "3") => {
      const sizes: Record<string | number, string> = {
        1: "95.6px",
        2: "76.3px",
        3: "61px",
      };

      return {
        fontSize: sizes[type],
        fontWeight: "bold",
      };
    },
    text: (type: "body" | "copy" | "caption") => {
      const styles = {
        body: {
          fontSize: "18px",
          lineHeight: "32px",
        },
        copy: { fontSize: "14px" },
        caption: { fontSize: "12px" },
      };

      return {
        ...styles[type],
      };
    },
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    color: "$white",
    backgroundColor: "$shade900",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
  },
});

export type CSSType = CSS<typeof config>;
