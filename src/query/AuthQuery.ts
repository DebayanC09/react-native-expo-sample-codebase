import {useMutation} from "@tanstack/react-query";

import {LoginRequest, LoginResponse} from "@/model/auth";
import {loginUser} from "@/service/network/api";

export const useLoginMutation = () => {
  const {mutate, isPending, data, error} = useMutation<
    LoginResponse,
    Error,
    LoginRequest
  >({
    mutationFn: (request: LoginRequest) => loginUser(request),
  });
  return {
    callLogin: mutate,
    isLoginLoading: isPending,
    loginData: data,
    loginError: error,
  };
};
