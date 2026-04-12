import {ConfigContext, ExpoConfig} from "expo/config";

const appConfig = ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: "react-native-expo-sample-codebase",
  slug: "react-native-expo-sample-codebase",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.anonymous.reactnativeexposamplecodebase",
  },
  android: {
    package: "com.anonymous.reactnativeexposamplecodebase",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL,
  },
});

export default appConfig;
