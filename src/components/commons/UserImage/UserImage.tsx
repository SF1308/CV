import React from 'react';
import { UserImageContainer, Image } from './styles';

interface UserImageProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

export const UserImage: React.FC<UserImageProps> = ({
  src,
  alt = 'User profile image',
  size = 100,
  className
}) => {
  return (
    <UserImageContainer className={className} size={size}>
      <Image src={src} alt={alt} />
    </UserImageContainer>
  );
}; 