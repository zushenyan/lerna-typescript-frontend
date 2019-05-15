import React from 'react';
import renderer from 'react-test-renderer';
import Images from './index';

describe('Images', (): void => {
  it('should work', (): void => {
    const component = renderer.create(<Images />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
