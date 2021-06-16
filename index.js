var form = document.querySelector('.display-box')
var getNum1 = document.getElementById('input1');
var getNum2 = document.getElementById('input2');
var answerHeld = document.getElementById('answer'); 

function calculator(getNum1, getNum2){
    let num1 = parseInt(getNum1.nodeValue);
    let num2 = parseInt(getNum2.nodeValue);
    var operatorNodeList = document.querySelectorAll('.operator');
    var answer = 0; //parseInt(document.X.y.value);


    switch(operatorNodeList.values){
        case(operatorNodeList.values === '+'):
            return addition();
            break;
        case(operatorNodeList.values === '-'):
            return subtraction();
            break;
        case(operatorNodeList.values === '*'):
            return multiplication();
            break;
        case(operatorNodeList.values === '/'):
            return division();
            break;
        default:
            alert('You must use either +, -, *, /');
            break;
    }

    function addition(num1, num2) {
        return answer = num1 + num2;
    }

    function subtraction(num1, num2) {
        return answer = num1 - num2;
    }

    function multiplication(num1, num2) {
        return answer = num1 * num2;
    }

    function division(num1, num2) {
        return answer = num1 / num2;
    }

    return answerHeld.innerHTML(answer);
}

getNum1.addEventListener('input', calculator(num1));
getNum2.addEventListener('input', calculator(num2));

