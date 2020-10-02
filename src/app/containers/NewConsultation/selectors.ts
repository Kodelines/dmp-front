import { RootState } from 'types';

import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.newConsultation || initialState;

export const selectNewConsultation = createSelector(
  [selectDomain],
  newConsultationState => newConsultationState,
);
