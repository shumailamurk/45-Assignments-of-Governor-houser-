"use strict";
// 29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
const favorit_fruits = ["banana", "orange", "fig"];
// // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorit_fruits.includes("orange")) {
    console.log("I like orange");
}
if (favorit_fruits.includes("banana")) {
    console.log("I like banana");
}
if (favorit_fruits.includes("fig")) {
    console.log("I like fig");
}
if (favorit_fruits.includes("apple")) {
    console.log("I don't like apples");
}
if (favorit_fruits.includes("melon")) {
    console.log("I don't like apples");
}

