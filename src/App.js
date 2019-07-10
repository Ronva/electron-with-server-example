import React from 'react';

import { send } from 'utils/client-ipc';

const App = () => {
  return (
    <div className="App">
      <button onClick={() => send('test')}>Nice</button>
    </div>
  );
};

export default App;
