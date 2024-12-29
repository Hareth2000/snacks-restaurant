//Q1
let userName = prompt("Enter your Name please :");
let Gender = prompt("Enter Your Gender please :");
if (Gender == "male") {
    alert(`Welcome, Mr. ${userName}!`);
} else if (Gender == "female") {
    alert(`Welcome, Ms. ${userName}!`);
} else {
    alert(`Welcome,${userName}!`);
}
let orderChoice = prompt("Would you like to order shawarma, zinger, or burger");
alert(`Your ${orderChoice} is being prepared.`);



//Q2
let num = prompt("Enter your number from 0 to 10:");
switch (Number(num)) {
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("FOUR");
        break;
    case 5:
        console.log("FIVE");
        break;
    case 6:
        console.log("SIX");
        break;
    case 7:
        console.log("SEVEN");
        break;
    case 8:
        console.log("EIGHT");
        break;
    case 9:
        console.log("NINE");
        break;
    default:
        console.log("PLEASE TRY AGAIN");
}



