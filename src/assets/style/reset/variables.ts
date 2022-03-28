export const darkRed = "#cc0000";
export const textColor = "#333";

interface Fonts {
  fontWeight700: number;
  fontWeight400: number;
  fontSize34: string;
  fontSize16: string;
  fontSize14: string;
}

interface Colors {
  [key: string]: string;
}

export const font: Fonts = {
  fontWeight700: 700,
  fontWeight400: 400,
  fontSize34: "34px",
  fontSize16: "16px",
  fontSize14: "14px",
};

export const color: Colors = {
  textColor: "#333",
  darkRed: "#cc0000",
};
