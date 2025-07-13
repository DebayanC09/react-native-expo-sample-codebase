const WHITE = "#ffffff";
const BLACK = "#000000";
const PRIMARY = "#000000";
const ERROR = "#ff0000";

export const LightTheme = {
  background: WHITE,

  textInput: {
    backgroundColor: WHITE,
    borderColor: "gray",
    activeBorderColor: PRIMARY,
    errorBorderColor: ERROR,
    textColor: BLACK,
    placeholderTextColor: "gray",
  },

  button: {
    backgroundColor: PRIMARY,
    textColor: WHITE,
    borderRadius: 8,
    padding: 8,
  },

  text: {
    color: BLACK,
  },
};
