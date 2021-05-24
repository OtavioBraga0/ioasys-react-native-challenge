import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Title, Container} from '../layout/components/Type';

export interface TypeProps extends TouchableOpacityProps {
  name: string;
  selected: boolean;
}

export const Type: React.FC<TypeProps> = ({name, selected, ...rest}) => {
  return (
    <Container selected={selected} {...rest}>
      <Title selected={selected}>{name}</Title>
    </Container>
  );
};
