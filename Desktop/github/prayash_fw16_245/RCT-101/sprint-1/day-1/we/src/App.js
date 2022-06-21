import "./App.css";
import Button from "./components/Button";
import Links from "./components/Links";
import Logo from "./components/Logo";

function App() {
  let arr = ["Services", "Projects", "About"];
  // console.log(arr)
  return (
    <div className="container">
      <div className="navbar">
        <Logo />
        <Links items={[...arr]}/>
        <Button />
      </div>
    </div>
  );
}

export default App;
