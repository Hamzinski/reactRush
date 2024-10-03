import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
function PostsList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          {" "}
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Hakotaktak" body="React is sugoii!" />
      </ul>
    </>
  );
}

export default PostsList;
