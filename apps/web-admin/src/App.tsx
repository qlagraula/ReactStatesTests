import reactLogo from './assets/react.svg';
import './App.css';
import {
  JotaiCounter,
  JotaiCounterLabel,
  JotaiCounterValue,
  JotaiDividedCounter,
  JotaiDividedCounterSimple,
} from './JotaiCounter';
import {
  ZustandCounterValue,
  ZustandCounter,
  ZustandDividedCounter,
  ZustandDividedCounterSimple,
  ZustandCounterLabel,
} from './ZustandCounter';
import {
  ReduxCounter,
  ReduxCounterLabel,
  ReduxCounterValue,
  ReduxDividedCounter,
  ReduxDividedCounterSimple,
} from './ReduxCounter';
import {
  ReactnCounter,
  ReactnCounterLabel,
  ReactnCounterValue,
  ReactnDividedCounter,
  ReactnDividedCounterSimple,
} from './Reactn';
import {
  ValtioCounter,
  ValtioCounterLabel,
  ValtioCounterValue,
  ValtioDividedCounter,
  ValtioDividedCounterSimple,
} from './ValtioCounter';
import {
  GlobalStateProvider,
  XStateCounter,
  XStateCounterLabel,
  XStateCounterValue,
  XStateDividedCounter,
  XStateDividedCounterSimple,
} from './XStateCounter';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Jotai</h2>
      <JotaiCounter />
      <JotaiCounterLabel />
      <JotaiCounterValue />
      <JotaiDividedCounterSimple />
      <JotaiDividedCounter />
      <h2>Zustand</h2>
      <ZustandCounter />
      <ZustandCounterLabel />
      <ZustandCounterValue />
      <ZustandDividedCounterSimple />
      <ZustandDividedCounter />
      <h2>Redux</h2>
      <ReduxCounter />
      <ReduxCounterLabel />
      <ReduxCounterValue />
      <ReduxDividedCounterSimple />
      <ReduxDividedCounter />
      <h2>Reactn</h2>
      <ReactnCounter />
      <ReactnCounterLabel />
      <ReactnCounterValue />
      <ReactnDividedCounterSimple />
      <ReactnDividedCounter />
      <h2>Valtio</h2>
      <ValtioCounter />
      <ValtioCounterLabel />
      <ValtioCounterValue />
      <ValtioDividedCounterSimple />
      <ValtioDividedCounter />
      <h2>XState</h2>
      <GlobalStateProvider>
        <XStateCounter />
        <XStateCounterLabel />
        <XStateCounterValue />
        <XStateDividedCounterSimple />
        <XStateDividedCounter />
      </GlobalStateProvider>
    </div>
  );
}

export default App;
