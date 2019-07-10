import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';

// Tests do not have access to methods on the window object
global.getServerSocket = jest.fn();
global.ipcConnect = jest.fn();
