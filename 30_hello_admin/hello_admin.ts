let users: string[] = ["admin", "user_1", "user_2", "guest", "temp"];

// let login_username = "admin";
let login_username = "guest";
// let login_username = "root";

if(login_username == "admin" && users.indexOf(login_username) >=0){
    console.log("Hello, ", users[users.indexOf(login_username)], ". Would you like to see a status report?")
}
else if(users.indexOf(login_username) >=0){
    console.log("Hello, ", users[users.indexOf(login_username)], ". Thank you for logging in again.")
}