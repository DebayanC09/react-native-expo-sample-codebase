import {StyleSheet} from "react-native";

const TRANSPARENT_COLOR = "transparent";
const TEXT_COLOR = "black";
const FONT_SIZE = 20;
const FONT_WEIGHT = "500";

export const BaseAppBarStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    backgroundColor: TRANSPARENT_COLOR, // Default background color
    alignItems: "center",
    paddingHorizontal: 16,
  },
  leftView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  titleContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  title: {
    textAlign: "center",
    color: TEXT_COLOR, // Default text color
    fontSize: FONT_SIZE, // Default font size
    fontWeight: FONT_WEIGHT, // Default font weight
  },
  rightView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
