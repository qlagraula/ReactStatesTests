import { createContext } from 'react';
import { assign, createMachine } from 'xstate';

const initialState = {
  counts: [0],
  label: 'XState',
};

type Event =
  | { type: 'INCREASE'; by: number }
  | { type: 'DECREASE'; by: number }
  | { type: 'TOGGLE' };

export const counterMachine = createMachine<typeof initialState, Event>({
  predictableActionArguments: true,
  id: 'state',
  context: initialState,
  initial: 'counter',
  states: {
    counter: {
      on: {
        INCREASE: {
          actions: assign((context, event) => ({
            counts: [context.counts[0] + event.by],
          })),
        },
        DECREASE: {
          actions: assign((context, event) => ({
            counts: [context.counts[0] - event.by],
          })),
        },
        TOGGLE: {
          actions: assign(context => ({
            label: context.label ? '' : initialState.label,
          })),
        },
      },
    },
  },
});

export const GlobalStateContext = createContext({} as any);

export const countSelector = (state: typeof counterMachine) => {
  return state.context.counts[0];
};

export const labelSelector = (state: typeof counterMachine) => {
  return state.context.label;
};

export const dividedCounterSimpleSelector = (state: typeof counterMachine) => {
  return Math.round(state.context.counts[0] / 2);
};

export const dividedCounterSelector = (state: typeof counterMachine) => {
  return state.context.counts.map((count: number) => Math.round(count / 2));
};
