import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockAsyncStorage from 'mock-async-storage';

const mockImpl = new MockAsyncStorage();

jest.mock('../src/ducks/waste.js');

jest.mock('@react-native-community/async-storage', () => mockImpl);

const originalConsoleError = console.error;

console.error = (message) => {
  if (message.startsWith('Warning:')) {
    return;
  }

  originalConsoleError(message);
};

Enzyme.configure({ adapter: new Adapter() });
