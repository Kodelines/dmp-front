import { createSlice } from 'utils/@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';

import { ContainerState } from './types';

// The initial state of the CreateUser container
export const initialState: ContainerState = {};

const createUserSlice = createSlice({
  name: 'createUser',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = createUserSlice;
