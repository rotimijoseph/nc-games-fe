import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import GamesReviews from './components/GamesReviews';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<GamesReviews />} />
        <Route path="/category/:category_name" element={<GamesReviews />} />
      </Routes>
    </div>
  );
}

export default App;
