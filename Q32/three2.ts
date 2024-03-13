// 32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// typescript
// Make a list of current users
const currentUsers: string[] = ['john', 'alice', 'bob', 'emma', 'david'];

// Make a list of new users
const newUsers: string[] = ['emma', 'peter', 'ALICE', 'sarah', 'mike'];

// Function to check if a username is available
function isUsernameAvailable(username: string): boolean {
    return !currentUsers.some(user => user.toLowerCase() === username.toLowerCase());
}

// Loop through new users and check availability
newUsers.forEach(user => {
    if (isUsernameAvailable(user)) {
        console.log(`Username '${user}' is available.`);
    } else {
        console.log(`Username '${user}' is already taken. Please enter a new username.`);
    }
});





















