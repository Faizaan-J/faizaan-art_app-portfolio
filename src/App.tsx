import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router';
import { createHashRouter } from 'react-router';

import './App.css'

const routes = createHashRouter(router);

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App;