import React from 'react'
import SkillsStyles from './styles'

interface SkillsProps {
  skills: {
    name: string
    level: number
  }[]
}

const { 
  SkillsContainer, 
  SkillsTitle, 
  SkillsGrid, 
  SkillItem, 
  SkillName, 
  SkillBar, 
  SkillLevel 
} = SkillsStyles

export const Skills: React.FC<SkillsProps> = ({ 
  skills = [] 
}) => 
  <SkillsContainer>
    <SkillsTitle>Skills</SkillsTitle>
    <SkillsGrid>
      {skills.map((skill, index) => (
        <SkillItem key={index}>
          <SkillName>{skill.name}</SkillName>
          <SkillBar>
            <SkillLevel level={skill.level} />
          </SkillBar>
        </SkillItem>
      ))}
    </SkillsGrid>
  </SkillsContainer> 