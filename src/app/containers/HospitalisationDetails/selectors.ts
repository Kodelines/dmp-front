import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.hospitalisationDetails || initialState;

export const selectHospitalisationDetails = createSelector(
  [selectDomain],
  hospitalisationDetailsState => hospitalisationDetailsState,
);
