import { shallow } from 'zustand/shallow';
import {
  dividedCountsSelectorSimple,
  dividedCountsSelector,
} from './zustandStore';
import { useCountStore } from './zustandStore';

export const ZustandCounterValue = () => {
  const counts = useCountStore(state => state.counts);

  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      Value: {counts[0]}
    </div>
  );
};

export const ZustandCounterLabel = () => {
  const label = useCountStore(state => state.label);
  return <div>{label}</div>;
};

export const ZustandCounter = () => {
  const increase = useCountStore(state => state.increase);
  const decrease = useCountStore(state => state.decrease);
  const toggleLabel = useCountStore(state => state.toggleLabel);

  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      <button onClick={() => increase(1)}>Increment</button>
      <button onClick={() => decrease(1)}>Decrement</button>
      <button onClick={() => toggleLabel()}>Toggle Label</button>
    </div>
  );
};

export const ZustandDividedCounterSimple = () => {
  const dividedCount = useCountStore(dividedCountsSelectorSimple);
  console.log('render Zustand simple', dividedCount);
  return <div>Simple: {dividedCount}</div>;
};

export const ZustandDividedCounter = () => {
  const dividedCounts = useCountStore(dividedCountsSelector, shallow);
  console.log('render Zustand', dividedCounts[0]);
  return <div>Array: {dividedCounts[0]}</div>;
};
