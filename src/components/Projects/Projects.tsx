import React from 'react'
import ProjectStyles from './styles'

interface ProjectItem {
  name: string
  description: string
  technologies: string[]
  link?: string
  startDate?: string
  endDate?: string
}

interface ProjectsProps {
  projects: ProjectItem[]
}

const { 
  ProjectContainer, 
  ProjectCard, 
  ProjectName, 
  ProjectDescription, 
  TechStack, 
  TechItem,
  ProjectDate 
} = ProjectStyles

export const Projects: React.FC<ProjectsProps> = ({ 
    // Default empty array if no projects provided
    projects = [] 
  }) => 
      <ProjectContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            {/* Project title with optional link */}
            <ProjectName>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              ) : project.name}
            </ProjectName>

            {/* Display date range if available */}
            {(project.startDate || project.endDate) && (
              <ProjectDate>
                {project.startDate} - {project.endDate || 'Present'}
              </ProjectDate>
            )}

            <ProjectDescription>{project.description}</ProjectDescription>

            {/* Technologies used in project */}
            <TechStack>
              {project.technologies.map((tech, idx) => (
                <TechItem key={idx}>{tech}</TechItem>
              ))}
            </TechStack>
          </ProjectCard>
        ))}
      </ProjectContainer>

export default Projects 