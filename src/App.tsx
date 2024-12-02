import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetailPage, TVDetailPage } from "./pages";
import RootLayout from "./layout/RootLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const MoviesPage = React.lazy(() => import("./pages/MoviesPage"));
const TVSeriesPage = React.lazy(() => import("./pages/TvSeriesPage"));

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RootLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie" element={<MoviesPage />} />
            <Route path="/tv" element={<TVSeriesPage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="/tv/:id" element={<TVDetailPage />} />
          </Routes>
        </RootLayout>
        <ReactQueryDevtools initialIsOpen />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
