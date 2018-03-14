console.log("login.js loaded");
/*
Work in the login.js file.

Create a userLogin object with one key for a user's name and one key for the user's password. (Just make up a user name and password.)

Write code that prompts the user for their password with a message customized to the user. For example, if the user name you created is octocat_rules, the message should be "Enter password for user octocat_rules."

Extend your previous code to check whether the password entered by the user actually matches the password in the userLogin object. The code should let the user know whether the passwords matched with console logs or a JavaScript alert.

If the passwords don't match, prompt the user to enter their password again. If the passwords match, make sure your code doesn't prompt the user again.

Bonus: Modify your user login to give the user only three chances to enter the correct password.
*/
let userLogin = {userName: 'davidthayer', password: 'password1'};
let passwordInput = prompt ("Enter password for user "+ userLogin.userName);

if (userLogin.password != passwordInput) {
  let passwordInput = prompt ("That is not " + userLogin.userName + "'s password");
} else {
  console.log("Passwords Match!")
}




// numIterations ensures this while loop doesn't go on forever
/*
var numIterations = 0;
while (true && numIterations < 100){
  console.log("still going!");
  numIterations++;
}
*/
