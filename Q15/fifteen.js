var guest = ["Uzma  ", "kainat  ", "kiran  "];
console.log(guest);
var absent = "Kiran ";
console.log(absent + "Can not make it, for dinner");
var newone = "Farhana ";
guest[guest.indexOf(absent)] = newone;
guest.map(function (item) {
    return console.log("Dear ".concat(item, ", You are cordially invited to dinner"));
});
