import React from 'react';

// const getPosts = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     return await res.json()
// }

const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!res.ok){
        throw new Error("Failed to fetch posts")
    }
    return await res.json()
}

// const getPosts = async () => {
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//         return await res.json()
//     }
//     catch(err){
//         throw new Error("Failed to fetch posts")
//     }
// }

const page = async () => {

    const data = await getPosts()
    // console.log(data)

    return (
        <div>
            Post beta
        </div>
    );
};

export default page;