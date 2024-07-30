import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Hamz" body="React refresherr!" />
      <Post author="Hakotaktak" body="React refresherr!" />
    </ul>
  );
}

export default PostsList;
