// ❓DESCRIPTION:
/*
Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
*/

// ✅SOLUTION:
function switchOfStuff(val)
{
    let answer = "";

    switch (val)
    {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    return answer;
}

switchOfStuff(1);