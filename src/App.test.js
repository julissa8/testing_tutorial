import React from 'react';
import Enzyme, { shallow }from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

//configure enzyme to use React 16

Enzyme.configure({ adapter: new EnzymeAdapter() });
/**
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
    return shallow(<App { ...props}  />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper -Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test at attribute for search.
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}
describe('App', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const appComp = findByTestAttr(wrapper, 'component-app')
    expect(appComp.length).toEqual(1);
  });

  it('renders increment button',() => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button.length).toEqual(1);
  });

  it('renders counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.length).toEqual(1);
  });

  it('counter starts at 0', () => {

  });

  it('clicking button increments counter display ', () => {

  });

})

//Udemy tutorial React testing with Jest and Enzyme
