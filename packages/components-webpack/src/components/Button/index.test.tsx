import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

describe('Button', (): void => {
  it('should work', (): void => {
    const onClick = jest.fn();
    const component = renderer.create(<Button text="meow" onClick={onClick} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
