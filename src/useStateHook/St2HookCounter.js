import React, { useState } from 'react'
// This is a unsafe way to use useState Hook, even if it is working.
// 1- Create a Component
const HookCounter = () => {
    // 2- Create a state variable
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Functional Component Counter</h2>
            {/* 3- Create the method to update the state variable  */}
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <hr />
        </div>
    )
}

export default HookCounter