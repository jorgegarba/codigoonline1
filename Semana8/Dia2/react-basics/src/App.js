import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <div>
      <Header titulo={"Mi primera App"} />
      <main>
        <h2>Tienda</h2>
        <hr />
      </main>
      <Footer />
    </div>
  );
}

export default App;
