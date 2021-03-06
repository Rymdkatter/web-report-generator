import React, {useContext} from "react";
import {Block} from "./Block";
import DragItem from "./DragItem";
import {GridItem} from "./Grid";
import GridContext from "./GridContext";


export const BlockList = React.memo(({ blocks }) => {
  const { items, moveItem } = useContext(GridContext);

  return items.map((item, index) => (
    <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
      <GridItem>
        <Block block={item} index={item.id} />
      </GridItem>
    </DragItem>
  ));
});