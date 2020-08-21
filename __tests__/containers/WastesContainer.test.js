import React from 'react';
import { mount } from 'enzyme';
import WastesContainer from '../../src/screens/containers/WastesContainer';
import { StateProvider } from '../../src/state';
import { mainReducer } from '../../src/ducks';
import { COLORS } from '../../src/assets/styles/colors';

const initialState = {
  Waste: {
    wastes: null,
    isLoading: false
  }
};

describe('Testing Wastes Container', () => {
  const component = mount(
    <StateProvider reducer={mainReducer} initialState={initialState}>
      <WastesContainer />
    </StateProvider>
  );

  it('Should render correctly with no components missing', () => {
    component.update();

    expect(component).toMatchSnapshot();
  });

  it('Should receive correctly props from store', () => {
    component.update();

    expect(component.find('WastesComponent').props()).toMatchSnapshot();
  });

  it('Should have correctly waste cards amount', () => {
    component.update();

    expect(component.find('WasteCardItem')).toHaveLength(5);
  });

  it('Should have correctly date header amount', () => {
    component.update();

    expect(component.findWhere((node) => node.prop('testID') === 'DateHeader')).toHaveLength(12);
  });

  it('Canceled waste should match props', () => {
    component.update();

    expect(component.find('WasteCardItem').at(2).props().disabled).toBeTruthy();
  });

  it('Canceled waste should have disabled styles', () => {
    component.update();

    expect(
      component
        .findWhere((node) => node.prop('testID') === 'WasteCardItem-Title')
        .at(10)
        .props().style[0].textDecorationLine
    ).toBe('line-through');

    expect(
      component
        .findWhere((node) => node.prop('testID') === 'WasteCardItem-Subtitle')
        .at(10)
        .props().style[0].color
    ).toBe(COLORS.blueLight3);

    expect(
      component
        .findWhere((node) => node.prop('testID') === 'WasteCardItem-Cost')
        .at(10)
        .props().style[0].textDecorationLine
    ).toBe('line-through');

    expect(
      component
        .findWhere((node) => node.prop('testID') === 'WasteCardItem-Cost')
        .at(10)
        .props().style[0].color
    ).toBe(COLORS.blueLight3);
  });

  it('Total should sum correctly', () => {
    component.update();

    expect(component.findWhere((node) => node.text() === '404.00')).toExist();
  });
});
