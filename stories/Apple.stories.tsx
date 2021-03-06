import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Apple } from './Apple';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Apple',
  component: Apple,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Apple>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Apple> = (args) => <Apple {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Apple',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Apple',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Apple',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Apple',
};
