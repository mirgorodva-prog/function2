// 1. Правильне створення (декларація) функції
// Функція приймає два параметри: x (число) та n (ступінь)
function pow(x, n) {
    // Використовуємо оператор піднесення до ступеня **
    let result = x ** n; 
    
    // Повертаємо обчислене значення назад туди, звідки викликали функцію
    return result; 
}

// 2. Логіка взаємодії з HTML-сторінкою
const calcBtn = document.getElementById('calcBtn');
const baseInput = document.getElementById('baseInput');
const exponentInput = document.getElementById('exponentInput');
const resultValue = document.getElementById('resultValue');

// Вішаємо слухач подій на кнопку
calcBtn.addEventListener('click', () => {
    // Отримуємо значення з інпутів та перетворюємо їх на числа
    const numX = Number(baseInput.value);
    const numN = Number(exponentInput.value);

    // Перевірка на коректність введення (ступінь має бути цілим числом >= 0)
    if (numN < 0 || !Number.isInteger(numN)) {
        resultValue.textContent = "Помилка (n має бути цілим і >= 0)";
        return;
    }

    // 3. Виклик нашої функції pow та виведення результату на екран
    const calculation = pow(numX, numN);
    resultValue.textContent = calculation;
});