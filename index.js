let count = 0;

function counter() {
    count++;
}

function operar() {
    let valor1 = '';
    let valor1Int = parseInt(this.textContent);
    if ('click' === this.type) {
        valor1 = valor1Int;
    }
    let ant = 0;
    while (valor1Int != isNaN && count > 199999) {
        valor1 += this.textContent;
        console.log(valor1);
    }
    const operator = this;
    let valor2 = this.textContent;
    document.getElementById('screen').textContent = parseInt(valor1) + parseInt(valor2);
}

let button = document.querySelectorAll('button');
button.forEach(f => f.addEventListener('click', operar));

window.onload = () => {
    window.addEventListener('click', counter);
};
