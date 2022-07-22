import { ThemeProvider as Provider, createTheme } from "@mui/material/styles";

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
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
