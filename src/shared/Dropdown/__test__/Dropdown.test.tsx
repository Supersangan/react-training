/**
 * @jest-environment jsdom
 */
import { shallow } from "enzyme";
import React from "react";
import { Dropdown } from "..";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Dropdown', () => {
  test('Should render', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />);
    expect(wrapper).toBeDefined();

    console.log(window);
    
    
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  });

  test('Should render (snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />);

    expect(wrapper).toMatchSnapshot();
  });
})