import ContactList from "@/containers/contactList/contactList";
import {
  createBrowserRouter
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        
      </div>
    ),
  },
  {
    path: "/contactList",
    element: (
      <ContactList/>
    ),
  }
  
]);

