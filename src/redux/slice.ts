import axios from 'axios';
import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserProps, UserState } from '@ts/interfaces';

const initialState: UserState = {
  name: '',
  leaders: [],
  loading: false,
  history: [],
  currentDay: 0,
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
      state.history[state.currentDay] = state.history[state.currentDay]
        ?.map((user) => {
          return user.id === action.payload.id ? action.payload : user;
        })
        .sort((a: UserProps, b: UserProps) => {
          return b.score - a.score;
        });
    },
    createUser(state, action: PayloadAction<UserProps>) {
      if (state.history[state.currentDay]) {
        const arr = state.history[state.currentDay];
        if (Array.isArray(arr)) {
          const newLeaders = [...arr, action.payload].sort(
            (a, b) => b.score - a.score,
          );

          state.history[state.currentDay] = newLeaders;
        }
      }
    },

    nextDay(state) {
      const nextDay = state.currentDay + 1;
      const nextDayLeaders = state.history[state.currentDay]
        ?.map((user) => {
          return { ...user, score: Math.round(Math.random() * 100) };
        })
        .sort((a, b) => b.score - a.score);

      state.currentDay = nextDay;
      state.history = [...state.history, nextDayLeaders];
    },
    goBack(state) {
      state.currentDay -= 1;
    },
    goAhead(state) {
      state.currentDay += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.history = [payload];
      state.loading = false;
    });
  },
});

export const { updateUser, createUser, nextDay, goBack, goAhead } =
  leaderboardSlice.actions;

export default leaderboardSlice.reducer;
