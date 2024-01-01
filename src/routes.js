import { Navigate, useRoutes } from "react-router-dom";
import Login from "./authPage/Login";
// import NotFound from "./authPage/page404";
// import DashboardLayout from "./user/Dashboard";
import useAuth from "./hooks/useAuth";
// import DevicesPage from "./user/DevicesPage";
import About from "./user/About";
import Contact from "./user/Contact";
import Layout from "./user/Layout";
import Playland from "./user/Playland";
// import BrowserHistory from "./user/BrowserHistory";

export default function Reoter()
{
    const RequireAuth = ({ children }) => {
        const { authed } = useAuth();
        console.log('authed:', authed);
        if (!authed) return <Navigate to="/login" replace />;
        return children;

      };


      const Authentacted = ({ children }) => {
        const { authed } = useAuth();
        if (authed) return <Navigate to="/dashboard/user" replace />;
        return children;
      };
      

    return useRoutes([
        {
          path: "/dashboard",
          // element:<DashboardLayout />,
          children:[
            { path: "", element: <Navigate to="/dashboard/user" /> },
            {
              path: "about",
              element: (
                <RequireAuth>
                  <Layout>
                  <About />
                  </Layout>
                </RequireAuth>
              ),
            },
            {
              path: "user",
              element: (
                <RequireAuth>
                  <Layout>
                  <Contact />
                  </Layout>
                </RequireAuth>
              ),
            },
            {
              path: "playland",
              element: (
                <RequireAuth>
                  <Layout>
                  <Playland />
                  </Layout>
                </RequireAuth>
              ),
            },
          ],
        },
        {
            path: "/",
            // element:<DashboardLayout />,
            children:[
                { path: "/", element: <Navigate to="/dashboard/user" /> },
                {
                  path: "login",
                  element: (
                    <Authentacted>
                      <Login />
                    </Authentacted>
                  ),
                },

            ],
          },
        
        //   { path: "404", element: <NotFound /> },

        // { path: "*", element: <Navigate to="/404" /> },
    ]);
}