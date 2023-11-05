import { ThemeProvider } from 'styled-components'

import GlobalStyle from './assets/styles/global'
import light from './assets/styles/theme/light'
import Home from './pages/Home'

function App() {

  return (
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
  )
}

export default App
