import { createSlice } from '@reduxjs/toolkit';
import { UserProps } from 'components/services/interfaces';
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

const leaderboardSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // nameEdit(state, action) {
    //   const { id, name } = action.payload;
    //   const user = state.find((user: UserProps) => user.id === id);
    //   if (user) {
    //     user.name = name;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.leaders = payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
  },
});

// export const {} = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
