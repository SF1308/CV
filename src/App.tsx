import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import { PageRenderer } from './components/PageRenderer/PageRenderer'
import { GlobalStyle, theme } from './styles/theme'
import i18n from './i18n/config'
import schema from './schemas/cv.json'
import { Schema } from './types/schema'

// Use a type assertion through unknown to bypass type checking
const typedSchema = schema as unknown as Schema;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <PageRenderer schema={typedSchema} />
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default App
