import {StyleSheet} from 'react-native';
import {colors} from '../constants';

export const styles = StyleSheet.create({
  label: {
    width: '100%',
    borderColor: colors.color3,
    borderStyle: 'solid',
    borderWidth: 1.5,

    marginTop: 40,

    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 1,
    paddingBottom: 1,

    borderRadius: 8,
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 16,
    color: colors.color8,

    flex: 1,
    width: '100%',
    height: 'auto',
  },
  icon: {
    fontSize: 22,
  },
});
