

// Try merging them all into a single array using the spread operator!

const fruits = ["apple", "banana", "cherry"];
const vegetables = ["carrot", "broccoli", "spinach"];
const grains = ["rice", "quinoa", "oats"];
const proteins = ["chicken", "fish", "tofu"];

//merge the four arrays
const mergingArray = [...fruits,...vegetables,...grains,...proteins]
console.log(mergingArray)