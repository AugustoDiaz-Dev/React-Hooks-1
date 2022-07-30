import React, { useReducer, useContext } from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {
  St1ClassCounter, St2HookCounter, St3ClassCounter2, St4HookCounter2, St5HookCounter3, St6HookCounter4, E1ClassCounter1, E2HookCounter1, E3ClassCounter2, E4HookCounter2, E5ClassMouse, E6HookMouse, E7MouseContainer, E8IntervalClassCounter, E9IntervalHookCounter, E10DataFetching, Cont1ComponentA, Red1Counter1, Red2Counter2,
  Red3Counter3, Red4AComponent, Red4BComponent, Red4CComponent, Red5DataFetching1, Red6DataFetching2
} from './exports.js'

// useContext() Hook
export const UserContext = React.createContext();
export const ProductsContext = React.createContext();

// useReducer() Hook
export const CountContext = React.createContext();
const initialState = 0;
// The reducer function
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState
    default:
      return state;
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="text-center">
      <Header />

      <h2>useReducer() Hook</h2>
      {/* <Red1Counter1 /> */}
      {/* <Red2Counter2 /> */}
      {/* <Red3Counter3 /> */}

      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <p>Multiple components sharing the same global count value: {count}</p>
        <Red4AComponent />
        <Red4BComponent />
        <Red4CComponent />
      </CountContext.Provider> */}

      {/* <Red5DataFetching1 /> */}

      <Red6DataFetching2 />

      {/* <h2>useContext() Hook</h2>
      <UserContext.Provider value={'Augusto'}>
        <ProductsContext.Provider value={'No items available'}>
          <Cont1ComponentA />
        </ProductsContext.Provider>
      </UserContext.Provider> */}

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
