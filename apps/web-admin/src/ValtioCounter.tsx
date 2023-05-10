import { useSnapshot } from 'valtio';

import {
  countState,
  dividedCountState,
  dividedCountStateSimple,
} from './valtioStore';

export const ValtioCounterValue = () => {
  const counts = useSnapshot(countState).count;

  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      Value: {counts[0]}
    </div>
  );
};

export const ValtioCounterLabel = () => {
  const { label } = useSnapshot(countState);
  return <div>{label}</div>;
};

export const ValtioCounter = () => {
  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      <button onClick={() => countState.count[0]++}>Increment</button>
      <button onClick={() => countState.count[0]--}>Decrement</button>
      <button
        onClick={() => (countState.label = countState.label ? '' : 'Valtio')}
      >
        Toggle Label
      </button>
    </div>
  );
};

export const ValtioDividedCounterSimple = () => {
  const dividedCount = useSnapshot(dividedCountStateSimple).divided;
  // eslint-disable-next-line no-console
  console.log('render Valtio simple', dividedCount);
  return <div>Simple: {dividedCount}</div>;
};

export const ValtioDividedCounter = () => {
  const dividedCounts = useSnapshot(dividedCountState).divided;
  // eslint-disable-next-line no-console
  console.log('render Valtio', dividedCounts[0]);
  return <div>Array: {dividedCounts[0]}</div>;
};
