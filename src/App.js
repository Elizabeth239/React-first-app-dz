import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
return <h1>Привет, {props.name}</h1>;
}
function About(props) {
  return <div>
    <h1>ФИО: {props.name2}</h1>;
    <h1>Phone: {props.phone}</h1>;
    <h1>Adress: {props.adress}</h1>;
    </div>
  }

  function City(props) {
    return <div>
      <h1>Country: {props.nameCountry}</h1>
      <h1>City: {props.nameCity}</h1>
      <div class="images">
      <img src="images/img1.jpg"></img>
      <img src="images/img2.jpg"></img>
      </div>
      </div>
    }

const title = React.createElement('h1', {}, 'Hello, React');
ReactDOM.render(
  title,
  document.getElementById('root')
);

function App() {
  return (
    <div className="App">
       <Hello name="React" />
       <About name2="Фамилия имя отчество" phone="380123456789" adress="Мой адресс" ></About>
      <City nameCountry="Ukraine" nameCity="Kriviy Pih"></City>
    </div>
  );
  
}

export default App;