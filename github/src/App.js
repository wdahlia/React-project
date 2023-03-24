import './App.css';
import UserProvider from './Context/UserContext';
import Nav from './Nav/Nav';
import SearchBar from './SearchBar/SearchBar';
import UserContent from './UserContent/UserContent';

function App() {

  return (
    <UserProvider>
      <Nav />
      <SearchBar />
      <UserContent />
    </UserProvider>
  );
}

export default App;
