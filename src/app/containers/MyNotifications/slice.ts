import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the myNotifications container
export const initialState: ContainerState = {};

const myNotificationsSlice = createSlice({
  name: 'myNotifications',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = myNotificationsSlice;
