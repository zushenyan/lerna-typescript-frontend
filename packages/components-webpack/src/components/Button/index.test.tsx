import React from 'react';
import renderer from 'react-test-renderer';
import initStoryshots from '@storybook/addon-storyshots';
import Button from './index';

initStoryshots({ storyKindRegex: /^Button$/ });

describe('Button', (): void => {
  it('should work', (): void => {
    const onClick = jest.fn();
    const component = renderer.create(<Button onClick={onClick}>aaa</Button>);
    const instance = component.root;
    if (instance) {
      instance.props.onClick();
    }
    expect(onClick).toHaveBeenCalled();
  });
});
