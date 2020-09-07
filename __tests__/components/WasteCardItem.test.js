import React from 'react';
import { mount, shallow } from 'enzyme';
import WasteCardItem from '../../src/assets/components/WasteCardItem';

describe('Testing WasteCardItem', () => {
  const defaultProps = {
    disabled: false,
    subtitle: 'Subtitle testing',
    title: 'Title testing',
    cost: 777
  };

  it('WasteCardItem should render correctly', () => {
    const wrapper = shallow(<WasteCardItem {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('WasteCardItem should render correctly if disabled', () => {
    const disabledProps = { ...defaultProps, disabled: true };
    const wrapper = mount(<WasteCardItem {...disabledProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
