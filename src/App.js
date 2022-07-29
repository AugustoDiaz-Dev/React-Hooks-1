import React from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {
  St1ClassCounter, St2HookCounter, St3ClassCounter2, St4HookCounter2, St5HookCounter3, St6HookCounter4, E1ClassCounter1, E2HookCounter1, E3ClassCounter2, E4HookCounter2, E5ClassMouse, E6HookMouse, E7MouseContainer, E8IntervalClassCounter, E9IntervalHookCounter, E10DataFetching, Cont1ComponentA
} from './exports.js'

export const UserContext = React.createContext();
export const ProductsContext = React.createContext();

function App() {
  return (
    <div className="text-center">
      <Header />

      <h2>useContext() Hook</h2>
      <UserContext.Provider value={'Augusto'}>
        <ProductsContext.Provider value={'No items available'}>
          <Cont1ComponentA />
        </ProductsContext.Provider>
      </UserContext.Provider>

      {/* <h2>useEffect() Hook</h2> */}
      {/* <E1ClassCounter1 /> */}
      {/* <E2HookCounter1 /> */}
      {/* <E3ClassCounter2 /> */}
      {/* <E4HookCounter2 /> */}
      {/* <E5ClassMouse /> */}
      {/* <E6HookMouse /> */}
      {/* <E7MouseContainer /> */}
      {/* <E8IntervalClassCounter /> */}
      {/* <E9IntervalHookCounter /> */}
      {/* <E10DataFetching /> */}

      {/* <h2>useState() Hook</h2> */}
      {/* <St1ClassCounter /> */}
      {/* <St2HookCounter /> */}
      {/* <St3ClassCounter2 /> */}
      {/* <St4HookCounter2 /> */}
      {/* <St5HookCounter3 /> */}
      {/* <St6HookCounter4 /> */}

      <Footer />
    </div>
  );
}

export default App;
