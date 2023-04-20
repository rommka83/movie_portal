import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filters from './filterSlice';
import changeTrailerPlayer from './trailerPlayerSlice';
import ActorsCreatorsModal from './ActorsCreatorsModalSlice';
import { movie } from './movieRequest';

export const store = configureStore({
  reducer: {
    filters: filters.reducer,
    changeTrailerPlayer: changeTrailerPlayer.reducer,
    ActorsCreatorsModal: ActorsCreatorsModal.reducer,
    movie: movie.reducer,
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
