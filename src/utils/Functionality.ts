import Toast from "react-native-toast-message";

export const showToast = (message: string) => {
  Toast.show({
    text1: message,
  });
};
