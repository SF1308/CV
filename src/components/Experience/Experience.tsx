import React from 'react'
import ExperienceStyles from './styles'

// Defines the structure for each job position entry
interface ExperienceProps {
  positions: {
    company: string
    title: string
    startDate: string
    endDate?: string    // Optional for current positions
    location?: string
    description: string[]
  }[]
}

const { 
  ExperienceContainer, 
  Position, 
  Company, 
  JobTitle, 
  DateLocation, 
  Description, 
  BulletPoint 
} = ExperienceStyles

export const Experience: React.FC<ExperienceProps> = ({ 
  positions = [] 
}) => (
  <ExperienceContainer>
    {positions?.map((position, index) => (
      <Position key={index}>
        <Company>{position?.company || 'Company not specified'}</Company>
        <JobTitle>{position?.title || 'Title not specified'}</JobTitle>
        <DateLocation>
          {position?.startDate || 'Start date not specified'} - {position?.endDate || 'Present'}
          {position?.location ? ` | ${position.location}` : ''}
        </DateLocation>
        <Description>
          {Array.isArray(position?.description) ? (
            position.description.map((bullet, i) => (
              <BulletPoint key={i}>{bullet}</BulletPoint>
            ))
          ) : (
            <BulletPoint>No description available</BulletPoint>
          )}
        </Description>
      </Position>
    )) || <Position>No experience data available</Position>}
  </ExperienceContainer>
)

export default Experience 