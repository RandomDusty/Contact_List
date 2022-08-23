import Contacts from "../pages/Contacts";
import Authorization from "../pages/Authorization";

export const privateRoutes = [
    {path: '/contacts', element: Contacts},
]

export const publicRoutes = [
    {path: '/', element: Authorization},
]

