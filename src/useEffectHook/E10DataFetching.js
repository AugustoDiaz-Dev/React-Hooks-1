import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Fetch individual data
const E10DataFetching = () => {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromBtnClick, setIdFromBtnClick] = useState(1);

    const handleClick = () => {
        setIdFromBtnClick(id)
    }

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromBtnClick])

    return (
        <div>
            <h2>Fetching data with axios</h2>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <p> {post.id} - {post.title}</p>
            <hr />
        </div >
    )
}

export default E10DataFetching

// Fetch all the posts titles
// const E10DataFetching = () => {

//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         axios.get('http://jsonplaceholder.typicode.com/posts')
//             .then(res => {
//                 console.log(res)
//                 setPosts(res.data)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }, []);

//     return (
//         <div>
//             <h2>Fetching data with axios</h2>
//             <ul>
//                 {
//                     posts.map(post => <li key={post.id}>
//                         {post.id} - {post.title}
//                     </li>)
//                 }
//             </ul>
//             <hr />
//         </div>
//     )
// }

// export default E10DataFetching