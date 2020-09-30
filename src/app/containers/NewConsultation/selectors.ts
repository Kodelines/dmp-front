import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.newConsultation || initialState;

export const selectNewConsultation = createSelector(
  [selectDomain],
  newConsultationState => newConsultationState,
);
