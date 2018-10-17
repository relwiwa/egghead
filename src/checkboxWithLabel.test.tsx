import * as React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from './checkboxWithLabel';
import { findDOMNode } from 'react-dom';

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="on" labelOff="off" />);
  expect(checkbox.text()).toEqual('off');
  checkbox.find('input').simulate('change');
  expect(checkbox.text()).toEqual('on');
});
