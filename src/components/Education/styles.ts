import styled from 'styled-components'

const EducationStyles = {
  EducationContainer: styled.div`
    padding: 1rem;
  `,
  School: styled.h3`
    margin: 0;
  `,
  Degree: styled.h4`
    margin: 0.5rem 0;
  `,
  Details: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
  DetailItem: styled.span`
    font-size: 0.9rem;
  `
}

export default EducationStyles 