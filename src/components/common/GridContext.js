import React, { Component, createContext } from 'react';
import { moveElement } from './DragAndDrop/helpers';
import ContentItems from "./ContentItems";

const GridContext = createContext({ items: [] });

export class GridProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ContentItems,
      moveItem: this.moveItem,
      setItems: this.setItems
    };
  }

  render() {
    return (
      <GridContext.Provider value={this.state}>
        {this.props.children}
      </GridContext.Provider>
    );
  }

  setItems = items => this.setState({ items });

  moveItem = (sourceId, destinationId) => {
    const sourceIndex = this.state.items.findIndex(
      item => item.id === sourceId
    );
    const destinationIndex = this.state.items.findIndex(
      item => item.id === destinationId
    );

    if (sourceId === -1 || destinationId === -1) {
      return;
    }

    const offset = destinationIndex - sourceIndex;

    this.setState(state => ({
      items: moveElement(state.items, sourceIndex, offset)
    }));
  };
}

export default GridContext;