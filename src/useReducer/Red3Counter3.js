import React, { useReducer } from 'react'
// Multiple reducers. When dealing with multiple state variables that have the same state transitions it is a good idea to have multiple useReducers() making USE of THE SAME REDUCER FUNCTION. This will avoid complexity.
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

function Red3Counter3() {
    // Call useReducer() Hook
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>useReducer() counter with multiple reducers</h2>

            <p>The count is: {count}</p>
            {/* Use the dispatch method to dispatch the appropriate action */}
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

            <p>The count is: {count2}</p>
            {/* Use the dispatch method to dispatch the appropriate action */}
            <button onClick={() => dispatch2('increment')}>Increment</button>
            <button onClick={() => dispatch2('decrement')}>Decrement</button>
            <button onClick={() => dispatch2('reset')}>Reset</button>

            <hr />
        </div>
    )
}

export default Red3Counter3