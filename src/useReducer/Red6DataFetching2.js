import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
// Fetching data with useReducer and useEffect()
const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something went wrong',
                post: {}
            }
        default:
            return state
    }
}

function Red6DataFetching2() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            // Promise
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            }
            )
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            },
            )
    },
        []);

    return (
        <div>
            <h2>Data Fetching 2. useReducer() & useEffect()</h2>
            {state.loading ? <p>Loading...</p> : <p>{state.post.title}</p>}
            {state.error ? <p>{state.error}</p> : null}
            <hr />
        </div>
    )
}

export default Red6DataFetching2