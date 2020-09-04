import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.activate || initialState;

export const selectActivate = createSelector(
  [selectDomain],
  activateState => activateState,
);
