import styled from 'styled-components'
import { theme } from '../../styles/theme'

const HeaderStyles = {
  HeaderContainer: styled.header`
    display: flex;
    flex-direction: column;
    gap: ${ theme.spacing.small};
  `,

  Name: styled.h1`
    margin: 0;
    font-size: ${  theme.fontSize.xlarge};
    color: ${  theme.color.primary};
  `,

  Title: styled.h2`
    margin: 0;
    font-size: ${  theme.fontSize.large};
    color: ${  theme.color.secondary};
  `,

  ContactInfo: styled.div`
    display: flex;
    gap: ${  theme.spacing.medium};
    flex-wrap: wrap;
  `,

  ContactItem: styled.span`
    display: flex;
    align-items: center;
    gap: ${  theme.spacing.xsmall};
  `
}

export default HeaderStyles 