import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BiPlus } from "react-icons/bi";

import Dropdown from './Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;




const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];




export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Dropdown',
  name: 'Dropdown',
  options: options

};








export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Dropdown',
  DropdownType: 'secondary',
  icon: <BiPlus size={20} />,
  name: 'Dropdown',
};
