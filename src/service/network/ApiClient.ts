import ExpoConstants from "expo-constants";
import ky from "ky";

const {extra} = ExpoConstants.expoConfig ?? {};

export const ApiClient = ky.extend({
  prefixUrl: extra?.apiBaseUrl,
  throwHttpErrors: false,
  cache: "no-store",
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {},
});
