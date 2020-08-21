import React from 'react';
import { mount } from 'enzyme';
import WasteContainer from '../../src/screens/containers/WasteContainer';
import { StateProvider } from '../../src/state';
import { mainReducer } from '../../src/ducks';

const initialState = {
  Waste: {
    waste: null,
    isLoading: false
  }
};
const defaultProps = {
  route: {
    params: {
      wasteId: 1
    }
  }
};

describe('Testing Waste Container', () => {
  const component = mount(
    <StateProvider reducer={mainReducer} initialState={initialState}>
      <WasteContainer {...defaultProps} />
    </StateProvider>
  );

  it('Should render correctly with no components missing', () => {
    component.update();

    expect(component).toMatchSnapshot();
  });

  it('Should unmount component correctly', () => {
    component.unmount();
  });
});
