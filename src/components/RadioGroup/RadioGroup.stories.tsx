import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BiPlus } from "react-icons/bi";

import RadioGroup from './RadioGroup'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RadioGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;


const options1 = [
  'Chocolate','Strawberry' ,'Vanilla'
];
const options2 = [
  'Chocolate jsbsjjs jsjjjjsjjjsjjsjjsjjsjjsjjjjsjsjsjbs sjjsjjjsjsjjsjjsjsjjsjs Chocolate jsbsjjs jsjjjjsjjjsjjsjjsjjsjjsjjjjsjsjsjbs sjjsjjjsjsjjsjjsjsjjsjs','Strawberry' ,'Vanilla'
];

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'RadioGroup',
  options: options1

};


export const LargeText = Template.bind({});
LargeText.args = {
  label: 'RadioGroup',
  options: options2
};

