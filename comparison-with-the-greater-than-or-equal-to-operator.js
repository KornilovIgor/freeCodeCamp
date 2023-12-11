// ❓DESCRIPTION:
//Add the greater than or equal to operator to the indicated lines so that the
//return statements make sense.
/*
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
*/

// ✅SOLUTION:
function testGreaterOrEqual(val)
{
    if (val >= 20)
    {
      return "20 or Over";
    }

    if (val >= 10)
    {
      return "10 or Over";
    }

    return "Less than 10";
  }

  testGreaterOrEqual(10);