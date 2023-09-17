import React from "react";
import { Routes, Route } from "react-router-dom";

import MovieDetails from "./components/Movies/MovieDetails";
import Header from "./components/UI/Header";
import LandingPage from "./Pages/LandingPage";
import MoviesPage from "./Pages/MoviesPage";

const App = () => {
  return (
    <main className="bg-primary text-text">
      <Header />
      <main className="pt-20 p-6 h-full">
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="movies/:type" element={<MoviesPage />} />
          <Route path="movie/:id" element={<MovieDetails />} />

          <Route
            path="/*"
            element={
              <h1 className="text-2xl text-center mt-36 font-bold">
                Page Not Found
              </h1>
            }
          />
        </Routes>
      </main>
    </main>
  );
};

export default App;
