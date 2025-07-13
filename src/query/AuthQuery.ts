import {useMutation} from "@tanstack/react-query";

import {LoginRequest, LoginResponse} from "@/model/auth";
import {loginUser} from "@/service/network/api";

export const useLoginQuery = () => {
  const loginMutation = useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (request: LoginRequest) => loginUser(request),
  });
  return {
    callLogin: loginMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    loginData: loginMutation.data,
    loginError: loginMutation.error,
  };
};
