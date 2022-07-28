import React, { useState, useEffect } from 'react'
// KEY POINT: useEffect runs after every render of the component.
const E2HookCounter1 = () => {

    const initialValue = 0;
    const [count, setCount] = useState(initialValue);
    // useEffect() should be placed inside of the component to access the component state and props without having to write any additional code.
    useEffect(() => {
        // This function has to be executed after every render of the component.
        document.title = `You clicked ${count} times`;
    })

    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>Change de document title counter value with using useEffect()</h2>
            <button onClick={incrementCount}>Count {count}</button>
            <hr />
        </div>
    )
}

export default E2HookCounter1