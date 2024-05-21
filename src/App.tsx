import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Transactions } from "./pages/transactions"
import { Summary } from "./components/Summary"


export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Transactions />
      <Summary />
    </ThemeProvider>
  )
}

export default App
