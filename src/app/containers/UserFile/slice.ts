import { createSlice } from 'utils/@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';

import { ContainerState } from './types';

// The initial state of the UserFile container
export const initialState: ContainerState = {};

const userFileSlice = createSlice({
  name: 'userFile',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = userFileSlice;
