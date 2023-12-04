import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserProps } from 'services/interfaces';
import { fetchUsers } from './actions';

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
// type newLeadersProps =[Symbol.iterator]() | undefined;

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
        console.log(newLeaders, 'sortedLeaders');
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
