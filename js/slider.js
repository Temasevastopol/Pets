const BTN_LEFT = document.querySelectorAll('.slider .button-arrow')[0];
const BTN_RIGHT = document.querySelectorAll('.slider .button-arrow')[1];
const SLIDER = document.querySelector('.slider-wraper');

console.log(BTN_LEFT, BTN_RIGHT, SLIDER)

BTN_LEFT.addEventListener('click', ()=>{
    console.log('left');
});

BTN_RIGHT.addEventListener('click', ()=>{
    console.log('right');
});


// help function

function createCard(){
    
}
