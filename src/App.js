import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['rubel', 'joshim', 'bappa', 'sakib', 'rajib'];
  const products = [
    {name: 'photoshop', price: '$90.99'},
    {name: 'illustrator', price: '$60.99'},
    {name: 'pdf reader', price: '$6.99'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>my first react app </p>
        <Users></Users>
        <Counter></Counter>

        <ul>
          {
          nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        
        </ul>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Person name={nayoks[0]} nayika="mousumi"></Person>
        <Person name={nayoks[2]} nayika="sabana"></Person>
        <Person name="bappa raz" nayika="okok"></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>count: {count} </h1>
      <button onMouseMove={() => setCount(count-1)}>decrease</button>
      <button onClick={handleIncrease}>increase</button>
    </div>
  )
}
function Users() {
    const [users, setUsers] = useState([]);
    useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    }, [])
  return(
    <div>
      <h3>dynamic users :{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} : {user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    
  }
  return (
    <div style={productStyle}>
      <h2>{props.name} </h2>
      <h3>{props.price}</h3>
      <button>buy now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    width: '400px',
    padding: '10px',
    borderRadius: '10px'  
  }
  return (
  <div style={personStyle}>
    <h1>Name: {props.name} </h1>
    <h3>hero of {props.nayika} </h3>
  </div>
  )
}

export default App;
