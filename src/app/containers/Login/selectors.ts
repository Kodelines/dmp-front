import { RootState } from 'types';

import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.login || initialState;

export const selectLogin = createSelector(
  [selectDomain],
  loginState => loginState,
);

export const selectIsLoading = createSelector(
  [selectDomain],
  loginState => loginState.loading,
);

export const selectLoginStatus = createSelector(
  [selectDomain],
  loginState => loginState.status,
);

export const selectLoginError = createSelector(
  [selectDomain],
  loginState => loginState.error,
);
