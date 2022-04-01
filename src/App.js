import "./tailwind.css";
import Button from "./components/Button";
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
      <Button />
      <body>
        <button data-set-theme="" data-act-class="ACTIVECLASS">dummy </button>
        <button data-set-theme="dark" data-act-class="ACTIVECLASS">
          dark
        </button>
        <button data-set-theme="pink" data-act-class="ACTIVECLASS">pink</button>
      </body>

      <Btn />
    </div>
  );
};

export default App;
