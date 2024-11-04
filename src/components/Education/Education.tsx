import React from 'react'
import EducationStyles from './styles'
import { DetailsList } from '../common/DetailsList'

interface EducationProps {
  school: string
  degree: string
  details: {
    period: string
    location?: string
    gpa?: string
    achievements?: string[]
  }
}

const { EducationContainer, School, Degree, Details, DetailItem } = EducationStyles

export const Education: React.FC<EducationProps> = ({
    school = 'University',
    degree = 'Academic Degree',
    details = {
      period: '',
      location: '',
      gpa: '',
      achievements: []
    }
  }) =>
    <EducationContainer>
      <School>{school}</School>
      <Degree>{degree}</Degree>
      <Details>
        <DetailsList details={details} ItemComponent={DetailItem} />
      </Details>
    </EducationContainer> 