import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import useAppTheme from "@/core/theme";

import {ButtonStyle} from "./style";

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
        ButtonStyle.button,
        {backgroundColor: button.backgroundColor},
        wrapperStyle,
      ]}
      onPress={onPress}>
      <View style={ButtonStyle.buttonTextContainer}>
        {showLoader && (
          <ActivityIndicator size="small" color={button.textColor} />
        )}
        <Text style={[{color: button.textColor}, textStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
