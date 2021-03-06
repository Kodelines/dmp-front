import { createSlice } from 'utils/@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';

import { ContainerState } from './types';

// The initial state of the ExaminationDetails container
export const initialState: ContainerState = {};

const examinationDetailsSlice = createSlice({
  name: 'examinationDetails',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = examinationDetailsSlice;
