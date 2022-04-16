import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header2 } from './Header2';

export default {
  title: 'Example/Header2',
  component: Header2,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header2>;

const Template: ComponentStory<typeof Header2> = (args) => <Header2 {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
