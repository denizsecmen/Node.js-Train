import logo from './logo.svg';
import Singup from './components/login';
import './App.css';
import Layout from './components/layout';
import { useState } from 'react';
import Login from './components/singup';
function App() {
  var [t,p]=useState(0);
  function tt(message)
  {
    console.log(message);
  }
  var [t,p]=useState(0);
  return (
    <>
    <Layout ffds={(mes)=>{
      console.log(mes);
      p(parseInt(mes));
    }}></Layout>
    <div className="App">
      {t?<Login></Login>:<Singup></Singup>}
    </div>
    </>
  );
}

export default App;
