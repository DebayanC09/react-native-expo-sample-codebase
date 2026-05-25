import React, {type PropsWithChildren} from "react";

import {
  type StyleProp,
  Text,
  type TextProps,
  type TextStyle,
} from "react-native";

import useAppTheme from "../core/theme";

type TextVariant = "primary" | "secondary" | "error";

type AppTextProps = PropsWithChildren<{
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: TextProps["ellipsizeMode"];
  variant?: TextVariant;
}> &
  Omit<TextProps, "style" | "children">;

export default function AppText({
  children,
  style,
  numberOfLines,
  ellipsizeMode,
  variant = "primary",
  ...rest
}: AppTextProps) {
  const theme = useAppTheme();

  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[{color: theme.text.color[variant]}, style]}
      {...rest}>
      {children}
    </Text>
  );
}
