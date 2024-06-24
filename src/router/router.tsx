import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MoviesPage from "../pages/MoviesPage/MoviesPage";

import HomePage from "../pages/HomePage/HomePage";
import MovieInfoPage from "../pages/MovieInfoPage/MovieInfoPage";
import ErrorPage from "../pages/ErrorPage";


const routes: RouteObject[] = [
    {
        path: "", element: <MainLayout/>, errorElement:<ErrorPage/>, children: [
            {index: true, element: <HomePage/>},
            {path: "movies", element: <MoviesPage/>},
            {path: "movies/:id", element: <MovieInfoPage/>}
        ]
    }
]

const router = createBrowserRouter(routes);

export default router