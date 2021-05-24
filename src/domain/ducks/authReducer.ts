import {
  createReducer,
  createAction,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit';
import {
  NOT_LOGGED_IN_USER,
  DomainUser,
  AuthCredentials,
} from '../entities/user';
import {PayloadActionCreator} from '@reduxjs/toolkit/src/createAction';
import {signInThunk} from '../thunks/authThunk';
import {EngageState} from '../DomainLayer';

export type AuthActionsType =
  | PayloadAction<DomainUser>
  | PayloadAction<null>
  | PayloadAction<boolean>;

export interface AuthState {
  user: DomainUser | null;
  credentials: AuthCredentials;
  error: string;
  isLoading: boolean;
}

export const AUTH_INITIAL_STATE: AuthState = {
  user: NOT_LOGGED_IN_USER,
  credentials: {
    ['access-token']: '',
    client: '',
    uid: '',
  },
  error: '',
  isLoading: false,
};

export const authSelector = (state: EngageState): AuthState => state.auth;

export const setLoading: PayloadActionCreator<boolean> = createAction(
  'duck/auth/setLoading',
);

export const setError: PayloadActionCreator<string> =
  createAction('duck/auth/setError');

export const clearError: PayloadActionCreator<void> = createAction(
  'duck/auth/clearError',
);

export const signOut: PayloadActionCreator<void> =
  createAction('duck/auth/signOut');

function handleSignInThunk(
  state: AuthState,
  action: PayloadAction<{user: DomainUser; credentials: AuthCredentials}>,
): AuthState {
  return {
    ...state,
    isLoading: false,
    user: action.payload.user,
    credentials: action.payload.credentials,
    error: '',
  };
}

function handleSignOutThunk(state: AuthState): AuthState {
  return {
    ...state,
    ...AUTH_INITIAL_STATE,
  };
}

function handleSetError(
  state: AuthState,
  action: PayloadAction<string>,
): AuthState {
  return {
    ...state,
    error: action.payload,
  };
}

function handleClearError(state: AuthState): AuthState {
  return {
    ...state,
    error: '',
  };
}

function handlePendingThunk(state: AuthState): AuthState {
  return {
    ...state,
    isLoading: true,
  };
}

function handleRejectedThunk(state: AuthState): AuthState {
  return {
    ...state,
    isLoading: false,
  };
}

export const authReducer: Reducer<AuthState, AuthActionsType> = createReducer(
  AUTH_INITIAL_STATE,
  {
    [signInThunk.pending.type]: handlePendingThunk,
    [signInThunk.rejected.type]: handleRejectedThunk,
    [signInThunk.fulfilled.type]: handleSignInThunk,
    [setError.type]: handleSetError,
    [clearError.type]: handleClearError,
    [signOut.type]: handleSignOutThunk,
  },
);
