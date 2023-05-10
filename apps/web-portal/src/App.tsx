import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Zodios } from '@zodios/core';
import { ZodiosHooks } from '@zodios/react';
import { api } from 'api';

const baseUrl = 'http://localhost:5000';
const zodios = new Zodios(baseUrl, api);
const zodiosHooks = new ZodiosHooks('api', zodios);

function App() {
  const [count, setCount] = useState(0);
  const id = -1;
  const {
    data: user,
    isLoading,
    error,
  } = zodiosHooks.useGetUser({
    params: { id },
  });

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
      <div className="card">
        {isLoading ? <div>Loading...</div> : null}
        {error ? <div>Error: {(error as Error).message}</div> : null}
        {!!user && <div>User: {JSON.stringify(user)}</div>}
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
