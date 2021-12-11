import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { theme, globalStyles, ThemeProps } from '@ory/themes'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle((props: ThemeProps) =>
  globalStyles(props)
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-testid="app-react">
      <ThemeProvider
        theme={extendTheme({
          initialColorMode: 'dark',
          useSystemColorMode: false
        })}
      >
        <ChakraProvider>
          <GlobalStyle />
          <Component {...pageProps} />
          <ToastContainer />
        </ChakraProvider>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
