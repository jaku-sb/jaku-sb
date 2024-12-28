function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword() {
    const passwordLength = 6; // Длина пароля
    let newPassword = '';

    for (let i = 0; i < passwordLength; i++) {
        newPassword += getRandomInt(0, 9); // Генерация случайной цифры
    }

        const passwordElement = document.getElementById('password');
    passwordElement.textContent = newPassword;
}
