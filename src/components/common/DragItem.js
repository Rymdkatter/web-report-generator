import React, { memo, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const DragItem = memo(({ id, onMoveItem, children }) => {
  const ref = useRef(null);

  const [{ isDragging }, connectDrag] = useDrag({
    item: { id, type: "contentBlock" },
    collect: monitor => {
      return {
        isDragging: monitor.isDragging()
      };
    }
  });

  const [, connectDrop] = useDrop({
    accept: "contentBlock",
    hover(hoveredOverItem) {
      if (hoveredOverItem.id !== id) {
        onMoveItem(hoveredOverItem.id, id);
      }
    }
    });

  connectDrag(ref);
  connectDrop(ref);

  return React.Children.map(children, child => React.cloneElement(child, { forwardedRef: ref }));
});

export default DragItem;