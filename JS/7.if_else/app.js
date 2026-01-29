let userEmail = prompt("Enter your email !")
let userPassword = prompt("Enter your password !")

let DbEmail = "adil@gmail.com"
let DbPassword = 12345

let verify = userEmail === DbEmail && Number(userPassword) === DbPassword

if (verify) {

    console.log("USER LOGIN");


} else {
    console.log("INVALID EMAIL OR PASSWORD");
}


