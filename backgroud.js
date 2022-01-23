const colors = ['#2e2e2e', 'rgb(26, 26, 26)', '#707070', '#a7a7a7'];
const random = Math.floor(Math.random() * colors.length);
const bg = document.querySelector('body');

bg.style.backgroundColor = colors[random];
