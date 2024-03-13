// 32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// typescript
// Make a list of current users
var currentUsers = ['john', 'alice', 'bob', 'emma', 'david'];
// Make a list of new users
var newUsers = ['emma', 'peter', 'ALICE', 'sarah', 'mike'];
// Function to check if a username is available
function isUsernameAvailable(username) {
    return !currentUsers.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
// Loop through new users and check availability
newUsers.forEach(function (user) {
    if (isUsernameAvailable(user)) {
        console.log("Username '".concat(user, "' is available."));
    }
    else {
        console.log("Username '".concat(user, "' is already taken. Please enter a new username."));
    }
});
