// ❓DESCRIPTION:
/*
Read the values of the properties an entree and the drink of testObj using bracket
notation and assign them to entreeValue and drinkValue respectively.

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line
*/

// ✅SOLUTION:
// Setup
const testObj =
{
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];