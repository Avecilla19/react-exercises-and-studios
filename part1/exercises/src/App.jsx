import logo from './logo.svg';
import './App.css';
import HobbyLinks from './components/HobbyLinks';
import MovieList from './components/MovieList.jsx';
import ChoresList from './components/ChoresList.jsx';
import BookList from './components/BookList.jsx';

function App() {
  return (
    <div className="App">
      <HobbyLinks />
      <div className="similarComponents">
        <MovieList />
        <ChoresList />
        <BookList />
      </div>
    </div>
  );
}

export default App;