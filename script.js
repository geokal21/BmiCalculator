 function calculateBMI() {
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value);
      const resultDiv = document.getElementById("result");

      if (!weight || !height || weight <= 0 || height <= 0) {
        resultDiv.textContent = "Please enter valid weight and height.";
        return;
      }

      const bmi = (weight / (height * height)).toFixed(1);
      let message = "";

      if (bmi < 18.5) {
        message = `Your BMI is ${bmi}, so you are underweight.`;
      } else if (bmi <= 24.9) {
        message = `Your BMI is ${bmi}, so you have a normal weight.`;
      } else {
        message = `Your BMI is ${bmi}, so you are overweight.`;
      }

      resultDiv.textContent = message;
    }