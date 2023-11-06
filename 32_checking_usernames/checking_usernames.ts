let current_users: string[] = ["admin", "user_1", "user_2", "guest", "temp"];

let new_users: string[] = ["n_u_1", "n_u_2", "n_u_3", "user_1", "temp"];

new_users.forEach((user) => {
    if(current_users.indexOf(user || user.toLowerCase() || user.toUpperCase()) >= 0){
        console.log("The person will need to enter a new username.")
    }
    else{
        console.log("The username, ", user, "is available.")
    }
});
