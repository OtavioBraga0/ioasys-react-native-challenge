import {ParamListBase} from '@react-navigation/routers';
import {StackNavigationProp} from '@react-navigation/stack';
import {Dispatch, useCallback, useEffect, useReducer} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, setError, signOut} from '../../domain/ducks/authReducer';
import {Email} from '../../domain/entities/email';
import {signInThunk} from '../../domain/thunks/authThunk';
import {ROUTES} from '../Routes';
// import {ROUTES} from '../Routes';

type UseAuth = {
  authInfo: AuthInfo;
  changeAuthInfo: Dispatch<Info>;
  actions: {
    handleSignIn: () => void;
    handleSignOut: () => void;
  };
};

type UseAuthProps = {
  navigation: StackNavigationProp<ParamListBase, 'Auth' | 'Home'>;
};

type Info = {
  [key: string]: string;
};

type AuthInfo = {
  email: string;
  password: string;
};

const NEW_AUTH: AuthInfo = {
  email: 'testeapple@ioasys.com.br',
  password: '12341234',
};

export const useAuth = ({navigation}: UseAuthProps): UseAuth => {
  const dispatch = useDispatch();
  const {credentials} = useSelector(authSelector);

  const reducer = (auth: AuthInfo, info: Info): AuthInfo => ({
    ...auth,
    ...info,
  });

  const [authInfo, changeAuthInfo] = useReducer(reducer, {
    ...NEW_AUTH,
  });

  useEffect(() => {
    if (credentials['access-token']) {
      navigation.navigate(ROUTES.HOME);
    } else {
      navigation.navigate(ROUTES.AUTH);
    }
  }, [credentials, navigation]);

  const handleSignIn = useCallback(() => {
    try {
      const emailIsValid = new Email(authInfo.email).validate();

      if (!emailIsValid) {
        throw new Error('Invalid Email');
      }

      dispatch(signInThunk({...authInfo}));
    } catch (error) {
      dispatch(setError(error));
    }
  }, [dispatch, authInfo]);

  const handleSignOut = useCallback(() => {
    try {
      dispatch(signOut());
    } catch (error) {
      dispatch(setError(error));
    }
  }, [dispatch]);

  return {
    authInfo,
    changeAuthInfo,
    actions: {
      handleSignIn,
      handleSignOut,
    },
  };
};
