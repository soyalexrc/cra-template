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
        {path: '', element: <Home />}
        ]
    },

    {
      path: '/propiedades',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {path: '', element: <PropertiesAndAttributesList />},
        {path: 'editar/:id', element: <PropertyEdit />},
        {path: 'crear', element: <PropertyRegister />},
        {path: 'editar-atributo/:id', element: <AttributeEdit />},
        {path: 'crear-atributo', element: <AttributeRegister />},
      ]
    },
    {
      path: '/propietarios',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {path: '', element: <OwnersList />},
        {path: 'editar/:id', element: <OwnerEdit />},
        {path: 'crear', element: <OwnerRegister />},
      ]
    },

    {
      path: '/usuarios',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {path: '', element: <UsersList />},
        {path: 'editar/:id', element: <UserEdit />},
        {path: 'crear', element: <UserRegister />},
      ]
    },
    {
      path: '/asesores-externos',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {path: '', element: <ExternalAdvisersList />},
        {path: 'editar/:id', element: <ExternalAdviserEdit />},
        {path: 'crear', element: <ExternalAdviserRegister />},
      ]
    },
    {
      path: '/aliados',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {path: '', element: <AlliesList />},
        {path: 'editar/:id', element: <AllyEdit />},
        {path: 'crear', element: <AllyRegister />},
      ]
    },
    {
      path: '/administracion',
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        {path: '', element: <Administration />},
      ]
    },


    {path: '/login', element: <Login /> },
    {path: '/recuperar-clave', element: <ForgotPassword /> },
    {path: '/reestablecer-clave', element: <ResetPassword /> }
  ])
}

const NotFound = Loadable(lazy(() => import('../pages/NotFound')));

const Home = Loadable(lazy(() => import('../pages/home')));

// properties
const PropertyRegister = Loadable(lazy(() => import('../pages/properties/PropertyRegister')));
const PropertyEdit = Loadable(lazy(() => import('../pages/properties/PropertyEdit')));
const AttributeEdit = Loadable(lazy(() => import('../pages/properties/AttributeEdit')));
const AttributeRegister = Loadable(lazy(() => import('../pages/properties/AttributeRegister')));
const PropertiesAndAttributesList = Loadable(lazy(() => import('../pages/properties/index')))


// users
const UsersList = Loadable(lazy(() => import('../pages/users/UsersList')));
const UserEdit = Loadable(lazy(() => import('../pages/users/UserEdit')));
const UserRegister = Loadable(lazy(() => import('../pages/users/UserRegister')));


// allies
const AlliesList = Loadable(lazy(() => import('../pages/allies/AlliesList')));
const AllyEdit = Loadable(lazy(() => import('../pages/allies/AllyEdit')));
const AllyRegister = Loadable(lazy(() => import('../pages/allies/AllyRegister')));

// advisers
const ExternalAdvisersList = Loadable(lazy(() => import('../pages/external-advisers/ExternalAdvisersList')));
const ExternalAdviserEdit = Loadable(lazy(() => import('../pages/external-advisers/ExternalAdviserEdit')));
const ExternalAdviserRegister = Loadable(lazy(() => import('../pages/external-advisers/ExternalAdviserRegister')));

// owners
const OwnerRegister = Loadable(lazy(() => import('../pages/owners/OwnerRegister')));
const OwnersList = Loadable(lazy(() => import('../pages/owners/OwnersList')));
const OwnerEdit = Loadable(lazy(() => import('../pages/owners/OwnerEdit')));

// administration
const Administration = Loadable(lazy(() => import('../pages/administration/index')));

//auth
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const ForgotPassword = Loadable(lazy(() => import('../pages/auth/ForgotPassword')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));



