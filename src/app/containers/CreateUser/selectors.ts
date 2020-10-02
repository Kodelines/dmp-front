import { RootState } from 'types';

import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.createUser || initialState;

export const selectCreateUser = createSelector(
  [selectDomain],
  createUserState => createUserState,
);
