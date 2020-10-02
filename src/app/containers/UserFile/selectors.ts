import { RootState } from 'types';

import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.userFile || initialState;

export const selectUserFile = createSelector(
  [selectDomain],
  userFileState => userFileState,
);
