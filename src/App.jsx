import "./App.css";
import { LoadingContextProvider } from "./Components/Context/Loading/loading-context";
import PageRouting from "./Components/Routing/routerPage";

function App() {
  return (
    <div className="App">
      <LoadingContextProvider>
      <PageRouting />
      </LoadingContextProvider>
    </div>
  );
}

export default App;
