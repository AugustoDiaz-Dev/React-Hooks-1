import React, { useState, useEffect } from 'react'
import axios from 'axios'
// Fetching data with useState() and useEffect()
function Red5DataFetching1() {

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            // Promise
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            }
            )
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            },)
    }, []);

    return (
        <div>
            <h2>Data Fetching</h2>
            {loading ? <p>Loading...</p> : <p>{post.title}</p>}
            {error ? <p>{error}</p> : null}
            <hr />
        </div>
    )
}

export default Red5DataFetching1