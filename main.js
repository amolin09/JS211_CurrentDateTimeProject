// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  let currentDay = currentDate.getDay()
  let currentTime = currentDate.getTime()

  console.log(new Date)

  document.getElementById("display-element").innerHTML = "The current day is " + currentDay + " and the time is " + currentTime;
}
 

// Write a JavaScript program to convert a number to a string.

const turnNumToString = (number) => {
  let newString = number.toString()
  return newString
}



// Write a JavaScript program to convert a string to the number.

const turnStringToNum = (text) => {
  let newNumber = Number(text)
  return newNumber
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const displayDataType = (someVariable) =>{
  const dataType = typeof someVariable
  return someVariable + " is a " + dataType + " data type."
}

  
// Write a JavaScript program that adds 2 numbers together.

const addNumbers = (x, y) => {
  let sum = x + y
  return sum
}

// Write a JavaScript program that runs only when 2 things are true.

const bothTruthChecker = (check1, check2) =>{
  if(check1 && check2){
    return "This is true"
  }

}

// Write a JavaScript program that runs when 1 of 2 things are true.

const eitherTruthChecker = (check1, check2) =>{
  if(check1 || check2){
    return "At least one of these is true"
  }
}

// Write a JavaScript program that runs when both things are not true.  

const falseChecker = (check1, check2) =>{
  if(!check1 && !check2){
    return "Both of these are false"
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
