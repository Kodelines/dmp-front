import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.doctorsList || initialState;

export const selectDoctorsList = createSelector(
  [selectDomain],
  doctorsListState => doctorsListState,
);
