import React, { useEffect, useState } from "react";
import Map from "./Map";
import Header from "./components/Header";
import data from './info.json';
function App() {
  
  const [modelData, setModelData] = useState([])
  useEffect(() => {
    setModelData(data)
  },[])

  return (
    <>
    <Header setModelData={setModelData}/>
    <Map modelData={modelData}/>
    </>
  );
}

export default App;
