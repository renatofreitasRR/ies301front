import { ThemeProvider } from "styled-components";
import { Button } from "./components/shared/Button";
import { Input } from "./components/shared/Input";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        {/* <Login /> */}
        <Register />
      <GlobalStyle />
    </ThemeProvider>
  )
}
