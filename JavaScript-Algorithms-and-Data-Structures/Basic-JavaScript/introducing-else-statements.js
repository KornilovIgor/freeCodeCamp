// ❓DESCRIPTION:
//Combine the if statements into a single if/else statement.
/*
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  if (val <= 5) {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
*/

// ✅SOLUTION:
function testElse(val)
{
    let result = "";

    if (val > 5)
    {
      result = "Bigger than 5";
    }
    else
    {
      result = "5 or Smaller";
    }

    return result;
}

testElse(4);
