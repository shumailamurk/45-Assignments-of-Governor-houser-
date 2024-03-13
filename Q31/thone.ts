// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • .Remove all of the usernames from your array, and make sure the correct message is printed.

   
// let usernames: string[] = ["Shumaila","Uzma", "Kainat","Riimsha", "Naeem"];

// Check if the list of users is not empty

// if (usernames.length ===0) {
//     console.log("we need to find out somr users!")
// }
//     else{
//         for(let i=0; i<=usernames.length; i++){
//             console.log(usernames[i])
//                 }
//     }
// 2nd method
let usersnames : string[]=[];

if(usersnames.length ===0){
    console.log("we need to find out some users!")
}
else{
    for(let i=0; i<=usersnames.length; i++){
        console.log(usersnames[i])
    }
}










