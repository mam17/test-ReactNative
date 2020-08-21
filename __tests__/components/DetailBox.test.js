import React from 'react';
import { shallow } from 'enzyme';
import DetailBox from '../../src/assets/components/DetailBox';

const defaultProps = {
  title: 'Testing title',
  subtitle: 'Testing subtitle'
};

test('DetailBox should render correctly', () => {
  const wrapper = shallow(<DetailBox {...defaultProps} />);

  expect(wrapper).toMatchSnapshot();
});
