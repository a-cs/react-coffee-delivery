import { ThemeProvider, StyleSheetManager } from 'styled-components'
import { defaultTheme } from './components/styles/theme/default'
import { GlobalStyle } from './components/styles/global'
import isPropValid from '@emotion/is-prop-valid'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </StyleSheetManager>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
