import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {ReducersMapObject} from 'redux';
import {Persistor} from 'redux-persist/es/types';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {AuthActionsType, authReducer, AuthState} from './ducks/authReducer';
import {
  EnterpriseActionsType,
  enterpriseReducer,
  EnterpriseState,
} from './ducks/enterpriseReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface EngageState {
  readonly auth: AuthState;
  readonly enterprise: EnterpriseState;
}

export type EngageActions = AuthActionsType & EnterpriseActionsType;

export type EngageStore = EnhancedStore<EngageState, EngageActions>;
const rootReducer: ReducersMapObject<EngageState, EngageActions> = {
  auth: authReducer,
  enterprise: enterpriseReducer,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer),
);

export const initializeDomainLayer = (
  preloadedState?: EngageState,
): {store: EngageStore; persistor: Persistor} => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    preloadedState,
  });
  const persistor = persistStore(store);
  return {store, persistor};
};
