const burger = document.querySelector('.burger');
const closeHamburger = document.querySelector('.closeHamburger');
const bar = document.querySelector('.bar');
const skill1 = document.querySelector('.skill1');
const hoverInformation1 = document.querySelector('.hoverInformation1');
const skill2 = document.querySelector('.skill2');
const hoverInformation2 = document.querySelector('.hoverInformation2');
const skill3 = document.querySelector('.skill3');
const hoverInformation3 = document.querySelector('.hoverInformation3');


bar.addEventListener('click',show);
closeHamburger.addEventListener('click',close);
skill1.addEventListener('mouseover',skillShow1)
hoverInformation1.addEventListener('mouseout', skillClose1)
skill2.addEventListener('mouseover',skillShow2)
hoverInformation2.addEventListener('mouseout', skillClose2)
skill3.addEventListener('mouseover',skillShow)
hoverInformation3.addEventListener('mouseout', skillClose)




function show(){
    burger.style.display = 'flex';
    burger.style.top = '0';

}
function close(){
    burger.style.display = 'none';
    burger.style.top = '-100%';
}


function skillShow1(){
    hoverInformation1.style.display='flex';
    hoverInformation1.style.top = '0';
    
}

function skillClose1(){
    hoverInformation1.style.display = 'none';
    hoverInformation1.style.top = '-100%';
}

function skillShow2(){
    hoverInformation2.style.display='flex';
    hoverInformation2.style.top = '0';
    
}

function skillClose2(){
    hoverInformation2.style.display = 'none';
    hoverInformation2.style.top = '-100%';
}