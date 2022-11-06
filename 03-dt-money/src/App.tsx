import { ThemeProvider } from "styled-components";
import { TransacionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransacionsProvider>
        <Transactions />
      </TransacionsProvider>
    </ThemeProvider>
  );
}
