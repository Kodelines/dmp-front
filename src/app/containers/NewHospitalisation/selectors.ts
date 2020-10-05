import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.newHospitalisation || initialState;

export const selectNewHospitalisation = createSelector(
  [selectDomain],
  newHospitalisationState => newHospitalisationState,
);
