import ContactList from "@/containers/contactList/contactList";
import Layout from "@/containers/layout/layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as the element for root routes
    children: [
      {
        path: "/",
        element: <h1>Hello World</h1>,
      },
      {
        path: "/contactList",
        element: <ContactList />,
      },
    ],
  },
]);


