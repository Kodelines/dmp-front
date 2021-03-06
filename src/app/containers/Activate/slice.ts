import { createSlice } from 'utils/@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';

import { ContainerState } from './types';

// The initial state of the Activate container
export const initialState: ContainerState = {};

const activateSlice = createSlice({
  name: 'activate',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = activateSlice;
