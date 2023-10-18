import Dropdown from './Dropdown';
import './App.css';

function App() {
  //Below is an Array containing the Options of Dropdown
  const choiceArray=["Yes","Probably Not","Never","Maybe","Always"];
  return (
    <>
    <h1>Should you use a dropdown?</h1>
    {/* The Options Array is now being passed as prop to the Dropdown Component */}
      <Dropdown options={choiceArray}/>
    </>
  );
}

export default App;
