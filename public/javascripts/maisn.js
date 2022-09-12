let stats_1 =document.getElementsByClassName('stats_1')[0]
console.log(stats_1);
let mon = document.getElementsByClassName('mon')[0]
function colors1(params) {
    stats_1.style. backgroundColor = 'black'
    stats_1.style.borderColor = 'black'
}
mon.addEventListener('click', colors1)

let stats_2 =document.getElementsByClassName('stats_2')[0]
console.log(stats_2);
let tue = document.getElementsByClassName('tue')[0]
function colors2() {
    stats_2.style. backgroundColor = 'black'
    stats_2.style.borderColor = 'black'
    stats_1.style. backgroundColor = 'hsl(33, 100%, 98%)'
    stats_1.style.borderColor = 'hsl(33, 100%, 98%)'
}
tue.addEventListener('click', colors2)

let stats_3 =document.getElementsByClassName('stats_3')[0]
console.log(stats_3);
let wed = document.getElementsByClassName('wed')[0]
function colors3() {
    stats_3.style. backgroundColor = 'black'
    stats_3.style.borderColor = 'black'
    stats_2.style. backgroundColor = 'hsl(33, 100%, 98%)'
    stats_2.style.borderColor = 'hsl(33, 100%, 98%)'
}
wed.addEventListener('click', colors3)

let stats_4=document.getElementsByClassName('stats_4')[0]
let thu = document.getElementsByClassName('thu')[0]
console.log(thu);
function colors4() {
    stats_4.style. backgroundColor = 'black'
    stats_4.style.borderColor = 'black'
    stats_3.style. backgroundColor = 'hsl(33, 100%, 98%)'
    stats_3.style.borderColor = 'hsl(33, 100%, 98%)'
}
thu.addEventListener('click', colors4)

let stats_5 =document.getElementsByClassName('stats_5')[0]
console.log(stats_5);

let fri= document.getElementsByClassName('fri')[0]
function colors5() {
    stats_5.style. backgroundColor = 'black'
    stats_5.style.borderColor = 'black'
    stats_4.style. backgroundColor = 'hsl(33, 100%, 98%)'
    stats_4.style.borderColor = 'hsl(33, 100%, 98%)'
}
fri.addEventListener('click', colors5)


let stats_6 =document.getElementsByClassName('stats_6')[0]
console.log(stats_6);

let sat = document.getElementsByClassName('sat')[0]
function colors6() {
    stats_6.style. backgroundColor = 'black'
    stats_6.style.borderColor = 'black'
    stats_5.style. backgroundColor = 'hsl(33, 100%, 98%)'
    stats_5.style.borderColor = 'hsl(33, 100%, 98%)'
}
sat.addEventListener('click', colors6)

let stats_7 =document.getElementsByClassName('stats_7')[0]
console.log(stats_7);

let sun = document.getElementsByClassName('sun')[0]
function colors7() {
    stats_7.style. backgroundColor = 'black'
    stats_7.style.borderColor = 'black'
    stats_6.style. backgroundColor = 'hsl(33, 100%, 98%)'
    stats_6.style.borderColor = 'hsl(33, 100%, 98%)'
}
sun.addEventListener('click', colors7)