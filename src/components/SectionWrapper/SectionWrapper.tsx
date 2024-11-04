import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

interface SectionWrapperProps {
  title: string
  children: React.ReactNode
}

const StyledSection = styled.section`
  margin-bottom: ${  theme.spacing.large};
`

const Title = styled.h2`
  margin-bottom: ${  theme.spacing.medium};
`

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {children}
    </StyledSection>
  )
} 