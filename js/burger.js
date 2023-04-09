const input = document.querySelector('input');
const burger = document.querySelector('.burger')
const html = document.querySelector('html');

console.log(input, html)

function isChecked(){ 
    if(input.checked){
        html.style.overflow = 'hidden'
    }else{
        html.style.overflow = 'scroll';
    }
}

burger.addEventListener('click', ()=>{
    setTimeout(isChecked, 100)
});