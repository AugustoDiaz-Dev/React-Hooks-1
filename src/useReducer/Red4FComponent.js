import React, { useContext } from 'react'
import { CountContext } from '../App'

function Red4FComponent() {

    const countContext = useContext(CountContext)

    return (
        <div>
            <h3>Red4FComponent  - Count Value: {countContext.countState}</h3>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            <hr />
        </div>
    )
}

export default Red4FComponent
