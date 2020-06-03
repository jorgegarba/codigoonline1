import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = (props) => {

 console.log("Props de Home");
 console.log(props);
 return (
  <div>
   <h2>Página Home</h2>
  </div>
 )
}

export default withRouter(Home)
