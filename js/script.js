var currentNum = ""
var newNum = ""
var operator = ""
var operatorState = false
var calcMain = document.querySelector('.calculator')
var disp = document.getElementById('disp')
var dispValue = ""
var state = ""

// Take input
calcMain.addEventListener('click', function(event){
    let target = event.target
    if (target.className === "btn" && currentNum.length < 8) {
        if (operator === false) {
            currentNum += target.innerText;
            disp.innerText = currentNum;
            return currentNum; 
        }
        else {
            newNum += target.innerText;
            disp.innerText = newNum;
            return newNum;
        }
    }
    else if (target.className === "opbtn" && operatorState == false) {
        disp.textContent = operator
        operator = target.id;
        return operator;
    }
    else if (target.id === "btnclr") {
        disp.innerText = ""
        currentNum = ""
        newNum = ""
        operatorState = false
        return currentNum;
        return operator;
    }
    else if (target.id === "eq") {
        return operation(currentNum, newNum, operator)
        
    }
    
})


// Perform operation on both numbers

function operation(a, b, op) {
    
    switch (operator){
        case "add":
        disp.innerText = add(a,b);
        return dispValue = add(a, b);
        operator = "";
        return operator;
        currentNum = state;
        return currentNum;
        break;

        case "sub":
        disp.innerText = sub(a,b);
        return dispValue = sub(a, b);
        operator = "";
        return operator;
        break;

        case "mult":
        disp.innerText = mult(a,b);
        return dispValue = mult(a, b);
        operator = "";
        return operator;
        break;

        case "divide":
        disp.innerText = divide(a,b);
        return dispValue = divide(a, b);
        operator = "";
        return operator;
        break;
    }
}

function add(a, b) {
    state = Number(a) + Number(b)
    return state
}

function sub(a, b) {
    state =  a - b
    return state
}

function mult(a, b) {
    state = a * b
    return state
}

function divide(a, b) {
    if (b == 0) {
        disp.innerText = "Error"
    }
    else {
    state = a / b
    return state
    }
}


// Clear the number 
