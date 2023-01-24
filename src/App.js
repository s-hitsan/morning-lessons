import logo from './logo.svg';
import './App.css';
import { AddButton } from './components/AddButton/AddButton';
import { CircleButton } from './components/CircleButton/CircleButton';

function App() {
  const buttonsArray = [{
    tittle: "First Button",
    width: "312px"
  }, {
    tittle: "Second",
    width: "217px"
  }, {
    tittle: "Thirt",
    width: "261px"
  }];

  return (
    <div className="App">
      {buttonsArray.map((el) => {
        return (
          <AddButton tittle={el.tittle} width={el.width} key={el.tittle} />
        )
      })}
      <AddButton tittle="One button" width="400px" />
      <CircleButton tittle="It's circle" width="200px"/>

    </div>
  );
}

export default App;
