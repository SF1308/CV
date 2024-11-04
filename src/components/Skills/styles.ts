import styled from 'styled-components'

const SkillsContainer = styled.div`
  padding: 1rem;
`

const SkillsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const SkillsGrid = styled.div`
  display: grid;
  gap: 1rem;
`

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SkillName = styled.span`
  font-weight: 500;
`

const SkillBar = styled.div`
  background-color: #e0e0e0;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
`

const SkillLevel = styled.div<{ level: number }>`
  height: 100%;
  width: ${props => props.level}%;
  background-color: #2196f3;
  transition: width 0.3s ease;
`

const SkillsStyles = {
  SkillsContainer,
  SkillsTitle,
  SkillsGrid,
  SkillItem,
  SkillName,
  SkillBar,
  SkillLevel
}

export default SkillsStyles 