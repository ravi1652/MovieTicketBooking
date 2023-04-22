import './App.css';
import {Routes, Route} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PlayPage from './pages./Play.Page';
import MoviePage from './pages/Movie.Page';
import HomePage from './pages/Home.Page';


function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movie/:id"  element={<MoviePage/>}/>
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
   
  );
}

export default App;
