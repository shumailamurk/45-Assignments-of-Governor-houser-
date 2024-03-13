var guest1 = ["Uzma  ", "kainat  ", "kiran  "];
var absent1 = "Kiran ";
var newone1 = "Farhana ";
guest1[guest1.indexOf(absent1)] = newone1;
console.log(guest1);
// guest.map((item)=>
// console.log(`Dear ${item}, You are cordially invited to dinner`));
guest1.unshift("kalia");
console.log(guest1);
var middleGuest = "Imran khan";
var middleIndex = guest1.length / 2;
guest1.splice(middleIndex, 0, middleGuest);
guest1.push("Honey singh");
console.log(guest1);
guest1.map(function (item) {
    return console.log("Dear,".concat(item, ",You are cordially invited to a dinner"));
});
