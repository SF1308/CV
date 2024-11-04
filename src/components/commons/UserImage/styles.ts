import styled from 'styled-components';

interface UserImageContainerProps {
  size: number;
}

export const UserImageContainer = styled.div<UserImageContainerProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`; 