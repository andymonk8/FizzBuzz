//get starting values from the scree
//Controller Function

function getValues() {
  // get the values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;
  let customValue = document.getElementById("customValue").value;

  // parse the values in to integers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);
  customValue = parseInt(customValue);

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && fizzValue > 0 && buzzValue > 0 && Number.isInteger(customValue)) {
    // generate the numbers based on user input
    let numbers = generateFizzBuzz(fizzValue, buzzValue, customValue);

    // display result on page
    displayFizzBuzz(numbers);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Only intergers and numbers greater than 0 are allowed for FizzBuzz!",
    });
  }
}

function generateFizzBuzz(fizzValue, buzzValue, customValue) {
  let fizzbuzz = [];
  let cap = customValue;

  for (let i = 1; i <= cap; i++) {
    if((i % fizzValue == 0) && (i % buzzValue == 0)){
      fizzbuzz.push('FizzBuzz');
    }
    else if(i % fizzValue == 0){
      fizzbuzz.push('Fizz')
    }
    else if(i % buzzValue == 0){
      fizzbuzz.push('Buzz')
    }    
    else{
      fizzbuzz.push(i);
    }
  }

  return fizzbuzz;
}

function displayFizzBuzz(numbers) {
  let className = "even";
  let templateRows = "";

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (i % 10 == 0) {
      templateRows += "<tr>";
    }

    templateRows += `<td class="${className}"> ${number} </td>`;

    //An templateRows += `<tr><td class="${className}">${number}</td></tr>`;

    if ((i + 1) % 10 == 0) {
      templateRows += "</tr>";
    }
  }

  document.getElementById("results").innerHTML = templateRows;
}

/* for (let i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
} */

/* function getValues() {
  // get the values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;
  let customValue = document.getElementById("customValue").value;

  // parse the values in to integers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);
  customValue = parseInt(customValue);

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && fizzValue > 0 && buzzValue > 0 && Number.isInteger(customValue)) {
    // generate the numbers based on user input
    let numbers = generateFizzBuzz(fizzValue, buzzValue, customValue);

    // display result on page
    displayFizzBuzz(numbers);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Only intergers greater than 0 are allowed for FizzBuzz!",
    });
  }
}

function generateFizzBuzz(fizzValue, buzzValue, customValue) {
  let fizzbuzz = [];
  let cap = customValue;

  for (let i = 1; i <= cap; i++) {
    if((i % fizzValue == 0) && (i % buzzValue == 0)){
      fizzbuzz.push('FizzBuzz');
    }
    else if(i % fizzValue == 0){
      fizzbuzz.push('Fizz')
    }
    else if(i % buzzValue == 0){
      fizzbuzz.push('Buzz')
    }    
    else{
      fizzbuzz.push(i);
    }
  }

  return fizzbuzz;
} */