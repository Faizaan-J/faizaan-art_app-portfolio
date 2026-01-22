import './App.css'

import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router';
import { createBrowserRouter } from 'react-router';

const routes = createBrowserRouter(router, {
  basename: '/faizaan-art_app-portfolio', // base path for github pages - i have to hard code this otherwise ill get soft
});

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App;