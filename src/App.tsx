import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = React.lazy(() => import("@/pages/Home/HomePage"));
const MediaPage = React.lazy(() => import("@/pages/Media/MediaPage"));
const DetailPage = React.lazy(() => import("@/pages/Detail/DetailPage"));
const NotFoundPage = React.lazy(() => import("@/pages/NotFound/NotFoundPage"));

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:mediaType" element={<MediaPage />} />
            <Route path="/:mediaType/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
        <ReactQueryDevtools initialIsOpen />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
