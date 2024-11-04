import styled from 'styled-components'

const ProjectStyles = {
  ProjectContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,

  ProjectCard: styled.div`
    padding: 1rem;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,

  ProjectName: styled.h3`
    margin: 0;
    font-size: 1.2rem;
    color: #2c3e50;
    
    a {
      color: inherit;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  `,

  ProjectDescription: styled.p`
    margin: 0.5rem 0;
    color: #34495e;
  `,

  TechStack: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  `,

  TechItem: styled.span`
    padding: 0.25rem 0.5rem;
    background-color: #f0f2f5;
    border-radius: 4px;
    font-size: 0.9rem;
    color: #516175;
  `,

  ProjectDate: styled.div`
    font-size: 0.9rem;
    color: #7f8c8d;
    margin-top: 0.25rem;
  `
}

export default ProjectStyles 