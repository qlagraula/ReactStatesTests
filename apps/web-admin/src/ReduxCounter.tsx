import {
  useAppSelector,
  useAppDispatch,
  dividedCountsSelectorSimple,
  dividedCountsSelector,
  counterSlice,
} from './reduxStore';

export const ReduxCounterValue = () => {
  const counts = useAppSelector(state => state.counter.counts);

  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      Value: {counts[0]}
    </div>
  );
};

export const ReduxCounterLabel = () => {
  const label = useAppSelector(state => state.counter.label);
  return <div>{label}</div>;
};

export const ReduxCounter = () => {
  const dispatch = useAppDispatch();

  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      <button onClick={() => dispatch(counterSlice.actions.increase(1))}>
        Increment
      </button>
      <button onClick={() => dispatch(counterSlice.actions.decrease(1))}>
        Decrement
      </button>
      <button onClick={() => dispatch(counterSlice.actions.toggleLabel())}>
        Toggle Label
      </button>
    </div>
  );
};

export const ReduxDividedCounterSimple = () => {
  const dividedCount = useAppSelector(dividedCountsSelectorSimple);
  // eslint-disable-next-line no-console
  console.log('render Redux simple', dividedCount);
  return <div>Simple: {dividedCount}</div>;
};

export const ReduxDividedCounter = () => {
  const dividedCounts = useAppSelector(dividedCountsSelector);
  // eslint-disable-next-line no-console
  console.log('render Redux', dividedCounts[0]);
  return <div>Array: {dividedCounts[0]}</div>;
};
