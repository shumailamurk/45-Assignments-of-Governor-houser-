// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_Magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
var magiciansNames = ['Amna', 'Ayat', 'Faheem'];
show_Magicians(magiciansNames);
