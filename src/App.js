import React from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Body from './Components/mainbody';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './Components/jumbotron';

function App() {
  return (



    <div className="App">
      <Header />
      <Jumbotron />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
