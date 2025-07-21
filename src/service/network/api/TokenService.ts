import ExpoConstants from "expo-constants";
import ky from "ky";

import {RefreshTokenResponse} from "@/model/auth";
import {useAuthStore} from "@/store";

import {ApiEndPoints} from "../ApiEndPoints";

const {extra} = ExpoConstants.expoConfig ?? {};

const AuthApiClient = ky.create({
  prefixUrl: extra?.apiBaseUrl,
  throwHttpErrors: false,
  cache: "no-store",
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [
      async request => {
        const accessToken = useAuthStore.getState().accessToken;
        if (accessToken) {
          request.headers.set("Authorization", `${accessToken}`);
        }
      },
    ],
  },
});

export const refreshToken = async () => {
  const response = await AuthApiClient.get(
    ApiEndPoints.refreshToken,
  ).json<RefreshTokenResponse>();
  return response;
};
