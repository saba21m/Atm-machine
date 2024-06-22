#! usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;

let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
    {
        name:"pin", 
        type:"number",
        message:"Enter your pin"
    }
]
);
if(pinAnswer.pin === myPin){
    console.log("correct pin code!!!");

   let operationAns = await inquirer.prompt([
        {
            name:"operation",
            message:"plz select option",
            type:"list",
            choices:["withdraw", "cheak balance", "fast cash"]
        }
    ])
    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                message:"Enter your amount",
                type:"number"
            }
        ]);
        
    myBalance -= amountAns.amount;

    console.log("your remmaing balance is:"+ myBalance)
    }
    else if (operationAns.operation === "cheak balance"){
        console.log(`your remmaing balance is: $ {myBalance}`)
    }
    else if (operationAns.operation === "fast cash"){
        let amountAns = await inquirer.prompt([
            {
                name:"cash",
                message:"select your amount",
                type:"list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
    if(myBalance < 10000){
        console.log("unsufficent value");
      }
    
    }
}
else {
    console.log("incorrect pin code!!!!");
}
  