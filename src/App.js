import { useEffect } from 'react';
import './App.css';
import MaterialCard from './components/MaterialCard';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { Movies } from './redux/actions';
import ScrollToTop from './components/ScrollToTop';
import CustomModal from './components/CustomModal';
const App = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movieData)
  const getMovies = async () => {
    await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63")
      .then(res => {
        // console.log(res,"response tmdb")
        dispatch({ type: Movies.GET_MOVIES_LIST, payload: res.data.results })
      })
      .catch(err => console.log(err, "error"))
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      <div className='header'>
        <h2>top popular movies</h2>
      </div>
      <div className='container'>
        {/* {console.log(movies, "movies data")} */}
        {movies.slice(0, 18).map((item) => (
          <MaterialCard
            original_title={item.original_title}
            overview={item.overview}
            poster_path={item.poster_path}
          />
        ))}
        <CustomModal />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
