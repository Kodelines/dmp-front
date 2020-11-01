import { createSlice } from 'utils/@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';

import { ContainerState } from './types';

// The initial state of the OpenUserDoc container
export const initialState: ContainerState = {};

const ppenUserDocSlice = createSlice({
  name: 'openUserDoc',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = ppenUserDocSlice;
