import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const title = "TextUtils";
  return (
    <>
      <Navbar title={title} home="Home" />
      <div className="container my-3">
        <TextForm heading="Enter the text below" />
      </div>
    </>
  );
}

export default App;
