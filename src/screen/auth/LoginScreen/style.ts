import {StyleSheet} from "react-native";

export const LoginScreenStyle = StyleSheet.create({
  container: {
    gap: 16,
    width: "100%",
  },
  registerButton: {
    textDecorationLine: "underline",
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 16,
  },
});
