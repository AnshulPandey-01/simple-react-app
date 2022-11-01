import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const title = "TextUtils";
  const[theme, setTheme] = useState("dark");
  const[themeText, setThemeText] = useState("Enable Light Mode");
  const[alert, setAlert] = useState(null);
  const alertMessage = "This website is currently in development. Please do not use it for any serious purpose.";

  useEffect(() => {
    showAlert(alertMessage, "warning", 3000);
  }, []);

  const showAlert = (msg, type, t = 1500) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, t);
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setThemeText("Enable Light Mode");
      document.body.style.backgroundColor = "#1c1f22";
      document.body.style.color = "white";
      document.title = "TextUtils (Dark Mode)";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setTheme("light");
      setThemeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtils (Light Mode)";
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar theme={theme} title={title} home="Home" toggleTheme={toggleTheme} themeText={themeText} />
      <Alert alert={alert} capitalize={capitalizeFirstLetter} />
      <div className="container my-2">
        <TextForm heading="Enter the text below" alert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
