import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Statistics from "./components/Statistics/Statistics";
import Url from "./components/URL/Url";
import Subfooter from "./components/Subfooter/Subfooter";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const getData = (dat) => {
    setData(dat)
  }
  console.log("App = ", data)
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Url sendData={getData} />
      <Statistics urlData={data} />
      <Subfooter />
      <Footer />
    </div>
  );
}

export default App;
