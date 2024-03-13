let guest= ["Uzma  ", "kainat  ", "kiran  "];
console.log(guest);
let absent= "Kiran "
console.log ( absent + "Can not make it, for dinner");
let newone = "Farhana "
guest[guest.indexOf(absent)]=newone;
guest.map((item)=>
console.log(`Dear ${item}, You are cordially invited to dinner`));