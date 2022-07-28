import React from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { St1ClassCounter, St2HookCounter, St3ClassCounter2, St4HookCounter2, St5HookCounter3, St6HookCounter4 } from './exports.js'

function App() {
  return (
    <div className="text-center">
      <Header />
      <h2>useState() Hook</h2>
      <St1ClassCounter />
      <St2HookCounter />
      <St3ClassCounter2 />
      <St4HookCounter2 />
      <St5HookCounter3 />
      <St6HookCounter4 />
      <Footer />
    </div>
  );
}

export default App;
