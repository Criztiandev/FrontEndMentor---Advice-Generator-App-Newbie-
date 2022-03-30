import React from "react";
import { useDrop } from "react-dnd";
import { NativeTypes } from "react-dnd-html5-backend";

function Editor({ onDrop }) {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.TEXT],
      drop: (item) => {
        if (onDrop) onDrop(item);
      },

      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [onDrop]
  );

  const isActive = canDrop && isOver;

  console.log(isActive);
  return (
    <div ref={drop} className="w-64 border border-black">
      Editor
    </div>
  );
}

export default Editor;
