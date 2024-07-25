import ClassRoom from './0-classroom';

function initializeRooms() {
  const size = [19, 20, 34];
  return size.map((size) => new ClassRoom(size));
}

export default initializeRooms;
