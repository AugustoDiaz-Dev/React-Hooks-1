import React, { useState, useEffect } from 'react'
// run effects only once
const HookMouse = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);
        // Component clenup code
        return () => {
            console.log('Component unmounted')
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []);

    return (
        <div>
            <h2>Run effects only once with useEffect()</h2>
            <p>Hooks X - {x} Y - {y}</p>
            <hr />
        </div>
    )
}

export default HookMouse