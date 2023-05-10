import { useActor, useInterpret, useSelector } from '@xstate/react';
import { PropsWithChildren, useContext } from 'react';
import {
  counterMachine,
  GlobalStateContext,
  countSelector,
  labelSelector,
  dividedCounterSimpleSelector,
  dividedCounterSelector,
} from './xstateStore';

export const GlobalStateProvider = (props: PropsWithChildren) => {
  const service = useInterpret(counterMachine);

  return (
    <GlobalStateContext.Provider value={{ service }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export const XStateCounterValue = () => {
  const globalServices = useContext(GlobalStateContext);
  const count = useSelector(globalServices.service, countSelector);

  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      Value: {count}
    </div>
  );
};

export const XStateCounterLabel = () => {
  const globalServices = useContext(GlobalStateContext);
  const label = useSelector(globalServices.service, labelSelector);

  return <div>{label}</div>;
};

export const XStateCounter = () => {
  const globalServices = useContext(GlobalStateContext);
  const [state, send] = useActor(globalServices.service);

  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center' }}>
      <button onClick={() => send({ type: 'INCREASE', by: 1 })}>
        Increment
      </button>
      <button onClick={() => send({ type: 'DECREASE', by: 1 })}>
        Decrement
      </button>
      <button onClick={() => send({ type: 'TOGGLE' })}>Toggle Label</button>
    </div>
  );
};

export const XStateDividedCounterSimple = () => {
  const globalServices = useContext(GlobalStateContext);
  const dividedCount = useSelector(
    globalServices.service,
    dividedCounterSimpleSelector,
  );
  console.log('render XState simple', dividedCount);
  return <div>Simple: {dividedCount}</div>;
};

export const XStateDividedCounter = () => {
  const globalServices = useContext(GlobalStateContext);
  const dividedCounts = useSelector(
    globalServices.service,
    dividedCounterSelector,
  );
  console.log('render XState', dividedCounts[0]);
  return <div>Array: {dividedCounts[0]}</div>;
};
