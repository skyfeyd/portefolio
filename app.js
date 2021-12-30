var x = document.querySelector('.img');
var xc = document.querySelector('.content')
var y = document.querySelector('.pres');
var z = document.querySelector('.skills')
var zl = document.querySelector('.skillList')
var p = document.querySelector('.project');
var pl = document.querySelector('.projectList');
var r = document.querySelector('.r');
var o = document.querySelector('.o');
var g = document.querySelector('.g');
var moving = false
var deg = '-45';


close1();
close2();
close3();
close4();



function createHex() {
    var hexCode1 = "";
    var hexValues1 = "0123456789abcdef";
    
    for ( var i = 0; i < 6; i++ ) {
      hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
    }
    return hexCode1;
  }
  
function generate() {



var gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() +")";

document.getElementById('bg').style.background = gradient;
document.getElementById('bg').style.animation = "gradient 15s ease infinite";
document.getElementById('bg').style.backgroundSize = "400% 400%";
}




function close1(){
    if (r.closest = x){
        x.style.height = "0px";
        x.style.width = "0px"
        x.style.opacity = "0";
        xc.style.height = "0px"
        xc.style.width = "0px"
        xc.style.opacity = '0'
    }
}

function close2(){
    y.style.height = "0px";
    y.style.width = "0px"
    y.style.opacity = "0";
}

function close3(){
    z.style.height = "0px";
    z.style.width = "0px"
    z.style.opacity = "0";
}

function close4(){
    p.style.height= '0'        
    p.style.width = '0'
    p.style.opacity = '0'
    pl.style.height= '0'        
    pl.style.width = '0'
    pl.style.opacity = '0'
}

function minimise1(){
    if (o.closest = x){
        x.style.height = '50px'
        x.style.width = '200px'    
        
    }
}

function minimise2(){
    if (o.closest = y){
        y.style.height = '50px'
        y.style.width = '270px'
        
    }
}

function minimise3(){
    if (z.closest = x){
        z.style.height = '50px'
        z.style.width = '200px'
        zl.style.display = 'none'


    }
}

function minimise4(){
    if (p.closest = x){
        p.style.height = '50px'
        p.style.width = '250px'
        pl.style.display = 'none';
        
    }
}

function bigger1(){
    if (x.style.height = '50px'){
        x.style.height = '454px'
        x.style.width = '477px'
        
    }
}


function bigger2(){
    if (y.style.height = '50px'){
        y.style.height = '454px'
        y.style.width = '885px'
        
    }
}



function bigger3(){
    if (z.style.height = '50px'){
        z.style.height = '212px'
        z.style.width = '1452px'
        zl.style.display = 'flex'
        
    }
}

function bigger4(){
    if (p.style.height = '50px'){
        p.style.height = '899px'
        p.style.width = '1759px'
        pl.style.display = 'flex';
        
    }
}

function showX(){
    x.style.height = "454px"
    x.style.width = "477px"
    x.style.opacity = "1"
}

function showY(){
    y.style.height= '454px'        
    y.style.width = '885px'
    y.style.opacity = '1'
}

function showZ(){
    z.style.height= '212px'        
    z.style.width = '1452px'
    z.style.opacity = '1'
    zl.style.height = '212px'
    zl.style.width = '1231px'
    
}

function showP(){
    p.style.height= '899px'        
    p.style.width = '1759px'
    p.style.opacity = '1'
    pl.style.height= '899px'        
    pl.style.width = '1759px'
    pl.style.opacity = '1'

    let allChildren = pl.children
    for(let i=0; i < allChildren.length; i++) {
        allChildren[i].style.height = '300px'
        allChildren[i].style.width = '400px'
        allChildren[i].style.opacity = '1'
    }
}



dragElement(document.querySelector(".file1"));
dragElement(document.querySelector(".file2"));
dragElement(document.querySelector(".file3"));
dragElement(document.querySelector(".file4"));
dragElement(document.querySelector(".ChangeWallpaper"));




function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.onselectstart = function()
{
    window.getSelection().removeAllRanges();
};