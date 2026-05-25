import React from "react";

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

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
      style={[styles.container, keyboardAvoidingViewStyle]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={contentContainerStyle}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardAvoidingScrollView;
