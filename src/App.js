import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import UIWrapper from "./components/UI/UIWrapper";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./components/Movies/MovieDetails";

const App = () => {
  return (
    <UIWrapper>
      <Routes>
        <Route index element={<Navigate to="movies/now_playing" />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="movies/:type" element={<Movies />} />

        <Route path="/*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </UIWrapper>
  );
};

export default App;
