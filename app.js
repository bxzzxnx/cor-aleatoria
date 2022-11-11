// consts
const button = document.querySelector('.button');
const div = document.querySelector('.container');
const title = document.querySelector('.title');

// functions
const randomColor = () => {
    let color = Math.floor(Math.random() * 0xFFFFFF);
    return `#${color.toString(16).padStart(6,0)}`
};

const changeColor = () => {
    const color = randomColor();
    title.textContent = color.toUpperCase();
    div.style.backgroundColor = color;
};

const copyColor = () => {
    navigator.clipboard.writeText(title.textContent.toUpperCase());
};

// listeners
button.addEventListener('click', changeColor);
title.addEventListener('click', copyColor);


