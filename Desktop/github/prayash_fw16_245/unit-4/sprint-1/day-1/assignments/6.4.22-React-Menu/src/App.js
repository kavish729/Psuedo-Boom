import "./App.css";
import React from "react";
import Mobiles from "./components/Mobiles.jsx";
import JoinUs from "./components/JoinUs.jsx";
import Setting from "./components/Settings.jsx";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Search from "./components/Search";
import Help from "./components/Help";
import Home from "./components/Home";
import Download from "./components/Download";
import CommonQues2 from "./components/CommonQues2";

// import Mobiles from './components/Mobiles.jsx';

const btnArr = [
  "JOIN US",
  "SETTINGS",
  "LOGIN",
  "CONTACT US",
  "SEARCH",
  "HELP",
  "HOME",
  "DOWNLOAD",
];


function App() {
  

  return (
    <>
      <Mobiles />
      <div className="container">
       
          <JoinUs />
          <Setting />
          <Login />
          <Contact />
          <Search />
          <Help />
          <Home />
          <Download />
       
      </div>

      {/* part 2 */}

      <h1 className="h2"> Part-2</h1>

      <div className="container">
        {btnArr.map((e) => {
          // console.log(e);
          return <CommonQues2 title={e} />;
        })}
      </div>
    </>
  );
}

export default App;


