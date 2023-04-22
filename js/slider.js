const BTN_LEFT = document.querySelectorAll('.slider .button-arrow')[0];
const BTN_RIGHT = document.querySelectorAll('.slider .button-arrow')[1];
const ITEM_ACTIVE = document.querySelector('#item_active');
const SLIDER = document.querySelector('.slider-wraper');
const PETS = {
'Charly': '../src/assets/img/pets-charly.png',
'Freddie': '../src/assets/img/pets-freddie.png',
'Jennifer': '../src/assets/img/pets-jennifer.png',
'Katrine': '../src/assets/img/pets-katrine.png',
'Scarlet': '../src/assets/img/pets-scarlet.png',
'Sophia': '../src/assets/img/pets-sophia.png',
'Timmy': '../src/assets/img/pets-timmy.png',
'Woody': '../src/assets/img/pets-woody.png',
};

let arrValid =[], numberOfFoto = 3, switchButton = false;

preloadImg();
window.addEventListener('resize', sizeWindowtInfo)
numberOf();
sizeWindowtInfo();

let ITEM_LEFT = document.createElement('div');
ITEM_LEFT.classList.add('item_active');
ITEM_LEFT.innerHTML = ITEM_ACTIVE.innerHTML;
SLIDER.prepend(ITEM_LEFT);

let ITEM_RIGHT = document.createElement('div');
ITEM_RIGHT.classList.add('item_active');
ITEM_RIGHT.innerHTML = ITEM_ACTIVE.innerHTML;
SLIDER.append(ITEM_RIGHT);

SLIDER.classList.add('center')


BTN_LEFT.addEventListener('click', ()=>{
    if (switchButton){
        return
    }
    chaingeFotoCard(ITEM_LEFT.querySelectorAll('.card'));
    SLIDER.classList.add("transition-left");
    switchButton = true;
});

BTN_RIGHT.addEventListener('click', ()=>{
    if (switchButton){
        return
    }
    chaingeFotoCard(ITEM_RIGHT.querySelectorAll('.card'));
    SLIDER.classList.add("transition-right");
    switchButton = true;
});

// событие влево
SLIDER.addEventListener("animationend", (animationEvent) => {    

    if (animationEvent.animationName === "move-left"){
        SLIDER.classList.remove("transition-left");
        let ITEM_LEFT = document.querySelectorAll('.item_active')[0]; 
        const leftItems = ITEM_LEFT.innerHTML;
        document.querySelectorAll('.item_active')[1].innerHTML = leftItems;

        switchButton = false;
    } else {
        SLIDER.classList.remove("transition-right");
    }
})

// событие вправо
SLIDER.addEventListener("animationend", (animationEvent) => {    

    if (animationEvent.animationName === "move-right"){
        SLIDER.classList.remove("transition-right");
        let ITEM_RIGHT = document.querySelectorAll('.item_active')[2]; 
        const rightItems = ITEM_RIGHT.innerHTML;
        document.querySelectorAll('.item_active')[1].innerHTML = rightItems;

        switchButton = false;
    } else {
        SLIDER.classList.remove("transition-left");
    }
})

// help function

function randomCard(){
    let keys = Object.keys(PETS);
    let randomKey = keys[keys.length * Math.random() << 0]
    return isValid(randomKey) ? randomKey : randomCard();
}

function isValid(key){
    let result = true
    arrValid.forEach(el =>{
        if(el === key){
            result = false
        }
    });
    if(result){
        arrValid.push(key)
    }
    console.log(arrValid)
    if(arrValid.length === numberOfFoto){
        arrValid = [];
    }
    return result
}

function chaingeFotoCard(side){
    
    const CARDS = side;
    
    CARDS.forEach(card => {
        let randomProperty = randomCard()        
        let sliderFoto = card.querySelector('.slider-foto');
        let textFoto = card.querySelector('h4');
        textFoto.innerHTML = randomProperty;
        sliderFoto.style.backgroundImage = `url(${PETS[randomProperty]})`;
    });
}

function preloadImg(){
    const img = document.createElement('img')
    const pathImg = Object.values(PETS);
    pathImg.forEach(path => {
        img.style.backgroundImage = `url(${path})`;
    })
}

function sizeWindowtInfo(){    
    numberOf();
    let sliderWraperWidth = SLIDER.offsetWidth;
    document.documentElement.style.setProperty('--slider-size', `-${sliderWraperWidth}px`)
}
function numberOf(){
    let windowWidth = window.innerWidth;
    if (windowWidth > 1200){
        numberOfFoto = 3;
    }
    if (windowWidth >= 715 && windowWidth <= 1200){
        numberOfFoto = 2;
    } 
    if (windowWidth < 715) {
        numberOfFoto = 1;
    }
}