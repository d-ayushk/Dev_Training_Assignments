/*

3. Create a function which executes linux command (eg: ifconfig) from nodejs and prints the result in console.

*/
const { exec } = require("child_process");

exec("ifconfig", (error, stdout, stderr) => {
    if (error) {
        console.error(error);
        return;
    }

    if (stderr) {
        console.error(stderr);
        return;
    }

    console.log(stdout);
});
