import {LoginRequest, LoginResponse} from "@/model/auth";

import {ApiClient} from "../ApiClient";
import {ApiEndPoints} from "../ApiEndPoints";

export const loginUser = async (
  request: LoginRequest,
): Promise<LoginResponse> => {
  const response = await ApiClient.post(ApiEndPoints.userLogin, {
    json: {
      email: request.email,
      password: request.password,
    },
  }).json<LoginResponse>();
  return response;
};
