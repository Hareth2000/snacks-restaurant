// // //Q1

// const info = [];
// const items = [];

// let userName = prompt("Enter your Name please :");
// const parentElement = document.getElementById('parentDiv');
// const newParagraph = document.createElement('p');
// newParagraph.textContent = userName;
// parentElement.appendChild(newParagraph);

// info.push(userName);
// let Gender;

// while (true) {
//   Gender = prompt("Enter Your Gender please:");
//   if (Gender === "male" || Gender === "female") {
//     break;
//   } else {
//     alert("Invalid input. Please enter 'male' or 'female'.");
//   }
// }
// if (Gender === "male") {
//   items.push(Gender);
//   info.push(Gender);
//   alert(`Welcome, Mr. ${userName}!`);
// } else if (Gender === "female") {
//   info.push(Gender);
//   items.push(Gender);
//   alert(`Welcome, Ms. ${userName}!`);
// }

// let orderChoice = prompt("Would you like to order shawarma, zinger, or burger");

// items.push(orderChoice);
// info.push(orderChoice);
// alert(`Your ${orderChoice} is being prepared.`);


//   const orderedList = document.createElement('ol');


//   for (let i = 0; i < items.length; i++) {
//       const listItem = document.createElement('li'); 
//       listItem.textContent = items[i]; 
//       orderedList.appendChild(listItem); 
//   }

//   document.getElementById('list-container').appendChild(orderedList);

// for (let i = 0; i < info.length; i++) {

//   console.log(info[i]);

// }

///////////// event task //////////////


const genderSelect = document.getElementById("gender");
const radioButtonDiv = document.getElementById("radiobutton");
const submitButton = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");


const genderOptions = ["Male", "Female"];
genderOptions.forEach((gender) => {
  const option = document.createElement("option");
  option.value = gender;
  option.textContent = gender;
  genderSelect.appendChild(option);
});

const orders = ["Shawarma", "Zinger", "Burger"];
orders.forEach((order) => {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.id = order.toLowerCase();
  radio.name = "order";
  radio.value = order;

  const label = document.createElement("label");
  label.setAttribute("for", radio.id);
  label.textContent = order;

  radioButtonDiv.appendChild(radio);
  radioButtonDiv.appendChild(label);
  radioButtonDiv.appendChild(document.createElement("br"));
});

submitButton.addEventListener("click", function () {

  const username = document.getElementById("username").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const orderType = document.querySelector('input[name="order"]:checked')?.value;

  if (!username || !age || !gender || !orderType) {
    resultDiv.innerHTML = `<p style="color: red;">Please fill in all fields!</p>`;
    return;
  }

  resultDiv.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Order Type:</strong> ${orderType}</p>
    `;
});



////////////////////////////////////////////////////////











// // //Q2
// let num = prompt("Enter your number from 0 to 10:");
// switch (Number(num)) {
//   case 1:
//     console.log("ONE");
//     break;
//   case 2:
//     console.log("TWO");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   case 4:
//     console.log("FOUR");
//     break;
//   case 5:
//     console.log("FIVE");
//     break;
//   case 6:
//     console.log("SIX");
//     break;
//   case 7:
//     console.log("SEVEN");
//     break;
//   case 8:
//     console.log("EIGHT");
//     break;
//   case 9:
//     console.log("NINE");
//     break;
//   default:
//     console.log("PLEASE TRY AGAIN");
// }


// // task two
// //Q1
// for (let i = 0; i <= 5; i++) {
//   alert(i);
// }


// //Q2
// let number;
// while (true) {
//   number = prompt("Please enter a number between 0 and 100:");

//   if (number >= 0 && number <= 100) {
//     break;
//   } else {
//     alert("Invalid input. Please enter a number between 0 and 100.");
//   }
// }
// alert(`Thank you! You entered a valid number: ${number}`);


// //Q3
// let number2 = parseInt(prompt("Please enter an integer:"));
// let sum = 0;
// for (let i = 0; i <= number2; i++) {
//   sum += i;
// }
// alert(`The sum of integers from 0 to ${number2} is: ${sum}`);



