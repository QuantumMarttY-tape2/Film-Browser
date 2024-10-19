import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import MovieInfo from './pages/MovieInfo';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
          <Route path="/catalog/:id" element={<MovieInfo />}></Route>
          <Route path="/watchlist" element={<Watchlist/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
