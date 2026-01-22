import './App.css'

import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router';
import { createBrowserRouter } from 'react-router';

const routes = createBrowserRouter(router);

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App;