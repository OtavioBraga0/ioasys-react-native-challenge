import React from 'react';
import {Provider} from 'react-redux';
import {EngageStore} from '../domain/DomainLayer';
import {Routes} from './Routes';

export type MainProps = {
  store: EngageStore;
};

export const Main: React.FC<MainProps> = (props: MainProps) => {
  const {store} = props;

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
