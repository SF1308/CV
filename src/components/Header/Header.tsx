import React from 'react'
import HeaderStyles from './styles'
import { HeaderContent } from '../../types/schema'
import { ContactInfo as ContactInfoComponent } from './components/ContactInfo'


const { HeaderContainer, Name, Title } = HeaderStyles

export const Header: React.FC<HeaderContent> = ({
  title = '',
  profileSummary = '',
  name = '',
  location = '',
  socialLinks = [],
}) => {

  return (<HeaderContainer>

    <Title>{title}</Title>
    <Name>{name}</Name>
      {profileSummary && (
        <div>
          {profileSummary}
        </div>
      )}
    <ContactInfoComponent location={location} socialLinks={socialLinks} />
  </HeaderContainer>)
}


