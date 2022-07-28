import React, { useState } from 'react'
import { E6HookMouse } from '../exports';
// useEffect with cleanup
// KEY POINT: If you don't do it you are going to get an error: Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
function E7MouseContainer() {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <h2>useEffect() cleanup</h2>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <E6HookMouse />}
        </div>
    )
}

export default E7MouseContainer