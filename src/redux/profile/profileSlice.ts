import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TYPE_REDUCER, FAKE_DATA } from './profileConst';
import { ProfileType } from '../../types/profileTypes';

const initialState: ProfileType = FAKE_DATA;

const profileSlice = createSlice({
  name: TYPE_REDUCER,
  initialState,
  reducers: {
    setUserName: (state: ProfileType, action: PayloadAction<string>) => {
      state.userName = action.payload;
      state.avatar = action.payload.charAt(0).toLocaleUpperCase();
    },
  },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
