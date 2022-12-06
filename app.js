const userName = document.getElementById("txt-name");
const userAge = document.querySelector("#txt-age");
const btnCalculate = document.getElementById("btn-calculate");
const response = document.getElementById("p-result");

btnCalculate.addEventListener("click", calculateAge);
userAge.addEventListener("keydown", tryAge);

function tryAge(event) {  
    let username = userName.value;
    let age = parseInt(userAge.value);
    if (event.code === "Enter") {
      if (age >= 18) {
        response.textContent = `Sr(a), ${username}, You can vote!`
        response.style.color = "green";
      } else {
        response.textContent = `Sr(a), ${username}, You can't vote`    
        response.style.color = "red";
      }
    }
}


function calculateAge() {
  let username = userName.value;
  let age = parseInt(userAge.value);
  if (age >= 18) {
    response.textContent = `Sr(a), ${username}, You can vote!`
    response.style.color = "green";
  } else {
    response.textContent = `Sr(a), ${username}, You can't vote`    
    response.style.color = "red";
  }
}

let currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentMonth.getMonth();
const currentYear = currentDate.getFullYear();
console.log(`${currentDay}-${currentMonth+1}-${currentYear}`);

let currentBirthday = birthday.value.split('-');
console.log(currentBirthday);
console.log(typeof currentBirthday);
