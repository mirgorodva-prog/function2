function pow(x, n) {
  
    let result = x ** n; 
    
   
    return result; 
}

const calcBtn = document.getElementById('calcBtn');
const baseInput = document.getElementById('baseInput');
const exponentInput = document.getElementById('exponentInput');
const resultValue = document.getElementById('resultValue');


calcBtn.addEventListener('click', () => {
    const numX = Number(baseInput.value);
    const numN = Number(exponentInput.value);

    if (numN < 0 || !Number.isInteger(numN)) {
        resultValue.textContent = "Помилка (n має бути цілим і >= 0)";
        return;
    }

    const calculation = pow(numX, numN);
    resultValue.textContent = calculation;
});
