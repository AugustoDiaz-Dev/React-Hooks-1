import React, { useState, useEffect } from 'react'
// Conditionally run effects using useEffect(() => {},[])
// For conditionally executing an effect we pass in a second parameter, an array and we need to specify props and state it has to watch for. 
const E4HookCounter1 = () => {

    const initialValue = 0;
    const [count, setCount] = useState(initialValue);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect() - Updating the document title');
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <h2>Conditinally run effects using useEffect()</h2>
            <p>How do we tell to React to conditionally run useEffect() only when the count value changes?</p>
            <input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times.</button>
            <hr />
        </div>
    )
}

export default E4HookCounter1