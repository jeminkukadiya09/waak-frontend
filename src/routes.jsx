import { Navigate, useRoutes } from 'react-router-dom';
import useLocalStorage from "use-local-storage";

// layouts
import DashboardLayout from './layouts/dashboard';
import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------

export default function Router({mytheme, switchTheme}) {

  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout mytheme={mytheme} switchTheme={switchTheme}/>,
      children: [
        { element: <Navigate to="/" />, index: true },
        { path: '/', element: <DashboardAppPage mytheme={mytheme} switchTheme={switchTheme} /> },
      ],
    },
  ]);

  return routes;
}
