import React, { useContext } from 'react'
import { CountContext } from '../App'
// All this code is to create a counter with a single value shared between components.
// In App component we create our counter using the useReducer() Hook. We declare the initialState and define the reducer function which modifies that state. We pass it as parameters to use reducer which returns the current state value and de dispatch method. We provide this pair of values and create a context called CountContext. At the top most level we provided the two values as an object. Finally in the necessary components we use useContext() to get hold of the context values and access the appropriate values: countDispatch and countState
function Red4AComponent() {

    const countContext = useContext(CountContext);

    return (
        <div>
            <h3>Red4AComponent - Count Value: {countContext.countState}</h3>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default Red4AComponent
