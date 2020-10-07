import { createSlice } from 'utils/@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';

import { ContainerState } from './types';

// The initial state of the UploadUserDoc container
export const initialState: ContainerState = {};

const uploadUserDocSlice = createSlice({
  name: 'uploadUserDoc',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = uploadUserDocSlice;
