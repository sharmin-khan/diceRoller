document.getElementById('btn').addEventListener('click', () => {
    const numberDice = document.getElementById('numberDice').value;
    const result = document.getElementById('result');
    const image = document.getElementById('image');
    const values = [];
    const images = [];
    for (let i = 0; i < numberDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png">`);
    }
    result.textContent = `dice: ${values.join(', ')}`;
    image.innerHTML = images.join('    ');
})

