import { createSlice } from 'utils/@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';

import { ContainerState } from './types';

// The initial state of the NewConsultation container
export const initialState: ContainerState = {};

const newConsultationSlice = createSlice({
  name: 'newConsultation',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = newConsultationSlice;
