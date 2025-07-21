import ExpoConstants from "expo-constants";
import ky from "ky";

import {useAuthStore} from "@/store";

import {refreshToken} from "./api/TokenService";

const {extra} = ExpoConstants.expoConfig ?? {};

export const ApiClient = ky.extend({
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
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          // Attempt token refresh
          const tokenRefreshResult = await refreshToken();

          if (tokenRefreshResult?.token) {
            useAuthStore.setState({accessToken: tokenRefreshResult.token});

            // Retry the request with new token
            return ky(request.url, {
              ...options,
              headers: {
                ...options.headers,
                Authorization: `Bearer ${tokenRefreshResult.token}`,
              },
            });
          }
        }

        return response; // default return
      },
    ],
  },
});
