import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filters from './filterSlice';
import changeTrailerPlayer from './trailerPlayerSlice';

export const store = configureStore({
  reducer: {
    filters: filters.reducer,
    changeTrailerPlayer: changeTrailerPlayer.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
