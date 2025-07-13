import React from "react";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import Navigation from "@/navigation";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
