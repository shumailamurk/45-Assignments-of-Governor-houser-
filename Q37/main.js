// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt is size ".concat(size, " and has the message \"").concat(message, "\" printed on it."));
}
make_shirt(); // The shirt is size large and has the message "I love TypeScript" printed on it.
make_shirt("medium"); // The shirt is size medium and has the message "I love TypeScript" printed on it.
make_shirt("small", "Programming rocks!"); // The shirt is size small and has the message "Programming rocks!" printed on it.
