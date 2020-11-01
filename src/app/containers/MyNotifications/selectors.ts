import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.myNotifications || initialState;

export const selectMyNotifications = createSelector(
  [selectDomain],
  myNotificationsState => myNotificationsState,
);
