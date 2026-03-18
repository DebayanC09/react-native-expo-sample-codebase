import {BLACK, ERROR, GRAY, PRIMARY, WHITE} from "@/utils";

export const LightTheme = {
  background: WHITE,
  primary: PRIMARY,

  textInput: {
    backgroundColor: WHITE,
    borderColor: "gray",
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
    color: BLACK,
  },
};
