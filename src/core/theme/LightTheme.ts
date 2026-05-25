const WHITE = "#ffffff";
const BLACK = "#000000";
const PRIMARY = "#000000";
const ERROR = "#ff0000";
const GRAY = "#808080";

//////////////////////////////////////////////////////////

export const LightTheme = {
  background: WHITE,
  primary: PRIMARY,

  textInput: {
    backgroundColor: WHITE,
    borderColor: GRAY,
    activeBorderColor: PRIMARY,
    errorBorderColor: ERROR,
    textColor: BLACK,
    placeholderTextColor: GRAY,
  },

  button: {
    backgroundColor: PRIMARY,
    textColor: WHITE,
    borderRadius: 8,
    padding: 8,
  },

  text: {
    color: {
      primary: BLACK,
      secondary: GRAY,
      error: ERROR,
    },
  },
};
