import './App.css';
import axios from 'axios';

function App(input) {

  const handleChange = (input) => {
    let value = input;

    axios({
      url: `https://api.github.com/users/${value}`,
      method : 'GET',
      
    }).then((res) => {
      console.log(res.data);
    }).catch((error)=> {
      console.log(error);
    })
  }
  return (
    <div className="App">
     <input onChange={(e) => handleChange(e.target.value)} type='text'/>
    </div>
  );
}

export default App;
