import { RootState } from 'types';

import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.openUserDoc || initialState;

export const selectOpenUserDoc = createSelector(
  [selectDomain],
  OpenUserDocState => OpenUserDocState,
);
