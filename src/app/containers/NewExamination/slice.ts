import { createSlice } from 'utils/@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';

import { ContainerState } from './types';

// The initial state of the NewExamination container
export const initialState: ContainerState = {};

const newExaminationSlice = createSlice({
  name: 'newExamination',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = newExaminationSlice;
