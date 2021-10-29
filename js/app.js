const burger = document.querySelector('.burger');
const closeHamburger = document.querySelector('.closeHamburger');
const bar = document.querySelector('.bar');

const skill1 = document.querySelector('.skill1');
const hoverInformation1 = document.querySelector('.hoverInformation1');
const skill2 = document.querySelector('.skill2');
const hoverInformation2 = document.querySelector('.hoverInformation2');
const skill3 = document.querySelector('.skill3');
const hoverInformation3 = document.querySelector('.hoverInformation3');
const skill4 = document.querySelector('.skill4');
const hoverInformation4 = document.querySelector('.hoverInformation4');
const skill5 = document.querySelector('.skill5');
const hoverInformation5 = document.querySelector('.hoverInformation5');

bar.addEventListener('click',show);
closeHamburger.addEventListener('click',close);

skill1.addEventListener('mouseover',skillShow1)
skill1.addEventListener('mouseout', skillClose1)

skill2.addEventListener('mouseover',skillShow2)
skill2.addEventListener('mouseout', skillClose2)

skill3.addEventListener('mouseover',skillShow3)
skill3.addEventListener('mouseout', skillClose3)

skill4.addEventListener('mouseover',skillShow4)
skill4.addEventListener('mouseout', skillClose4)

skill5.addEventListener('mouseover',skillShow5)
skill5.addEventListener('mouseout', skillClose5)



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

function skillShow3(){
    hoverInformation3.style.display='flex';
    hoverInformation3.style.top = '0';
    
}

function skillClose3(){
    hoverInformation3.style.display = 'none';
    hoverInformation3.style.top = '-100%';
}

function skillShow4(){
    hoverInformation4.style.display='flex';
    hoverInformation4.style.top = '0';
    
}

function skillClose4(){
    hoverInformation4.style.display = 'none';
    hoverInformation4.style.top = '-100%';
}

function skillShow5(){
    hoverInformation5.style.display='flex';
    hoverInformation5.style.top = '0';
    
}

function skillClose5(){
    hoverInformation5.style.display = 'none';
    hoverInformation5.style.top = '-100%';
}