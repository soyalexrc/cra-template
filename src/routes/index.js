import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import MainLayout from "../layouts/MainLayout";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// guards
// components
import LoadingScreen from "../components/LoadingScreen";
import ProtectedRoute from "./ProtectedRoute";



const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {path: '', element: <Home />},
        {path: 'proveedores', element: <ProvidersList />},
        {path: 'proveedores/eliminar/:id', element: <ProvidersDelete />},
        {path: 'clientes', element: <ClientsList />},
        {path: 'clientes/eliminar/:id', element: <ClientDelete />},
        {path: 'trabajadores', element: <WorkersList />},
        {path: 'trabajadores/eliminar/:id', element: <WorkerDelete />},
        {path: 'productos', element: <ProductsAndCategoriesList />},
        {path: 'productos/eliminar/:id', element: <ProductDelete />},
        {path: 'productos/eliminar-categoria/:id', element: <CategoryDelete />},
        ]
    },

    {path: '/proveedores/registrar', element: <ProvidersRegister />},
    {path: '/proveedores/editar/:id', element: <ProvidersEdit />},

    {path: '/clientes/registrar', element: <ClientRegister />},
    {path: '/clientes/editar/:id', element: <ClientEdit />},

    {path: '/trabajadores/registrar', element: <WorkerRegister />},
    {path: '/trabajadores/editar/:id', element: <WorkerEdit />},

    {path: '/productos/registrar', element: <ProductRegister />},
    {path: '/productos/editar/:id', element: <ProductEdit />},

    {path: '/productos/registrar-categoria', element: <CategoryRegister />},
    {path: '/productos/editar-categoria/:id', element: <CategoryEdit />},

    {path: '/login', element: <Login /> },
    {path: '/recuperar-clave', element: <ForgotPassword /> },
    {path: '/reestablecer-clave', element: <ResetPassword /> }
  ])
}

const NotFound = Loadable(lazy(() => import('../pages/NotFound')));

const Home = Loadable(lazy(() => import('../pages/home')));

//providers
const ProvidersList = Loadable(lazy(() => import('../pages/providers/ProvidersList')));
const ProvidersRegister = Loadable(lazy(() => import('../pages/providers/ProvidersRegister')));
const ProvidersEdit = Loadable(lazy(() => import('../pages/providers/ProvidersEdit')));
const ProvidersDelete = Loadable(lazy(() => import('../pages/providers/ProvidersDelete')));

//clients
const ClientsList = Loadable(lazy(() => import('../pages/clients/ClientsList')));
const ClientRegister = Loadable(lazy(() => import('../pages/clients/ClientRegister')));
const ClientEdit = Loadable(lazy(() => import('../pages/clients/ClientEdit')));
const ClientDelete = Loadable(lazy(() => import('../pages/clients/ClientDelete')));

//workers
const WorkersList = Loadable(lazy(() => import('../pages/workers/WorkersList')));
const WorkerEdit = Loadable(lazy(() => import('../pages/workers/WorkerEdit')));
const WorkerDelete = Loadable(lazy(() => import('../pages/workers/WorkerDelete')));
const WorkerRegister = Loadable(lazy(() => import('../pages/workers/WorkerRegister')));

//products
const ProductsAndCategoriesList = Loadable(lazy(() => import('../pages/products/index')));
const ProductRegister = Loadable(lazy(() => import('../pages/products/ProductRegister')));
const ProductEdit = Loadable(lazy(() => import('../pages/products/ProductEdit')));
const ProductDelete = Loadable(lazy(() => import('../pages/products/ProductDelete')));
const CategoryRegister = Loadable(lazy(() => import('../pages/products/CategoryRegister')));
const CategoryEdit = Loadable(lazy(() => import('../pages/products/CategoryEdit')));
const CategoryDelete = Loadable(lazy(() => import('../pages/products/CategoryDelete')));

//auth
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const ForgotPassword = Loadable(lazy(() => import('../pages/auth/ForgotPassword')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));



