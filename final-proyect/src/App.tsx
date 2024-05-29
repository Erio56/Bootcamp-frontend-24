import "./styles/App.css";
import HomePage from "./components/pages/HomePage";
import GeneralContextProvider from "./contexts/GeneralContextProvider";

function App() {
  return (
    <>
      <GeneralContextProvider>
        <HomePage />
      </GeneralContextProvider>
    </>
  );
}

export default App;
