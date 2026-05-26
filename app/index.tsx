import {Redirect} from "expo-router";

import {useAuthStore} from "@/store";

export default function Index() {
  const {isLoggedIn} = useAuthStore();
  return <Redirect href={isLoggedIn ? "/(todo)" : "/(auth)/login"} />;
}
