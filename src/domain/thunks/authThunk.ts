import {Dispatch} from 'redux';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {EngageState} from '../DomainLayer';
import {AuthCredentials, DomainUser} from '../entities/user';
import {signIn} from '../../data/services/auth';
import {setError} from '../ducks/authReducer';

export interface ThunkApi {
  dispatch: Dispatch;
  state: EngageState;
  rejectValue: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export const signInThunk = createAsyncThunk<
  {user: DomainUser; credentials: AuthCredentials},
  LoginCredentials,
  ThunkApi
>('thunk/auth/signInAsync', async ({email, password}, thunkAPI) => {
  try {
    return await signIn(email, password);
  } catch (error) {
    thunkAPI.dispatch(setError(error.response.data.errors[0]));

    return thunkAPI.rejectWithValue(error.message);
  }
});
