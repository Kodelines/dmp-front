import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.myPatients || initialState;

export const selectMyPatients = createSelector(
  [selectDomain],
  myPatientsState => myPatientsState,
);
