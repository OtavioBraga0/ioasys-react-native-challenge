import axios from 'axios';
import {AuthCredentials, DomainUser} from '../../domain/entities/user';

export async function signIn(
  email: string,
  password: string,
): Promise<{user: DomainUser; credentials: AuthCredentials}> {
  const user = await axios.post('/users/auth/sign_in', {
    email,
    password,
  });
  return {
    user: user.data,
    credentials: {
      'access-token': user.headers['access-token'],
      client: user.headers.client,
      uid: user.headers.uid,
    },
  };
}
