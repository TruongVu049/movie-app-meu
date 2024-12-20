// src/routes.ts
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: HomePage } = await import("@/pages/Home/HomePage");
          return { Component: HomePage };
        },
      },
      {
        path: ":mediaType",
        lazy: async () => {
          const { default: MoviesPage } = await import(
            "@/pages/Movies/MoviesPage"
          );
          return { Component: MoviesPage };
        },
      },
      {
        path: ":mediaType/:id",
        lazy: async () => {
          const { default: MoviePage } = await import(
            "@/pages/Movie/MoviePage"
          );
          return { Component: MoviePage };
        },
      },
      {
        path: "*",
        lazy: async () => {
          const { default: NotFoundPage } = await import(
            "@/pages/NotFound/NotFoundPage"
          );
          return { Component: NotFoundPage };
        },
      },
    ],
  },
]);
