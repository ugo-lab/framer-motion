import { createBrowserRouter, RouterProvider } from 'react-router-dom/';
import RootPage from './pages/root/RootPage';
import { MOTIONS } from './motions';
import BackToRootPage from './components/BackToRootPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />
    },
    {
      path: '/',
      element: <BackToRootPage />,
      children: [...MOTIONS]
    }
    /* {
      path: '*',
      element: <RootPage />
    } */
  ]);

  return <RouterProvider router={router} />;
}

export default App;
