var guest2 = ["Kiran", "Kainat", "Uzma", "Khani", "Hiba"];
console.log("Dear ".concat(guest2[0], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guest2[1], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guest2[2], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guest2[3], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guest2[4], ", you are cordially invited to dinner."));
console.log("Dear ".concat(guest2[5], ", you are cordially invited to dinner."));
console.log("We just found out that the new dinner table won't arrive in time for the dinner, and we can only invite two guests.");
while (guest2.length > 2) {
    var removedGuest = guest2.pop();
    console.log("Sorry, ".concat("Uzma", ", we can't invite you to dinner."));
}
guest2.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
guest2.pop();
guest2.pop();
console.log("Final guest list:", guest2);
