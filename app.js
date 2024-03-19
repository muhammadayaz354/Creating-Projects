import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "please select your first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "please select your Second number",
        type: "number",
        name: "SecondNumber",
    },
    {
        message: "please select any one operator to perform Action",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Devision"],
    },
]);
if (answer.Operator === "Addition") {
    console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.firstNumber - answer.SecondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.firstNumber * answer.SecondNumber);
}
else if (answer.Operator === "Devision") {
    console.log(answer.firstNumber / answer.SecondNumber);
}
else {
    ("Please Select any valid number");
}
