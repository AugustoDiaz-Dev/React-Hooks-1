import React, { useState } from 'react'
// useState() with an array. 
// KEY POINT: the setter function provided by the useStateHook does not automatically merge and update arrays. You have to do it manually merge it yourself using the spread operator and then pass it to the setter function.
const HookCounter4 = () => {

    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([
            ...items, {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }

    return (
        <div>
            <h2>Functional Component. Add items.</h2>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>New Item: {item.value}</li>
                )
                )}
            </ul>
            <hr />
        </div>
    )
}

export default HookCounter4