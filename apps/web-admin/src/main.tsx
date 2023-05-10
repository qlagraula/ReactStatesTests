import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useAtomsDevtools } from 'jotai-devtools';
import { Provider } from 'react-redux';
import { store } from './reduxStore';
import addReactNDevTools from 'reactn-devtools';
import { createProvider } from 'reactn';

const AtomsDevtools = () => {
  useAtomsDevtools('web-admin');
  return null;
};
const ReactnProvider = createProvider({ counts: [0], label: 'Reactn' });
addReactNDevTools(ReactnProvider);

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <ReactnProvider>
      <Provider store={store}>
        <AtomsDevtools />
        <App />
      </Provider>
    </ReactnProvider>
  </React.StrictMode>,
);
