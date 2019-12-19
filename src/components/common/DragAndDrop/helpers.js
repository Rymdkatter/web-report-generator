const move = (array, oldIndex, newIndex) => {
  const insertIndex = Math.min(array.length - 1, newIndex);
  array.splice(insertIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
};

const moveElement = (array, index, offset) => {
  const newIndex = index + offset;
  return move(array, index, newIndex);
};

export default moveElement;
