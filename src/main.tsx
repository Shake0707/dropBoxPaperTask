import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Main from './layout/Main.tsx';
import Catalog from './pages/Catalog.tsx';
import About from './pages/About.tsx';
import ErrorElement from './components/ErrorElement.tsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/dropBoxPaperTask' element={<Main />} errorElement={<ErrorElement />}>
    <Route index element={<Catalog />} />
    <Route path='about/:region' element={<About />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
