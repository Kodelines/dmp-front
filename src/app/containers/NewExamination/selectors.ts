import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.newExamination || initialState;

export const selectNewExamination = createSelector(
  [selectDomain],
  newExaminationState => newExaminationState,
);
