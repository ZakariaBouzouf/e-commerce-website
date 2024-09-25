import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import { useAuth } from "./security/AuthContext";
import Profil from "./pages/Profil";

function AuthenticatedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;

  // if (isAuthenticated) {
  //   return children;
  // }
  // return <Navigate to="/login" replace />;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profil",
        element: (
          <AuthenticatedRoute>
            <Profil />
          </AuthenticatedRoute>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
