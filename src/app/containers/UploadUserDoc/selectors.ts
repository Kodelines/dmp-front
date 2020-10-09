import { RootState } from 'types';

import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.uploadUserDoc || initialState;

export const selectUploadUserDoc = createSelector(
  [selectDomain],
  UploadUserDocState => UploadUserDocState,
);
