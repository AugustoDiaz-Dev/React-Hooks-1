import React, { useState } from 'react'
// useState() with an Object. Form. 
// { ...name, firstName: e.target.value } ...name (spread operator) is telling React to copy the values that are present in the "name" object and update only firstName.
// KEY POINT: the setter function provided by the useStateHook does not automatically merge and update objects. You have to do it manually merge it yourself using the spread operator and then pass it to the setter function.
const HookCounter3 = () => {

    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })

    return (
        <div>
            <h2>Functional Component with inputs</h2>
            <form>
                <h3>Form</h3>
                <input type="text" placeholder="First Name" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />

                <input type="text" placeholder='Last Name' value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })} />

                <p>Your name is: {name.firstName} {name.lastName}</p>

            </form>
            <hr />
        </div>
    )
}

export default HookCounter3

