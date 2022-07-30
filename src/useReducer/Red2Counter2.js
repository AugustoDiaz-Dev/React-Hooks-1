import React, { useReducer } from 'react'
// With complex states & complex actions we use objects.
// In this example by using state as an object you are able to keep track of multiple counters. This is useful when you are dealing with global state. 
const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
// The reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value };
        case 'reset':
            return initialState
        default:
            return state;
    }
}

function Red2Counter2() {
    // Call useReducer() Hook
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>useReducer() counter with complex state & complex action</h2>
            <p>The First Counter value is: {count.firstCounter}</p>
            <p>The Second Counter value is: {count.secondCounter}</p>
            {/* Use the dispatch method to dispatch the appropriate action */}
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment 2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement 2</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <hr />
        </div >
    )
}

export default Red2Counter2