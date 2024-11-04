// Available section types
export type SectionType = 'header' | 'skills' | 'experience' | 'education' | 'projects';

// Interfaces for the specific content of each section type
export interface HeaderContent {
    title: string;
    profileSummary: string;
    location: string;
    socialLinks: Array<{
        platform: string;
        url: string;
        icon: string;
    }>;
    icon: string;
}

export interface SkillsContent {
    category: string;
    skills: Array<{
        name: string;
        icon: string;
    }>;
    icon: string;
}

export interface ExperienceContent {
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    icon: string;
}

export interface EducationContent {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    gpa: string;
    icon: string;
}

export interface ProjectsContent {
    title: string;
    description: string;
    technologies: Array<{
        name: string;
        icon: string;
    }>;
    startDate: string;
    endDate: string;
    icon: string;
}

// mapping types with current content
export type SectionContentMap = {
    header: HeaderContent;
    skills: SkillsContent;
    experience: ExperienceContent;
    education: EducationContent;
    projects: ProjectsContent;
}

// Generic section that uses the mapping of types
/* Example implementation:
const experienceSection: Section<'experience'> = {
  id: "exp-1",
  type: "experience", 
  title: "Work Experience",
  content: {
    positions: [{
      company: "Tech Corp",
      role: "Senior Developer",
      period: "2020-Present",
      description: [
        "Led team of 5 developers",
        "Implemented new features"
      ]
    }]
  }
};
*/
export interface Section<T extends SectionType = SectionType> {
    id: string;
    type: T;
    title: string;
    content: SectionContentMap[T];
}

// Main schema
export interface Schema {
    sections: Section<SectionType>[];
}
  