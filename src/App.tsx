import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes/index.routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./contexts/AuthContext";

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <AppRoutes />
        <GlobalStyle />
      </ThemeProvider>

      <ToastContainer
        theme='colored'
        position='top-right'
        closeOnClick
      />
    </AuthProvider>
  )
}
