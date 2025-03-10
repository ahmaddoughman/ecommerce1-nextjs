import React from 'react'
import styles from './blog.module.css'
import PostCart from '@/components/postCard/PostCard'
import { getPosts } from "@/lib/data";


// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export default async function Blog() {

  // FETCH DATA WITH AN API
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCart post={post} />
        </div>
      ))}
    </div>
  )
}
