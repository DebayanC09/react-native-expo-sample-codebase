import React from "react";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Toast from "react-native-toast-message";

import Navigation from "@/navigation";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Toast />
    </QueryClientProvider>
  );
}
