import { RootState } from 'types';

import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.examinationDetails || initialState;

export const selectExaminationDetails = createSelector(
  [selectDomain],
  examinationDetailsState => examinationDetailsState,
);
