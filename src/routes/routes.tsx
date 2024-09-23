import Components from "@/containers/components/components";
import ContactList from "@/containers/contactList/contactList";
import ErrorPage from "@/containers/errorPage/errorPage";
import Layout from "@/containers/layout/layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as the element for root routes
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <h1>Hello World</h1>,
      },
      {
        path: "/contactList",
        element: <ContactList />,
      },
      {
        path: "/home",
        element: <h1>Home</h1>,
      },
    ],
  },
  {
    path:"/components",
    element:<Components/>
  }
]);


