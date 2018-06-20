import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../../src/components/app.js';

describe('<App /> (Enzyme Test)', () => {

  it('is alive at application start', () => {
    let app = mount(<App />);
    expect(app.find('main #home').exists()).toBeTruthy();
  });

});

describe('<App /> (Snapshot Test)', () => {

  it('renders cleanly', () => {

    const component = renderer.create(
      <App/>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

  });

});

