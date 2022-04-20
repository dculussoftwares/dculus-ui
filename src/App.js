import "./tailwind.css";
import Button from "./components/Button/Button";
import DropDown from './components/Dropdown/Dropdown';
import RadioGroup from './components/RadioGroup/RadioGroup';
import Input from './components/Input/Input';

import Btn from "./components/Btn";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'



const App = () => {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <div className="App bg-[#eee] h-[100vh] flex items-center justify-center flex-col">
      <h1 className="font-bold text-4xl text-[#333]">Hi 👋, Tailwind test.</h1>
      <p className="text-sm font-italic m-[3px]">
        Now you can use <code className="bg-[#ccc] p-[3px]">[]</code> to style
        your app
      </p>
      <Button primary={true}
        label={'Button'}
        name={'Button'} />
      <Input />
      <DropDown options={[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ]} />
      <RadioGroup options={[
        'Chocolate', 'Strawberry', 'Vanilla'
      ]} />
      <body>
        <button data-set-theme="" data-act-class="ACTIVECLASS">dummy </button>
        <button data-set-theme="dark" data-act-class="ACTIVECLASS">
          dark
        </button>
        <button data-set-theme="dragon" data-act-class="ACTIVECLASS">dragon</button>
      </body>

      <Btn />
    </div>
  );
};

export default App;
