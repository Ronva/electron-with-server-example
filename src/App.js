import React from 'react';

import { send } from 'utils/client-ipc';

const App = () => {
  return (
    <div className="app">
      <button onClick={() => send('nice')}>Nice</button>
    </div>
  );
};

export default App;
