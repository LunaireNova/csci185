const addNumbers = (ev) => {
   
    let firstNumber = document.querySelector('#num1').value;
   // firstNumber = Number(firstNumber); (Another way for sum)
    let secondNumber = document.querySelector('#num2').value;
    let sum = Number(firstNumber) + Number(secondNumber);
    document.querySelector('#answer').textContent = sum;
    
}

const subtractNumbers = (ev) => {
    let firstNumber = document.querySelector('#num1').value;
    // firstNumber = Number(firstNumber); (Another way for sum)
     let secondNumber = document.querySelector('#num2').value;
     let sum = Number(firstNumber) - Number(secondNumber);
     document.querySelector('#answer').textContent = sum;
    // Same as above but subtract!
}

const multiplyNumbers = (ev) => {
    
        let firstNumber = document.querySelector('#num1').value;
        // firstNumber = Number(firstNumber); (Another way for sum)
         let secondNumber = document.querySelector('#num2').value;
         let sum = Number(firstNumber) * Number(secondNumber);
         document.querySelector('#answer').textContent = sum;
}

const divideNumbers = (ev) => {
    // Same as above but divide!
}

