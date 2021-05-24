import {
  createReducer,
  createAction,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit';
import {PayloadActionCreator} from '@reduxjs/toolkit/src/createAction';
import {EngageState} from '../DomainLayer';
import {Enterprise} from '../entities/enterprise';
import {
  getDetailedEnterpriseThunk,
  getEnterprisesThunk,
  filterEnterprisesThunk,
} from '../thunks/enterpriseThunk';

export type EnterpriseActionsType =
  | PayloadAction<Enterprise[]>
  | PayloadAction<null>
  | PayloadAction<boolean>;

export interface EnterpriseState {
  enterprises: Enterprise[];
  filteredEnterprises: Enterprise[];
  detailedEnterprise: Enterprise | null;
  error: string;
  isLoading: boolean;
}

export const ENTERPRISE_INITIAL_STATE: EnterpriseState = {
  enterprises: [],
  filteredEnterprises: [],
  detailedEnterprise: null,
  error: '',
  isLoading: false,
};

export const enterpriseSelector = (state: EngageState): EnterpriseState =>
  state.enterprise;

export const setLoading: PayloadActionCreator<boolean> = createAction(
  'duck/enterprise/setLoading',
);

export const setError: PayloadActionCreator<string> = createAction(
  'duck/enterprise/setError',
);

export const clearError: PayloadActionCreator<void> = createAction(
  'duck/enterprise/clearError',
);

function handleGetEnterprisesThunk(
  state: EnterpriseState,
  action: PayloadAction<Enterprise[]>,
): EnterpriseState {
  return {
    ...state,
    enterprises: action.payload,
    filteredEnterprises: [],
    isLoading: false,
  };
}

function handleFilterEnterprisesThunk(
  state: EnterpriseState,
  action: PayloadAction<Enterprise[]>,
): EnterpriseState {
  return {
    ...state,
    filteredEnterprises: action.payload,
    isLoading: false,
  };
}

function handleGetDetailedEnterprisesThunk(
  state: EnterpriseState,
  action: PayloadAction<Enterprise>,
): EnterpriseState {
  return {
    ...state,
    detailedEnterprise: action.payload,
    isLoading: false,
  };
}

function handleSetError(
  state: EnterpriseState,
  action: PayloadAction<string>,
): EnterpriseState {
  return {
    ...state,
    error: action.payload,
    isLoading: false,
  };
}

function handleClearError(state: EnterpriseState): EnterpriseState {
  return {
    ...state,
    error: '',
  };
}

function handlePendingThunk(state: EnterpriseState): EnterpriseState {
  return {
    ...state,
    isLoading: true,
  };
}

function handleRejectedThunk(state: EnterpriseState): EnterpriseState {
  return {
    ...state,
    isLoading: false,
  };
}

export const enterpriseReducer: Reducer<
  EnterpriseState,
  EnterpriseActionsType
> = createReducer(ENTERPRISE_INITIAL_STATE, {
  [getEnterprisesThunk.pending.type]: handlePendingThunk,
  [getEnterprisesThunk.rejected.type]: handleRejectedThunk,
  [getEnterprisesThunk.fulfilled.type]: handleGetEnterprisesThunk,
  [filterEnterprisesThunk.fulfilled.type]: handleFilterEnterprisesThunk,
  [getDetailedEnterpriseThunk.fulfilled.type]:
    handleGetDetailedEnterprisesThunk,
  [getDetailedEnterpriseThunk.rejected.type]: handleRejectedThunk,
  [getDetailedEnterpriseThunk.pending.type]: handlePendingThunk,
  [setError.type]: handleSetError,
  [clearError.type]: handleClearError,
});
