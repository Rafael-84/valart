import { createBrowserRouter } from "react-router-dom";

import { Home } from './pages/home';
import { Servicos } from './pages/servicos';
import { NotFound } from './pages/notFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/servicos",
    element: <Servicos/>
  },
  {
    path: "*",
    element: <NotFound/>,
  }
])

export { router };
