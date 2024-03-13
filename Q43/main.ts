"use strict";
//43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const magicians = ["Aalto", "Simo· Abbot", "David·Baker", "Al · Balducci", "Ed · Cagliostro"];
function show_magicians(magicians) {
    console.log(magicians);
}
function makeGreat(magicians) {
    return magicians.map((magicians) => `${magicians} the Greate`);
}
const magicianscopy = ["Aalto", "Simo · Abbot", "David · Baker", "Al · Balducci", "Ed · Cagliostro"];
const greatMagicians = makeGreat(magicianscopy);
console.log("\nGreat Magicians");
show_magicians(greatMagicians);