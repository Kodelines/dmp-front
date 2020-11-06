import { createSlice } from 'utils/@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';

import { ContainerState } from './types';

// The initial state of the Login container
export const initialState: ContainerState = {
  loading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ id: string; password: string }>) {
      state.loading = true;
    },
    loginSuccess(state) {
      state.loading = false;
      state.status = 'success';
    },
    loginError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginSlice;
