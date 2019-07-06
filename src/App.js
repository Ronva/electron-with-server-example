import React from 'react';
import Helmet from 'react-helmet';

import { init, send } from './client-ipc';
init();

const App = () => {
  return (
    <>
      <Helmet>
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; style-src 'self' 'unsafe-inline';"
        />
      </Helmet>
      <div className="App">
        <button onClick={() => send('test')}>Nice</button>
      </div>
    </>
  );
};

export default App;
