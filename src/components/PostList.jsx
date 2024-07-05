import NewPost from '../routes/NewPost'
import styles from './PostList.module.css'
import { useEffect, useState } from 'react'
import Post from './Post'
import { useLoaderData } from 'react-router-dom'
export default function PostList() {
    const posts = useLoaderData()
    console.log("PL",posts)
    return (
    <>
        {posts.length >= 1 ? 
        <ul className={styles.posts}>
            {posts.map((postData, index) => 
                <Post key={postData.id} author={postData.author} text={postData.body} id={postData.id}/>
            )}
        </ul> : 
        <div>
            <p style={{
                    textAlign: "center",
                    color: "white"
                }}>
                    No posts yet. Add some!
            </p>
        </div> }
    </>
    )
}