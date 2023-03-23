import './App.css';
import Nav from './Nav/Nav';
import SearchBar from './SearchBar/SearchBar';
import UserContent from './UserContent/UserContent';

function App(input) {

  // const handleChange = (inputValue) => {
  //   onChange={(e) => handleChange(e.target.value)}
  //   let value = inputValue;

  //   axios({
  //     url: `https://api.github.com/users/${value}`,
  //     method : 'GET',
      
  //   }).then((res) => {
  //     console.log(res.data);
  //   }).catch((error)=> {
  //     console.log(error);
  //   })
  // }
  return (
    <>
      <Nav />
      <SearchBar />
      <UserContent />
    </>
  );
}

export default App;
