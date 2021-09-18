import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Mr. Koober', 'Skip Khan', 'Mofu', 'Rasel', 'Error Khan'];

  const cinemas = [
    { nayok: 'Koober', naiyka: 'Kopila' },
    { nayok: 'Rubel', naiyka: 'Moushumi' },
    { nayok: 'Razzak', naiyka: 'Shabana' },
    { nayok: 'Joachim Bond', naiyka: 'Cattina' },
  ]
  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {/* <Cinema nayok="Joachim Bond" naiyka="Cattina"></Cinema> */}
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} naiyka={cinema.naiyka}></Cinema>)
      }

    </div>
  );
}

/* 
<Person name={nayoks[0]} naiyka="Opu Bishwas"></Person>
      <Person name={nayoks[1]} naiyka="Moushumi"></Person>
      <Person name="BappaRaz" naiyka="Chicka"></Person>
      <Person name={nayoks[3]} naiyka="Kopila"></Person>
*/

/* 
<Person name="Shakib Khan" naiyka="Opu Bishwas"></Person>
      <Person name="Rubel" naiyka="Moushumi"></Person>
      <Person name="BappaRaz" naiyka="Chicka"></Person>
      <Person name="Mr. Koober" naiyka="Kopila"></Person>
      <Person></Person>
*/

/* 
 <Friend phone="01763455263" address="Noakhali"></Friend>
      <Friend phone="01525242424" address="Golachipa"></Friend>
      <Friend></Friend>
*/

function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '10px'
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Hero of: {props.naiyka}</h4>
    </div>
  );
}

function Cinema(props) {
  return (
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.naiyka}</h4>
    </div>
  )
}

function Friend(props) {
  return (
    <div className="person">
      <h3>Phone: {props.phone} </h3>
      <h4>Address: {props.address} </h4>
    </div>
  )
}


export default App;
