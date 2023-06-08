import { RootState } from '../../redux/store';

export const getProfileData = (state: RootState) => state.profile;
export const getUserName = (state: RootState) => state.profile.userName;

export const profileSelectors = {
  getProfileData,
  getUserName,
};
