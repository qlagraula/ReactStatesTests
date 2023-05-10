import { createSlice, configureStore, createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

const initialState = {
  counts: [0],
  label: 'Redux',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action: PayloadAction<number>) => {
      state.counts[0] = state.counts[0] + action.payload;
    },
    decrease: (state, action: PayloadAction<number>) => {
      state.counts[0] = state.counts[0] - action.payload;
    },
    toggleLabel: state => {
      state.label = state.label ? '' : initialState.label;
    },
  },
});

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const selectCount = (state: RootState) => state.counter.counts;

export const dividedCountsSelectorSimple = (state: RootState) => {
  return Math.round(state.counter.counts[0] / 2);
};

export const dividedCountsSelector = createSelector(
  (state: RootState) => state.counter.counts,
  counts => {
    return counts.map(count => Math.round(count / 2));
  },
);

console.log(counterSlice);

/*
  - Can optimize re-render by deep checking if the inputs of a selector have changed
  - Redux Toolkit largely improve readability and less verbose
  - Redux devtool
  - Most complicated for async
*/
