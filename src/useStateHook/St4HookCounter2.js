import React, { useState } from 'react'
// Using prevCount. Reset, Increse, Decrease and Increse by 5.
// prevCount is a function that has access to the old value of the state.
const HookCounter2 = () => {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <h2>Functional Component with reset, Increase, Decrease and Increment by 5 methods.</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
            <button onClick={incrementFive}>Increment by 5</button>
            <hr />
        </div>
    )
}

export default HookCounter2