import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const title = "TextUtils";
  const[theme, setTheme] = useState("dark");
  const[themeText, setThemeText] = useState("Enable Light Mode");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setThemeText("Enable Light Mode");
      document.body.style.backgroundColor = "#1c1f22";
      document.body.style.color = "white";
    } else {
      setTheme("light");
      setThemeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }


  return (
    <>
      <Navbar theme={theme} title={title} home="Home" toggleTheme={toggleTheme} themeText={themeText} />
      <div className="container my-2">
        <TextForm heading="Enter the text below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
