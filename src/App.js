import Dropdown from './Dropdown';
import './App.css';

function App() {
  const choiceArray=["Yes","Probably Not","Never","Maybe","Always"];
  return (
    <>
    <h1>Should you use a dropdown?</h1>
      <Dropdown options={choiceArray}/>
    </>
  );
}

export default App;
