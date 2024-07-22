export default function getNeighborhoodsList() {
  const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const addNeighborhood = (addnewNeighborhood) => {
    sanFranciscoNeighborhoods.push(addnewNeighborhood);
    return sanFranciscoNeighborhoods;
  };
  const getNeighborhoodsList = () =>  sanFranciscoNeighborhoods;
    return {
    addNeighborhood
};
}
