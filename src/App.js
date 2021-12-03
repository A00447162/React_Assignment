import React, {useState} from 'react';
import "./App.css";
import AboutMe from './components/AboutMe';
import MyTown from './components/MyTown';

const App = () => {
  const [state, setState] = useState(true)
    return (
      <div className="myDivClass">
        <>
          <button className="button-class button1" onClick={() => setState(true)}> About Me </button>
          <button className="button-class button2" onClick={() => setState(false)}> My Town </button>
        </>
        <>
          {state === true ? <AboutMe /> : <MyTown /> }
        </>
      </div>
    )
}
export default App;
