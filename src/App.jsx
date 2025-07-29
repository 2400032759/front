import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Welcome To KLU</h1>
      <h2>I am Kakkireni Vishwas.</h2>
      <h3>Today's Date is 29-07-2025</h3>
      <h3>My ID Number is <b>2400032759</b></h3> 
      <Link to="/page1">Go to Page 1</Link>
      <br/> <br/>
      <Link to="/page2">Go to Page 2</Link>
      <br/><br/>
      <Link to="/page3">Go to Page 3</Link>
    </>
  );
}

export default App;
