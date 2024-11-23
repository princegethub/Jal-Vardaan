import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from './components/ui/Button';

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold bg-blue-600 underline">Hello world!</h1>
      <div className="p-4">
      <Button intent="primary">Primary Button</Button>
      <Button intent="secondary">Secondary Button</Button>
      <Button intent="secondary">Secondary Button</Button>
      <Button intent="secondary">Secondary Button</Button>
      <Button intent="secondary">Secondary Button</Button>
    </div>
    </>
  );
}

export default App;
