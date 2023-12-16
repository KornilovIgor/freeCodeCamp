// ❓DESCRIPTION:
//Add the greater than operator to the indicated lines so that the return statements make sense.
//
//function testGreaterThan(val) {
//   if (val) {  // Change this line
//     return "Over 100";
//   }
//
//   if (val) {  // Change this line
//     return "Over 10";
//   }
//
//   return "10 or Under";
// }
//
// testGreaterThan(10);

// ✅SOLUTION:
function testGreaterThan(val) {
    if (val > 100)
    {
        return "Over 100";
    }

    if (val > 10)
    {
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);