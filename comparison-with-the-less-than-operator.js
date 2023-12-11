// ❓DESCRIPTION:
//Add the less than operator to the indicated lines so that the return statements
//make sense.
/*
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
*/

// ✅SOLUTION:
function testLessThan(val)
{
    if (val < 25)
    {
      return "Under 25";
    }
    if (val < 55)
    {
      return "Under 55";
    }
    return "55 or Over";
  }
  testLessThan(10);