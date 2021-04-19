import './App.css';
import {Timer} from './components/timer'

function App() {
  return (
    <div className="App">
     <Timer time = {5000} step ={1000} going={false} onTick ={(time)=>console.log(`There is time left ${time}`)}/>
     <Timer time = {5900000} step ={2000} going={true} onTick ={(time)=>console.log(`There is time left ${time}`)}/>
     
    </div>
  );
}

export default App;
