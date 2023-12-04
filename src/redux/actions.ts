import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserProps } from 'components/services/interfaces';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (): Promise<UserProps[] | undefined> => {
    try {
      const url = `https://655cc4e325b76d9884fdebd4.mockapi.io/LeaderboardData`;
      const { data } = await axios.get(url);
      const APIData: UserProps[] = data;
      const sortedData = APIData.sort((a: UserProps, b: UserProps) => {
        return b.score - a.score;
      });
      return sortedData;
    } catch (error) {
      console.log(error);
    }
  },
);
