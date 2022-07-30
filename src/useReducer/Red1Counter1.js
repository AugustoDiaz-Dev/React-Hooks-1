import React, { useReducer } from 'react'
// With simple state and simple action we use simple values. We don't need to use objects.
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

function Red1Counter1() {
    // Call useReducer() Hook
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>useReducer() counter with simple state & simple action</h2>
            <p>The count is: {count}</p>
            {/* Use the dispatch method to dispatch the appropriate action */}
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <hr />
        </div>
    )
}

export default Red1Counter1