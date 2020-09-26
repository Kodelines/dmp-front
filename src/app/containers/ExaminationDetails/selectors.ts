import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.examinationDetails || initialState;

export const selectExaminationDetails = createSelector(
  [selectDomain],
  examinationDetailsState => examinationDetailsState,
);
