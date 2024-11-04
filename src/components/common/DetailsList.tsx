import React from 'react';
import { filterNonEmptyValues } from '../../utils/objectUtils';

interface DetailsListProps {
  details: Record<string, any>;
  ItemComponent: React.ComponentType<{children: React.ReactNode}>;
}

export const DetailsList: React.FC<DetailsListProps> = ({ details, ItemComponent }) => {
  const nonEmptyDetails = filterNonEmptyValues(details);
  
  return (
    <>
      {nonEmptyDetails.map(([key, value]) => (
        <ItemComponent key={key}>
          {Array.isArray(value) ? value.join(', ') : value}
        </ItemComponent>
      ))}
    </>
  );
}; 