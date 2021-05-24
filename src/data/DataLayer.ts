import {initializeAxios} from './services';

type DataLayerInit = void;

export function initializeDataLayer(): DataLayerInit {
  initializeAxios();
}
