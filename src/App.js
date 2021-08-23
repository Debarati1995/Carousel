import logo from './logo.svg';
import './App.css';

import Todo from './components/Todo/Todo';
import Timer from './components/Pomodoro/Timer';
import Number from './components/Addition/Number';
import Carousel from './components/Carousel/Container';

function App() {
  return (
    <div className="App">
     {/* <Todo /> */}
     {/* <Timer /> */}
     {/* <Number /> */}
     <Carousel></Carousel>
    </div>
  );
}

export default App;
