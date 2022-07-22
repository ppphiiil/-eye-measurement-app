import React from "react";
import "./i18n";
import { useTranslation } from "react-i18next";
import { AppRouter, routes } from "../routing";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ServiceProvider } from "../common/providers/service-provider";
import { services } from "./service";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ServiceProvider services={services}>
          <AppRouter />
        </ServiceProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
