const burger = document.querySelector('.burger');
const closeHamburger = document.querySelector('.closeHamburger');
const bar = document.querySelector('.bar');





bar.addEventListener('click',show);
closeHamburger.addEventListener('click',close);

function show(){
    burger.style.display = 'flex';
    burger.style.top = '0';

}
function close(){
    burger.style.display = 'none;'
    burger.style.top = '-100%';
}