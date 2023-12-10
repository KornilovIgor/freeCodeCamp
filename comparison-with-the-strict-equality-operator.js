// ❓DESCRIPTION:
//Use the strict equality operator in the if statement so the function will return the string Equal when val is
// strictly equal to 7.
//
// // Setup
// function testStrict(val) {
//     if (val) { // Change this line
//         return "Equal";
//     }
//     return "Not Equal";
// }
//
// testStrict(10);

// ✅SOLUTION:
// Setup
function testStrict(val)
{
    if (val === 7)
    {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);
