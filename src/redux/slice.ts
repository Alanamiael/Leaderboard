import axios from 'axios';
import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserProps } from '@ts/interfaces';

export interface UserState {
  name: string;
  leaders: UserProps[] | [] | undefined;
  loading: boolean;
}

const initialState: UserState = {
  name: '',
  leaders: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  // eslint-disable-next-line consistent-return
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
const leaderboardSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.leaders = state.leaders
        ?.map((user) => {
          return user.id === action.payload.id ? action.payload : user;
        })
        .sort((a: UserProps, b: UserProps) => {
          return b.score - a.score;
        });
    },
    createUser(state, action: PayloadAction<UserProps>) {
      if (state.leaders) {
        const newLeaders = [...state.leaders, action.payload].sort(
          (a, b) => b.score - a.score,
        );

        state.leaders = newLeaders;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.leaders = payload;
      state.loading = false;
    });
  },
});

export const { updateUser, createUser } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
