import "./App.css";
import amazonDatas from "./amazonDatas.json";
import AmazonData from "./components/amazonCard/AmazonData";
import AppleData from "./components/appleCard/AppleData";
import appleDatas from "./appleDatas";

function App() {
  return (
    <div className="App">
      <AmazonData data={amazonDatas} />

      <AppleData data={appleDatas} />
      <AmazonData data={amazonDatas} />
    </div>
  );
}

export default App;
