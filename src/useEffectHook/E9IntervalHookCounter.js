import React, { useState, useEffect } from 'react'
// Dan Abramov: "If you think dependecy array is a way to specify when you want to re-run the effect you are going to run into problems. Instead dependency array should be taught us as a way to let React know about everything that the effect must watch for changes"
// KEY POINT: It is possible to include multiple useEffect() hooks in a component. So if you have multiple useEffect() hooks, make sure to separate them to have a better understanding and control of what is happening.
const E9IntervalHookCounter = () => {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        // clearInterval(interval)
        return () => {
            clearInterval(interval)
        }
    }, [count]) // It's a common begginers mistake to leave out the dependecy list.

    return (
        <div>
            <h2>Interval Hook Counter</h2>
            <p>{count}</p>
        </div>
    )
}

export default E9IntervalHookCounter