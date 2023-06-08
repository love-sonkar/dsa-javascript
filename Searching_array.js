let array = [32, 12, 23, 87, 12];

let searchTerm = 12;

//loop till array's length
function SearchItemsfromArray(arr) {
  let SearchItem = [];
  for (let i = 0; i < arr.length; i++) {
    // if we found our search term then we push those elements to searchitem then we can see all the search terms in searchitem
    if (arr[i] === searchTerm) {
      SearchItem = [...SearchItem, arr[i]];
    }
  }
  return SearchItem;
}

console.log(SearchItemsfromArray(array));
