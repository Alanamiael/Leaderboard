import { configureStore } from '@reduxjs/toolkit';
import leaderboardSlice from './slice';

export const store = configureStore({
  reducer: {
    leaderboard: leaderboardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
