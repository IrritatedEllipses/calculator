var operator = ""
var currentNum = ""
var newNum = ""

function math(operator) {


    switch (operator) {
        case "add":
            result = currentNum + newNum;
            break;

        case "subtract":
            result = currentNum - newNum;
            break;

        case "multiply":
            result = currentNum * newNum;
            break;

        case "division":
            result = currentNum / newNum;
            break;



    }
}