import React from "react";

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native";

import {KeyboardAvoidingScrollViewStyle} from "./style";

interface KeyboardAvoidingScrollViewProps {
  children: React.ReactNode;
  keyboardAvoidingViewStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const KeyboardAvoidingScrollView = ({
  children,
  keyboardAvoidingViewStyle,
  contentContainerStyle,
}: KeyboardAvoidingScrollViewProps) => {
  return (
    <KeyboardAvoidingView
      style={[
        KeyboardAvoidingScrollViewStyle.container,
        keyboardAvoidingViewStyle,
      ]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={contentContainerStyle}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingScrollView;
