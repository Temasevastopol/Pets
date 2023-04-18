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

let keys = Object.keys(PETS);
console.log(keys[keys.length * Math.random() << 0]);

let ITEM_LEFT = document.createElement('div');
ITEM_LEFT.classList.add('item_active');
ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;
SLIDER.prepend(ITEM_LEFT);

let ITEM_RIGHT = document.createElement('div');
ITEM_RIGHT.classList.add('item_active');
ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML;
SLIDER.append(ITEM_RIGHT);

SLIDER.classList.add('center')

console.log(ITEM_LEFT);

BTN_LEFT.addEventListener('click', ()=>{
    SLIDER.classList.add("transition-left");
});

BTN_RIGHT.addEventListener('click', ()=>{
    SLIDER.classList.add("transition-right");
});


// событие влево
SLIDER.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left"){
        SLIDER.classList.remove("transition-left");
        const ITEM_LEFT = document.querySelectorAll('.item_active')[0];
        const leftItems = ITEM_LEFT.innerHTML;        
        document.querySelectorAll('.item_active')[1].innerHTML = leftItems;

        // ITEM_LEFT.innerHTML = "";        
        const CARDS = ITEM_LEFT.querySelectorAll('.card');
        console.log(CARDS);
        CARDS.forEach(card => {
            let randomProperty = randomCard()
            let sliderFoto = card.querySelector('.slider-foto');  
            let textFoto = card.querySelector('h4');
            textFoto.innerHTML = randomProperty;
            sliderFoto.style.backgroundImage = `url(${PETS[randomProperty]})`;
        });

        // ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;

    } else {
        SLIDER.classList.remove("transition-right");
    }
})
// событие вправо
SLIDER.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-right"){
        SLIDER.classList.remove("transition-right");
        const ITEM_RIGHT = document.querySelectorAll('.item_active')[2]
        const rightItems = ITEM_RIGHT.innerHTML;

        document.querySelector('.item_active')[1].innerHTML = leftItems;  

        ITEM_RIGHT.innerHTML = "";
        ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML;

    } else {
        SLIDER.classList.remove("transition-left");
    }
})
// help function

function randomCard(){
    let keys = Object.keys(PETS);
    return keys[keys.length * Math.random() << 0];
}
