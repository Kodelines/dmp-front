import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the NewHospitalisation container
export const initialState: ContainerState = {};

const newHospitalisationSlice = createSlice({
  name: 'newHospitalisation',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = newHospitalisationSlice;
