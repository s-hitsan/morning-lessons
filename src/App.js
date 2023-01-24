import logo from './logo.svg';
import './App.css';
import { AddButton } from './components/AddButton/AddButton';

function App() {
  const buttonTitlesArray = ["First Button", "Second", "Thirt"];

  return (
    <div className="App">
      {buttonTitlesArray.map((el) => {
        return (
      <AddButton tittle={el} key={el} />
        )
      })}

    </div>
  );
} 

export default App;
