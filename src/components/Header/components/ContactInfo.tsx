import React from 'react'
import HeaderStyles from '../styles' 
import { HeaderContent } from '../../../types/schema'
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
const { ContactInfo: ContactInfoStyle, ContactItem } = HeaderStyles

export const ContactInfo: React.FC<Pick<HeaderContent, 'location' | 'socialLinks'>> = ({ location, socialLinks }) => {
  return (
    <ContactInfoStyle>
      {location && (
        <ContactItem>
          <FaMapMarkerAlt />
          {location}
        </ContactItem>
      )}
      {socialLinks.map((socialNetwork) => (
        <ContactItem key={socialNetwork.platform}>
          {(() => {
            const iconMap = {
              'github': <FaGithub />,
              'linkedin': <FaLinkedin />,
              'twitter': <FaTwitter />,
              'email': <FaEnvelope />
            };
            return iconMap[socialNetwork.platform.toLowerCase() as keyof typeof iconMap] || <i className={socialNetwork.icon} />
          })()}
          <a href={socialNetwork.url} target="_blank" rel="noopener noreferrer">
            {socialNetwork.platform}
          </a>
        </ContactItem>
      ))}
    </ContactInfoStyle>
  )
} 