import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router';
import { createHashRouter } from 'react-router';

import './App.css'
import { AnimatePresence } from "motion/react";

const routes = createHashRouter(router);

function App() {

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={routes} />
    </AnimatePresence>
    
  )
}

export default App;