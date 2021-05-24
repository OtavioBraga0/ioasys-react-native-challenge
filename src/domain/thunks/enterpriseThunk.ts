import {Dispatch} from 'redux';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {EngageState} from '../DomainLayer';
import {Enterprise} from '../entities/enterprise';
import {
  getDetailedEnterprise,
  getEnterprises,
  filterEnterprises,
} from '../../data/services/enterprises';
import {signOut} from '../ducks/authReducer';

export interface ThunkApi {
  dispatch: Dispatch;
  state: EngageState;
  rejectValue: string;
}

export const filterEnterprisesThunk = createAsyncThunk<
  Enterprise[],
  {search: string; type: number},
  ThunkApi
>('thunk/enterprise/filterEnterprise', async ({search, type}, thunkAPI) => {
  try {
    const {enterprises} = await filterEnterprises(search, type, {
      ...thunkAPI.getState().auth.credentials,
    });

    return enterprises;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(signOut());
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getEnterprisesThunk = createAsyncThunk<
  Enterprise[],
  void,
  ThunkApi
>('thunk/enterprise/getEnterprise', async (_, thunkAPI) => {
  try {
    const {enterprises} = await getEnterprises({
      ...thunkAPI.getState().auth.credentials,
    });

    return enterprises;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(signOut());
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getDetailedEnterpriseThunk = createAsyncThunk<
  Enterprise,
  number,
  ThunkApi
>('thunk/enterprise/getDetailedEnterprise', async (enterpriseId, thunkAPI) => {
  try {
    const {enterprise} = await getDetailedEnterprise(enterpriseId, {
      ...thunkAPI.getState().auth.credentials,
    });

    return enterprise;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(signOut());
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});
