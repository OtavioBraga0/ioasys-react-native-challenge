import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {styles} from '../layout/components/Input';
import {colors} from '../layout/constants';

interface InputProps extends TextInputProps {
  icon: string;
}

export const Input: React.FC<InputProps> = ({icon, ...rest}) => {
  return (
    <View style={styles.label}>
      <FeatherIcon name={icon} color={colors.color2} style={styles.icon} />
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};
