import { ThemeProvider as Provider, createTheme } from "@mui/material/styles";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(204,7,30)",
    },
  },
});

export const ThemeProvider = ({ children }: Props) => {
  return <Provider theme={theme}>{children}</Provider>;
};
