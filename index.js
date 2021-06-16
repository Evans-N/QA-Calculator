//var form = document.getElementById()


function calculator(){
    let num1 = 0; //parseInt(document.X.y.value);
    let num2 = 0; //parseInt(document.x.y.value);
    var operator = ''; //document.x.y.value;


    switch(operator){
        case(operator === '+'):
            return addition();
            break;
        case(operator === '-'):
            return subtraction();
            break;
        case(operator === '*'):
            return multiplication();
            break;
        case(operator === '/'):
            return division();
            break;
        default:
            alert('You must use either +, -, *, /');
            break;
    }

    function addition(num1, num2) {
        return num1 + num2;
    }

    function subtraction(num1, num2) {
        return num1 - num2;
    }

    function multiplication(num1, num2) {
        return num1 * num2;
    }

    function division(num1, num2) {
        return num1 / num2;
    }
}

