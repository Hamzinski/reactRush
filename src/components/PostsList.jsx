import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Hamz" body="React refresherr!" />
        <Post author="Hakotaktak" body="React refresherr!" />
      </ul>
    </>
  );
}

export default PostsList;
