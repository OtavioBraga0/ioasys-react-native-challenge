import React from 'react';
import {
  Form,
  Logo,
  Main,
  SafeArea,
  SubmitButton,
  SubmitButtonText,
  Title,
} from '../layout/pages/Auth';

// @ts-ignore
import logo from '../assets/logo.png';
import {useAuth} from '../hooks/useAuth';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/routers';
import {Input} from '../components/Input';

type AuthProps = {
  navigation: StackNavigationProp<ParamListBase, 'Auth'>;
};

export const Auth: React.FC<AuthProps> = ({navigation}) => {
  const {
    changeAuthInfo,
    authInfo,
    actions: {handleSignIn},
  } = useAuth({navigation});

  return (
    <Main>
      <SafeArea>
        <Form>
          <Logo source={logo} />
          <Title>Login</Title>
          <Input
            icon="mail"
            onChangeText={(value: string) => changeAuthInfo({email: value})}
            value={authInfo.email}
            placeholder="Your Email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <Input
            icon="lock"
            onChangeText={(value: string) => changeAuthInfo({password: value})}
            value={authInfo.password}
            placeholder="Your Password"
            textContentType="password"
            secureTextEntry={true}
          />
          <SubmitButton onPress={handleSignIn}>
            <SubmitButtonText>Sign In</SubmitButtonText>
          </SubmitButton>
        </Form>
      </SafeArea>
    </Main>
  );
};
