import React from "react";

const names = ["Hakotaktak", "Batuflex"];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chosenName}</p>
    </div>
  );
}

export default Post;
