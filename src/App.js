import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import MovieInfo from './pages/MovieInfo';
import Watchlist from './pages/Watchlist';
import { useState } from 'react';

function App() {
  // Set up watchlist.
  const [watchlist, setWatchlist] = useState([]);

  // Function that adds movies to watchlist.
  function addToWatchlist(movie) {
    setWatchlist([...watchlist, {...movie, quantity: 1}])
  }

  // Function to remove movies from watchlist.
  function removeItem(item) {
    setWatchlist(watchlist.filter(movie => movie.imdbID !== item.imdbID))
  }

  // Function to determine how many unwatched movies in watchlist.
  function numberOfItems() {
    let counter = 0;
    watchlist.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  return (
    <Router>
      <div className='App'>
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
          <Route path="/catalog/:id" element={<MovieInfo addToWatchlist={addToWatchlist} watchlist={watchlist} />}></Route>
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} removeItem={removeItem}/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
