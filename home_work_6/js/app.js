const lights = document.querySelectorAll('.light');
const verticalText = document.getElementById('vertical-text');

const actions = {
    red: 'Красный',
    yellow: 'Жёлтый',
    green: 'Зелёный'
};

function resetLights() {
    lights.forEach(light => {
        light.style.backgroundColor = 'gray';
    });
    verticalText.style.color = 'gray';
    verticalText.textContent = 'Цвет';
}

lights.forEach(light => {
    light.addEventListener('click', () => {
        resetLights();
        const color = light.id;
        light.style.backgroundColor = color;
        verticalText.textContent = actions[color];
        verticalText.style.color = color;
    });
});