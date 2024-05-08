import Map from "./Map";
import Header from "./Header";
import Loading from "./Loading";
import "./index.css";
import { useContext } from "react";
import { DataContext } from "./contexts/DataContext";

function App() {
  const { isLoading, error } = useContext(DataContext);

  return (
    <div className="justify-center px-6 py-8 md:px-10 md:py-12 ">
      <Header />
      {error && <p>Error...</p>}
      {isLoading ? <Loading /> : <Map />}
    </div>
  );
}

export default App;
