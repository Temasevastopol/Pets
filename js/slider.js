const BTN_LEFT = document.querySelectorAll('.slider .button-arrow')[0];
const BTN_RIGHT = document.querySelectorAll('.slider .button-arrow')[1];
const ITEM_ACTIVE = document.querySelector('#item_active');
const SLIDER = document.querySelector('.slider-wraper');
const PETS = {
'charly': '../src/assets/img/pets-charly.png',
'freddie': '../src/assets/img/pets-freddie.png',
'jennifer': '../src/assets/img/pets-jennifer.png',
'katrine': '../src/assets/img/pets-katrine.png',
'scarlet': '../src/assets/img/pets-scarlet.png',
'sophia': '../src/assets/img/pets-sophia.png',
'timmy': '../src/assets/img/pets-timmy.png',
'woody': '../src/assets/img/pets-woody.png',
};

console.log(ITEM_ACTIVE.innerHTML)

let ITEM_LEFT = document.createElement('div');
ITEM_LEFT.classList.add('item_active');
ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;
SLIDER.prepend(ITEM_LEFT);

let ITEM_RIGHT = document.createElement('div');
ITEM_RIGHT.classList.add('item_active');
ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML;
SLIDER.append(ITEM_RIGHT);

ITEM_ACTIVE.classList.add('center')

console.log(ITEM_LEFT);

BTN_LEFT.addEventListener('click', ()=>{
    SLIDER.classList.add("transition-left");
});

BTN_RIGHT.addEventListener('click', ()=>{
    SLIDER.classList.add("transition-right");
});



// help function

function createCard(){
    
}
