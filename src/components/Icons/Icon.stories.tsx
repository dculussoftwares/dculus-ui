import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BiPlus } from "react-icons/bi";

import Icon from './Icon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;


const options1 = [
  'Chocolate','Strawberry' ,'Vanilla'
];
const options2 = [
  'Chocolate jsbsjjs jsjjjjsjjjsjjsjjsjjsjjsjjjjsjsjsjbs sjjsjjjsjsjjsjjsjsjjsjs Chocolate jsbsjjs jsjjjjsjjjsjjsjjsjjsjjsjjjjsjsjsjbs sjjsjjjsjsjjsjjsjsjjsjs','Strawberry' ,'Vanilla'
];

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Icon',
  icon:<BiPlus size={20}/>

};


// export const LargeText = Template.bind({});
// LargeText.args = {
//   label: 'Icon',
//   options: options2
// };


