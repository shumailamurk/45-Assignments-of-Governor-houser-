// let employees=["Kianat","Uzma","Kiran"];
// for (let i=0; i<employees.length;i++)
// {
//     console.log (employees[i]);
// }

let employees=["admin","Kianat","Uzma","Kiran"]
for (let i=0; i<employees.length; i++){

    if (employees[i] == "admin"){
        console.log("Hello admin would you like to see some status report?")
}
else{
    console.log(`Hello ${employees[i]}`)
}
}