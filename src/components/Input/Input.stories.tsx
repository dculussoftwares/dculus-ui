import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Input from './Input';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Input',
  // icon:<BiPlus size={20}/>

};


// export const LargeText = Template.bind({});
// LargeText.args = {
//   label: 'Input',
//   options: options2
// };


