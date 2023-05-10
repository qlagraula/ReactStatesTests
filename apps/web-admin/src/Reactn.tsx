import { withGlobal, useDispatch, useGlobal } from 'reactn';
import {
  CounterState,
  incrementReducer,
  decrementReducer,
  setLabelReducer,
} from './reactnStore';

export const ReactnCounterValue = withGlobal((global: CounterState) => ({
  counts: global.counts,
}))(({ counts }) => {
  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      Value: {counts[0]}
    </div>
  );
});

export const ReactnCounterLabel = () => {
  const [label] = useGlobal('label' as never);

  return <div>{label}</div>;
};

export const ReactnCounter = () => {
  const increment = useDispatch(incrementReducer);
  const decrement = useDispatch(decrementReducer);
  const setLabel = useDispatch(setLabelReducer);
  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button>
      <button onClick={() => setLabel()}>Toggle Label</button>
    </div>
  );
};

export const ReactnDividedCounterSimple = withGlobal(
  (global: CounterState) => ({
    dividedCount: Math.round(global.counts[0] / 2),
  }),
)(({ dividedCount }: any) => {
  // eslint-disable-next-line no-console
  console.log('render Reactn simple', dividedCount);
  return <div>Simple: {dividedCount}</div>;
});

export const ReactnDividedCounter = () => {
  const [dividedCounts] = useGlobal('counts' as never);

  // eslint-disable-next-line no-console
  console.log('render Reactn', dividedCounts[0]);
  return <div>Array: {Math.round(dividedCounts[0] / 2)}</div>;
};
