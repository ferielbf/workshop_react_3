import './App.css';
import NavBar from './components/NavBar';
import Mainpage from './components/Mainpage';
import { data } from './data';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Mainpage data={data} />
     
    </div>
  );
}

export default App;
