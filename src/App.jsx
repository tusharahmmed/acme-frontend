import { useSelector } from "react-redux";
import "./App.css";
import { Details, SearchBox } from "./components/home";

function App() {
  const { selectedDoc } = useSelector((state) => state.doc);

  return <>{selectedDoc ? <Details data={selectedDoc} /> : <SearchBox />}</>;
}

export default App;
