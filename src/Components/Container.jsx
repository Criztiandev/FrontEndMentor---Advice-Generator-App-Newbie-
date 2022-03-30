import React, { useCallback, useState } from "react";
import Editor from "./Editor";
function Container() {
  const [dropItem, setDropItem] = useState("");

  // If there is an Item being dropm nake it as an html

  const handleDrop = useCallback(
    (item) => {
      if (item) {
        setDropItem(item.text);
      }
    },
    [setDropItem]
  );

  const text = "This is a dragable Text need to converted to h1";

  return (
    <div className="flex min-h-screen items-center justify-between border border-black  p-8">
      <Editor onDrop={handleDrop} />

      <article>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={text}
          onChange={() => setDropItem()}
        ></textarea>
      </article>

      <div className=" border border-black p-4">
        <h1 className=" font-bold">{dropItem}</h1>
      </div>
    </div>
  );
}

export default Container;
