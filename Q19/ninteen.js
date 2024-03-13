var guestA = ["Uzma  ", "kainat  ", "kiran  "];
var absentA = "Kiran ";
var newoneA = "Farhana ";
guestA[guestA.indexOf(absentA)] = newoneA;
console.log(guestA);
guestA.unshift("kalia");
console.log(guestA);
var middleGuestA = "Imran khan";
var middleIndexA = guestA.length / 2;
guestA.splice(middleIndexA, 0, middleGuestA);
guestA.push("Honey singh");
console.log(guestA);
guestA.map(function (item) {
    return console.log("Dear,".concat(item, ",You are cordially invited to a dinner"));
});
console.log(guestA.length + "people" + "" + "are invited to a dinner");
