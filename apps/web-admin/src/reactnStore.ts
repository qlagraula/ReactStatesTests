export interface CounterState {
  counts: number[];
  label: string;
}

export const incrementReducer = (
  global: CounterState,
  dispatch: any,
  by: number,
) => ({
  counts: [global.counts[0] + by],
});

export const decrementReducer = (
  global: CounterState,
  dispatch: any,
  by: number,
) => ({
  counts: [global.counts[0] - by],
});

export const setLabelReducer = (global: CounterState) => ({
  label: global.label ? '' : 'Reactn',
});

/*
  - Not maintained anymore
  - Wrongly typed
  - Syntax looks promising
  - Well integrated with redux dev tools
  - Re-renders cannot be optimized
  - Should be accessible from outside component but cannot succeed
*/
