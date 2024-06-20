#! /usr/bin/env node

// #Project Statement
//### Develop a simple command line calculator using TypeScript, Node.js and Inquirer.

import inquirer from "inquirer";

function addition(num1: number, num2: number) {
  return num1 + num2;
}

function subtraction(num1: number, num2: number) {
  return num1 - num2;
}

function multiplication(num1: number, num2: number) {
  return num1 * num2;
}

function division(num1: number, num2: number) {
  return num1 / num2;
}
function per(num1: number, num2: number) {
  console.log("Received Number", num1);
  console.log("Total Number", num2);
  
  return("Percentage : "+ (num1*100)/num2);
}

while (true) {
  const useResponse = await inquirer.prompt([
    {
      message: "Enter your first number:\n",
      type: "number",
      name: "firstNumber",
    },
    {
      message: "Enter your second number:\n",
      type: "number",
      name: "secondNumber",
    },
    {
      message: "Please select operation you want to perform.\n",
      type: "list",
      name: "operator",
      choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Percentage"
        ,"Exit"
      ],
    },
  ]);

  if (useResponse.operator==="Exit" || useResponse.operator==="e" || useResponse.operator==="E"){
    break;
  }

  switch (useResponse.operator) {
    case "Addition":
      console.log(
        `First Number: ${useResponse.firstNumber} ` +
          `Second Number: ${useResponse.secondNumber} ` +
          `\nResult: ${addition(
            useResponse.firstNumber,
            useResponse.secondNumber
          )}`
      );
      break;

      case "Subtraction":
      console.log(
        `First Number: ${useResponse.firstNumber} ` +
          `Second Number: ${useResponse.secondNumber} ` +
          `\nResult: ${subtraction(
            useResponse.firstNumber,
            useResponse.secondNumber
          )}`
      );
      break;

      case "Multiplication":
      console.log(
        `First Number: ${useResponse.firstNumber} ` +
          `Second Number: ${useResponse.secondNumber} ` +
          `\nResult: ${multiplication(
            useResponse.firstNumber,
            useResponse.secondNumber
          )}`
      );
      break;

      case "Division":
      console.log(
        `First Number: ${useResponse.firstNumber} ` +
        `Second Number: ${useResponse.secondNumber} `);
        if (useResponse.secondNumber===0){
          console.log(`${useResponse.firstNumber} cannot be divided by zero. "Undefined"`);
          
        }else{
          console.log(`\nResult: ${division(
            useResponse.firstNumber,
            useResponse.secondNumber)}`)
        }
      break;

      case "Percentage":
        console.log(
          `First Number: ${useResponse.firstNumber} ` +
            `Second Number: ${useResponse.secondNumber} ` +
            `\nResult: ${per(
              useResponse.firstNumber,
              useResponse.secondNumber
            )}`
        );
        break;

    default:
      console.log("Invalid Choice");

      break;
  }
}
