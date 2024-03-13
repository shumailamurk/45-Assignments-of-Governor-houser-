let guestA= ["Uzma  ", "kainat  ", "kiran  "];
let absentA= "Kiran "
let newoneA = "Farhana "
guestA[guestA.indexOf(absentA)]=newoneA;
console.log (guestA);
guestA.unshift("kalia");
console.log(guestA);
let middleGuestA = "Imran khan";
let middleIndexA = guestA.length/2;
guestA.splice(middleIndexA,0,middleGuestA);
guestA.push("Honey singh");
console.log(guestA);
guestA.map((item)=>
console.log(`Dear,${item},You are cordially invited to a dinner`));
console.log(guestA.length+"people" + "" +"are invited to a dinner");