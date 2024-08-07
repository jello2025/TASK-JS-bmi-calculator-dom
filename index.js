function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height = height / 100;
  height = height * height;
  let BMI = weight / height;

  alert(`your BMI is ${BMI}`);

  if (BMI < 18.5) {
    alert("Underweight, eat or death you shall defeat");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    alert("healthy weight, good job bruv");
  } else if (BMI >= 25 && BMI <= 29.9) {
    alert("Overweight, gotta hit de gym bruv");
  } else {
    alert("Above Obesity, GG");
  }

  if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) {
    alert(`${BMI} at the age ${age} is healthy`);
  } else if (age >= 24 && age <= 34 && BMI >= 20 && BMI <= 25) {
    alert(`${BMI} at the age ${age} is healthy`);
  } else if (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26) {
    alert(`${BMI} at the age ${age} is healthy`);
  } else if (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27) {
    alert(`${BMI} at the age ${age} is healthy`);
  } else if (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28) {
    alert(`${BMI} at the age ${age} is healthy`);
  } else if (age > 65 && BMI >= 24 && BMI <= 29) {
    alert(`${BMI} at the age ${age} is healthy`);
  } else {
    alert(`${BMI}BMI at the age ${age} is not healthy`);
  }
}
