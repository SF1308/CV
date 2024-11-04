import React from 'react'
import HeaderStyles from './styles'
import { HeaderContent } from '../../types/schema'


const { HeaderContainer, Name, Title, ContactInfo, ContactItem } = HeaderStyles

export const Header: React.FC<HeaderContent> = ({ 
    title = '',
    profileSummary = '',
    location = '',
    socialLinks = [],
    icon = ''
  }) => 
      <HeaderContainer>

        <Title>{title}</Title>
        <ContactInfo>
          {profileSummary && (
            <ContactItem>
              {profileSummary}
            </ContactItem>
          )}
          {location && (
            <ContactItem>
              {location}
            </ContactItem>
          )}
          {socialLinks.map((link) => (
            <ContactItem key={link.platform}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            </ContactItem>
          ))}
        </ContactInfo>
      </HeaderContainer>


