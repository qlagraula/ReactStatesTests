import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CounterState {
  counts: number[];
  label: string;
  increase: (by: number) => void;
  decrease: (by: number) => void;
  toggleLabel: () => void;
}

const initialState = {
  counts: [0],
  label: 'Zustand',
};

export const useCountStore = create<CounterState>()(
  devtools(
    set => ({
      ...initialState,
      increase: by => set(state => ({ counts: [state.counts[0] + by] })),
      decrease: by =>
        set(state => ({ counts: [state.counts[0] - by] }), false, {
          type: 'decrease',
          by,
        }),
      toggleLabel: () =>
        set(state => ({ label: state.label ? '' : initialState.label })),
    }),
    { name: 'Zustand' },
  ),
);

export const dividedCountsSelectorSimple = (state: CounterState) => {
  return Math.round(state.counts[0] / 2);
};

export const dividedCountsSelector = (state: CounterState) => {
  return state.counts.map(count => Math.round(count / 2));
};

console.log(useCountStore.getState());

/*
  - Can optimize re-render by deep checking if the value of a selector has changed
  - Redux like but less verbose
  - Near 0 config
  - Typescript better integrated than redux
  - Full feature of redux devtool with a bit of configuration
*/
