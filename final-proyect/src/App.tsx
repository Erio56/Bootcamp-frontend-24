import "./styles/App.css";
import HomePage from "./components/pages/HomePage";
import GeneralContextProvider from "./contexts/GeneralContextProvider";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <HomePage />
  },
]);

function App() {
  return (
    <>
      <GeneralContextProvider>
        <RouterProvider router={router}/>
      </GeneralContextProvider>
    </>
  );
}

export default App;
