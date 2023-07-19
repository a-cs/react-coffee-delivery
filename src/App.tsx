import { ThemeProvider, StyleSheetManager } from 'styled-components'
import { defaultTheme } from './components/styles/theme/default'
import { GlobalStyle } from './components/styles/global'
import isPropValid from '@emotion/is-prop-valid'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <BrowserRouter>
                    <CartContextProvider>
                        <Router />
                    </CartContextProvider>
                </BrowserRouter>
            </StyleSheetManager>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
