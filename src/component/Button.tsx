import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import useAppTheme from "@/core/theme";

type ButtonProps = {
  title: string;
  onPress: () => void;
  showLoader?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const Button = ({
  title,
  onPress,
  showLoader = false,
  wrapperStyle,
  textStyle,
}: ButtonProps) => {
  const {button} = useAppTheme();
  return (
    <Pressable
      disabled={showLoader}
      style={[
        styles.button,
        {backgroundColor: button.backgroundColor},
        wrapperStyle,
      ]}
      onPress={onPress}>
      <View style={styles.buttonTextContainer}>
        {showLoader && (
          <ActivityIndicator size="small" color={button.textColor} />
        )}
        <Text style={[{color: button.textColor}, textStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  button: {
    width: "100%",
    height: 48,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
