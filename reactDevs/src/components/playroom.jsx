import { useState } from 'react'
import '../styles/index.css'

const StatePlayground = () => {
    let initialCount = 0;
    let [count,setCount] = useState(initialCount);
    let [posts,setPosts] = useState([
        {
            id:1,
            title:"Super awesome hooks",
            body:"Everything is awesome when  you are part of a team"
        }
    ])


    const addOne = () => {
        setCount(count + 1)
    }

    const restOne = () => {
        setCount(prevCount => {
            let result = prevCount - 1
            return result;
        })
    }

    const restCount = () =>{
        setCount(initialCount)
    }

    const addOnePost = () => {
        let newPost = {
            id:2,
            title:"React is great",
            body:"New learning experience"
        }

        setPosts(prevPosts =>[
            ...prevPosts,
            newPost
        ])
    }


    return(
        <>
            <h3>Count:{count}</h3>
            <button onClick={addOne}>Add one +1</button>
            <button onClick={restOne}>Rest one -1</button>
            <button onClick={restCount}>RESET</button>
            <hr/>
            { posts.map( post => (
                <div key={post.id}>
                    <div><b>{post.title}</b></div>
                    <div>{post.body}</div>
                </div>
            ))
            }
            <button onClick={addOnePost}>Add a post</button>
        </>
    )
}


export default StatePlayground;