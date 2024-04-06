import inquirer from "inquirer";
import chalk from "chalk";
let currency = {
    USD: 1, //    Base Value
    EUR: 0.92,
    GBP: 0.79,
    JPY: 151.61,
    CAD: 1.36,
    AUD: 1.52,
    NZD: 1.66,
    CHF: 0.90,
    HKD: 7.83,
    SGD: 1.35,
    SEK: 10.68,
    NOK: 10.73,
    DKK: 6.88,
    PLN: 3.95,
    HUF: 360.08,
    CZK: 23.36,
    PKR: 277.54,
    INR: 83.30,
    BRL: 5.05,
    MYR: 4.72,
    THB: 36.52,
    CNY: 7.23,
    RUB: 92.58,
    HRK: 7.02062,
};
let convert = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select your currency",
        choices: ["PKR", "USD", "EUR", "GBP", "JPY", "CAD", "AUD", "NZD", "CHF", "HKD", "SGD", "SEK", "NOK", "DKK", "BRL", "MYR", "THB", "6.52", "CNY", "RUB", "HRK", "PLN", "HUF", "CZK", "INR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter amount"
    },
    {
        name: "to",
        type: "list",
        message: "Select your currency",
        choices: ["PKR", "USD", "EUR", "GBP", "JPY", "CAD", "AUD", "NZD", "CHF", "HKD", "SGD", "SEK", "NOK", "DKK", "BRL", "MYR", "THB", "CNY", "RUB", "HRK", "PLN", "HUF", "CZK", "INR"]
    }
]);
let fromAmount = currency[convert.from];
let toAmount = currency[convert.to];
let amount = convert.amount;
let baseCurrency = amount / fromAmount;
let finalAmount = baseCurrency * toAmount;
console.log(chalk.green(finalAmount));
