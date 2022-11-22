const COLORPALLETE = [
    {
        text: '#E3DCD2',
        background: '#013328',
        buttons: '#cc8b65'
    },
    {
        text: '#a3b4c8',
        background: '#022e51',
        buttons: '#cc6d3d'
    },
    {
        text: '#1f276f',
        background: '#f5f8ff',
        buttons: '#8b7ffe'
    }
];


let html = document.querySelector('html');
let circle = document.getElementById('circle');
let header = document.querySelector('header');
let right = document.querySelector('.random');
let left = document.querySelector('.side-left');

let updateNav = (textColor) => {
    header.style.setProperty("--text-color", textColor);
}

let updateSides = (buttonColor) => {
    circle.style.backgroundColor = buttonColor;
    right.style.setProperty("--back-color", buttonColor);
    left.style.setProperty("--back-color", buttonColor);
}

const random = () => {
    return Math.floor(Math.random() * COLORPALLETE.length);
}

circle.onclick = function(){
    let pallete = random();
    html.style.backgroundColor = COLORPALLETE[pallete].background;
    updateNav(COLORPALLETE[pallete].text);
    updateSides(COLORPALLETE[pallete].buttons);
}