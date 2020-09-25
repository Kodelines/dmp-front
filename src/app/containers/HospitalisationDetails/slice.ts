import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the HospitalisationDetails container
export const initialState: ContainerState = {};

const hospitalisationDetailsSlice = createSlice({
  name: 'hospitalisationDetails',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = hospitalisationDetailsSlice;
