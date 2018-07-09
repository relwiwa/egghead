import {
  SET_TAB
} from '../types';

export const selectTab = (name) => ({
  type: SET_TAB,
  payload: name
});
