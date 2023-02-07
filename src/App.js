import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import GamesReviews from './components/GamesReviews';
import { Routes, Route } from 'react-router-dom'
import SingleGameReview from './components/SingleGameReview';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<GamesReviews />} />
        <Route path="/reviews/:review_id" element={<SingleGameReview />} />
      </Routes>
    </div>
  );
}

export default App;
