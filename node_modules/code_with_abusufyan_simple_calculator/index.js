#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to my Simple Calculator\n");
const answer = await inquirer.prompt([
    { message: "\n\t1) Enter first number", type: "number", name: "firstNo" },
    { message: "\n\t2) Enter second number", type: "number", name: "secondNo" },
    {
        message: "\n\t3) Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNo + answer.secondNo);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNo - answer.secondNo);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNo * answer.secondNo);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNo / answer.secondNo);
}
else {
    console.log("Please enter a valid operator");
}
