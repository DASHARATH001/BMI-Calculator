const height=document.querySelector("#height");
const weight=document.querySelector("#weight");

// console.log(weight.value);

const age = document.querySelector("#age");
const genderMale = document.querySelector("#male");
const genderFemale = document.querySelector("#female");
// console.log(genderFemale);
const result = document.querySelector("#result");
const calculateButton = document.querySelector("#calculate");
const clearbutton = document.querySelector("#clear");

calculateButton.addEventListener("click",()=>{
    // console.log("hello ji");
    const bmi=Number(weight.value)/ (Number(height.value) / 100) ** 2;
    // console.log(bmi);/
    const overallbmi = Math.round(bmi * 100) / 100;
  console.log(overallbmi);

  if (overallbmi < 18.5) {
    feedback = `Underweight: BMI ${overallbmi} 🟩 `;
  } else if (overallbmi >= 18.5 && overallbmi <= 24.9) {
    feedback = `Normal weight : BMI ${overallbmi}  🟢`;
  } else if (overallbmi >= 25 && overallbmi <= 29.9) {
    feedback = `Overweight : BMI ${overallbmi}  🟡`;
  } else if (overallbmi >= 30) {
    feedback = `Obese: BMI ${overallbmi} 🔴`;
  } else {
    feedback = "invalid input. Please check your height and weight";
  }
  result.innerHTML = feedback;
});

clearbutton.addEventListener("click",()=>{
    genderMale.checked = true;
  genderFemale.checked = false;
  age.value = 2;
  height.value = 180;
  weight.value = 65;
  result.innerHTML = "Result";
});

