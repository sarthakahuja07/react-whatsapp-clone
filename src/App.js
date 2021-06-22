import logo from './logo.svg';
import './App.css';
import Main from './components/Main' 
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Login/> */}
      <Main />
    </div>
    </BrowserRouter>
  );
}
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
export default App;
