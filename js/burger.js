const input = document.querySelector('input');
const html = document.querySelector('html');

console.log(input, html)

function isChecked(){ 
    if(input.checked){ 
        html.style.overflow = 'hidden'
    }else{
        html.style.overflow = 'scroll';
    }
}

input.addEventListener('change', isChecked);