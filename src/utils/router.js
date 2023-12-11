import {useRoutes} from 'react-router-dom'
import Layout from "../components/Layout/Layout.jsx";
import Home from "../pages/Home/Home.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import User from "../pages/User/User";
import Cart from "../pages/Cart/Cart";
import Profile from "../pages/Profile/Profile";
import Project from "../pages/Project/Project";
import Module from "../pages/Module/Module";
import Level from "../pages/Level/Level";
import Reset from "../pages/Reset/Reset";
import Lection from "../pages/Lection/Lection";


export default function Router () {
    const routes = useRoutes([
        {
            path: '',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/register',
                    element: <Register/>
                },
                {
                    path: '/login',
                    element: <Login/>
                },
                {
                    path: '/user',
                    element: <User/>
                },
                {
                    path: '/cart',
                    element: <Cart/>
                },
                {
                    path: '/profile',
                    element: <Profile/>
                },
                {
                    path: '/project',
                    element: <Project/>
                },
                {
                    path: '/module',
                    element: <Module/>
                },
                {
                    path: '/level',
                    element: <Level/>
                },
                {
                    path: '/reset',
                    element: <Reset/>
                },
                {
                    path: '/lection',
                    element: <Lection/>
                },
                {
                    path: '/module',
                    element: <Module/>
                }
            ]
        }
    ])
    return routes
}