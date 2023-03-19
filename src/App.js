// import logo from './logo.svg';
import './App.css';
import Eightball from './eightball';
import Responses from './eightball_responses'

function App() {
  return (
    <div className="App">
      <Eightball responses={Responses}/>
    </div>
  );
}





export default App;
