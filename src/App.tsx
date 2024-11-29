import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  MovieDetailPage,
  MoviesPage,
  TVDetailPage,
  TVSeriesPage,
} from "./pages";
import RootLayout from "./layout/RootLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useScrollToTop } from "./hooks/useScrollToTop";

const queryClient = new QueryClient();

const App: React.FC = () => {
  // useScrollToTop({ duration: 300 }); // Customize duration (optional)
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
