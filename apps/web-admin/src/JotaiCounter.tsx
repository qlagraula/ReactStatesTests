//import { atom, useAtom, useAtomValue } from 'jotai';
// V2 has re-render optimized but no devtool
import { useAtomValue, useSetAtom } from 'jotai/react';
import {
  countAtom,
  labelAtom,
  dividedCountAtomSimple,
  dividedCountAtom,
} from './jotaiStore';

export const JotaiCounterValue = () => {
  const counts = useAtomValue(countAtom);

  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      Value: {counts[0]}
    </div>
  );
};

export const JotaiCounterLabel = () => {
  const label = useAtomValue(labelAtom);
  return <div>{label}</div>;
};

export const JotaiCounter = () => {
  const setCounts = useSetAtom(countAtom);
  const setLabel = useSetAtom(labelAtom);
  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      <button onClick={() => setCounts(counts => [counts[0] + 1])}>
        Increment
      </button>
      <button onClick={() => setCounts(counts => [counts[0] - 1])}>
        Decrement
      </button>
      <button onClick={() => setLabel(label => (label ? '' : 'Jotai'))}>
        Toggle Label
      </button>
    </div>
  );
};

export const JotaiDividedCounterSimple = () => {
  const dividedCount = useAtomValue(dividedCountAtomSimple);
  // eslint-disable-next-line no-console
  console.log('render Jotai simple', dividedCount);
  return <div>Simple: {dividedCount}</div>;
};

export const JotaiDividedCounter = () => {
  const dividedCounts = useAtomValue(dividedCountAtom);
  // eslint-disable-next-line no-console
  console.log('render Jotai', dividedCounts[0]);
  return <div>Array: {dividedCounts[0]}</div>;
};
