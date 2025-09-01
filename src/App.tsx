import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyled, { Container } from './styles'
import theme from './themes/default'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
