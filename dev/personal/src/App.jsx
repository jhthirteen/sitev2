import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' index element={<HomePage />} />
    </>
  ),
  {
    basename: '/sitev2/',
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App; 