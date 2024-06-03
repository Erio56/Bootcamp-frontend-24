import "./styles/App.css";
import HomePage from "./components/pages/TriviaPage";
import GeneralContextProvider from "./contexts/GeneralContextProvider";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/templates/Root";
import LanguagesPage from "./components/pages/LanguagesPage";
import PokedexPage from "./components/pages/PokedexPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <HomePage />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/languages",
        element: <LanguagesPage/>,
      },
      {
        path: "/pokedex",
        element: <PokedexPage/>,
      },
    ],
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
