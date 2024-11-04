import styled from 'styled-components'
import { theme } from '../../styles/theme' 

const PageRendererStyles = {
  Main: styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${  theme.spacing.large};
  `
}

export default PageRendererStyles 