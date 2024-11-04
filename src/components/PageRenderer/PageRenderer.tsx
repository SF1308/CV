import React, { Suspense } from 'react'
import { Section, SectionType } from '../../types/schema'
import { SectionWrapper } from '../SectionWrapper/SectionWrapper'
import PageRendererStyles from './styles'
import  Loader  from '../Loader/Loader'

interface PageRendererProps {
  schema: {
    sections: Section<SectionType>[]
  }
}

const { Main } = PageRendererStyles

// Component lazy loading
const ComponentMap: Record<SectionType, React.LazyExoticComponent<React.ComponentType<any>>> = {
  header: React.lazy(() => import('../Header')),
  skills: React.lazy(() => import('../Skills')),
  experience: React.lazy(() => import('../Experience')),
  education: React.lazy(() => import('../Education')),
  projects: React.lazy(() => import('../Projects')),
}



export const PageRenderer: React.FC<PageRendererProps> = ({ schema }) => {
  const renderSection = (section: Section<SectionType>) => {
    const Component = ComponentMap[section.type]
    
    if (!Component) {
      console.warn(`No component found for section type: ${section.type}`)
      return null
    }

    return (
      <SectionWrapper key={section.id} title={section.title}>
        <Suspense fallback={<Loader />}>
          <Component {...section.content} />
        </Suspense>
      </SectionWrapper>
    )
  }

  return (
    <Main>
      {schema.sections.map(renderSection)}
    </Main>
  )
}