import {AppColor} from "@/utils";

export const LightTheme = {
  background: AppColor.WHITE,
  primary: AppColor.PRIMARY,

  textInput: {
    backgroundColor: AppColor.WHITE,
    borderColor: AppColor.GRAY,
    activeBorderColor: AppColor.PRIMARY,
    errorBorderColor: AppColor.ERROR,
    textColor: AppColor.BLACK,
    placeholderTextColor: AppColor.GRAY,
  },

  button: {
    backgroundColor: AppColor.PRIMARY,
    textColor: AppColor.WHITE,
    borderRadius: 8,
    padding: 8,
  },

  text: {
    color: {
      primary: AppColor.BLACK,
      secondary: AppColor.GRAY,
      error: AppColor.ERROR,
    },
  },

  alertModal: {
    backgroundColor: AppColor.WHITE,
    titleColor: AppColor.BLACK,
    descriptionColor: AppColor.GRAY,
    buttonTextColor: {
      confirm: AppColor.PRIMARY,
      cancel: AppColor.GRAY,
    },
    centeredView: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
      backgroundColor: AppColor.WHITE,
    },
  },
};
