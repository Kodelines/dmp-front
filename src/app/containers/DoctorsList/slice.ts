import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the DoctorsList container
export const initialState: ContainerState = {};

const doctorsListSlice = createSlice({
  name: 'doctorsList',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = doctorsListSlice;
