import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/home';
import { Servicos } from './pages/servicos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/servicos",
    element: <Servicos/>
  }
])

export { router };
