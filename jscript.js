let container = document.querySelector('.container');

document.querySelector('.btn').style.cursor = 'pointer';

let rgb = document.querySelector('#rainbow');
rgb.addEventListener('click', () => {
    mode = 'rgb';
    switchMode()
});

let mono = document.querySelector('#gray');
mono.addEventListener('click', () => {
    mode = 'mono';
    switchMode()
})

let mode = 'mono';

for (let x = 0; x < 256; x++) {
    let block = document.createElement('div');
    block.classList.add('block');
    block.style.flexBasis = '6%';
    container.appendChild(block);
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    let blocks = document.querySelectorAll('.block');
    for (const x of blocks) {
        x.style.backgroundColor = 'white';
    }
})


const scale = document.querySelector('#scale');
scale.addEventListener('click', () => {
    let x = prompt('Input scale between 1 - 100');
    container.innerHTML = '';
    let num1 = x * x;
    let scale_percent = x * 100 / num1;
    for (let a = 0; a < num1; a++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.flexBasis = `${scale_percent}%`;
        container.appendChild(block);
    }
    switchMode()
})

function paint() {
    let blocks = document.querySelectorAll('.block');
    blocks.forEach((b) => {b.addEventListener('mouseover', (e) => {
        let x = e.target;
        x.style.backgroundColor = 'gray';
})})
}

function rainbow() {
    let blocks = document.querySelectorAll('.block');
    blocks.forEach((b) => {b.addEventListener('mouseover', (e) => {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        let x = e.target;
        x.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
})})
}

function switchMode() {
    if (mode === 'mono') {
        paint()
    }   else if (mode === 'rgb') {
        rainbow()
    }
}

switchMode()