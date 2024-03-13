// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let locationarr:string[] =  ["Saudia Arabia","Paris", "Egypt", "South Africa", "Murry"];
locationarr.map((items) =>console.log(`${items}`));
let arrangearray = locationarr.sort();
console.log(`alphabetical order:,${arrangearray}`);
let locationarr1:string[] =  ["Saudia Arabia","Paris", "Egypt", "South Africa", "Murry"];
console.log("original order(unchanged):",locationarr1);
console.log("reverse Alphabetical order:",[...locationarr].sort().reverse());
console.log("original order(unchanged):",locationarr1);
locationarr.reverse();
console.log("Reversed order:",locationarr.reverse());
console.log("Back to original order:",locationarr1);
locationarr.sort();
console.log("Sorted in Alphabetical order:",locationarr);
locationarr.sort((a,b) =>b.localeCompare(a));
console.log("sorted in Reverse alphabetical Order:",locationarr);