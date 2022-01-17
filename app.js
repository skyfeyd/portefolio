var x = document.querySelector('.img');
var xc = document.querySelector('.content')

var y = document.querySelector('.pres');
var yc = document.querySelector('.Ycontent')

var z = document.querySelector('.skills')
var zl = document.querySelector('.skillList')

var p = document.querySelector('.project');
var pl = document.querySelector('.projectList');
var mp = document.querySelector('.mp')

var p1 = document.querySelector('.project1')
var p1c = document.querySelector('.p1Content')
var lp1 = document.querySelector('.logoP1')

var p2 = document.querySelector('.project2')
var p2c = document.querySelector('.p2Content')
var lp2 = document.querySelector('.logoP2')
var tp2 = document.querySelector('.titleP2')

var p3 = document.querySelector('.project3')
var p3c = document.querySelector('.p3Content')
var lp3 = document.querySelector('.logoP3')
var tp3 = document.querySelector('.titleP3')

var p4 = document.querySelector('.project4')

var r = document.querySelector('.r');
var o = document.querySelector('.o');
var g = document.querySelector('.g');
var moving = false
var deg = '90';
var clickX = 0;
var clickY = 0;
var clickZ = 0;
var clickP = 0;
var draggableX = false
var draggableY = false
var draggableZ = false
var draggableP = false

var file1 = document.querySelector('.file1')
var file2 = document.querySelector('.file2')
var file3 = document.querySelector('.file3')
var file4 = document.querySelector('.file4')

var clic = 0
 

close1();
close2();
close3();
close4();


console.log(clickX)



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
    if(clickX > 0){
        clickX--
    }
    if (r.closest = x){
        x.style.height = "0px";
        x.style.width = "0px"
        x.style.opacity = "0";
        xc.style.display = 'none';
 
    }

}


function close2(){
    if(clickY > 0){
        clickY--
    }
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
        xc.style.display = 'none'
    }
}

function minimise2(){
    if (o.closest = y){
        y.style.height = '50px'
        y.style.width = '270px'
        yc.style.display = 'none'
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
        mp.style.display = 'none';
    }
}

function bigger1(){
    if (x.style.height = '50px'){
        x.style.height = "40%"
        x.style.width = "20%"
        xc.style.display = 'flex'
        
        
    }
}


function bigger2(){
    if (y.style.height = '50px'){
        y.style.height= '44%'        
        y.style.width = '40%'
        yc.style.display = 'flex'
    }
}



function bigger3(){
    if (z.style.height = '50px'){
        z.style.height = '212px'
        z.style.width = '76%'
        zl.style.display = 'flex'
        
    }
}

function bigger4(){
    if (p.style.height = '50px'){
        p.style.height= '70%'        
        p.style.width = '90%'
        pl.style.display = 'flex';
        mp.style.display = 'flex'
    }
}

function showX(){
    console.log(draggableX)
    console.log(clickX)
    clickX += 1
    clickY = 0
    if (clickX == 3){
    x.style.height = "40%"
    x.style.width = "20%"
    x.style.opacity = "1"
    xc.style.display = "flex"
    }
    if (clickX == 1) {
        draggableX = true
        file1.style.border = '1px solid rgba( 255, 255, 255, 0.18 )'
        file1.style.background =  'rgba( 255, 255, 255, 0.25)'
        file1.style.boxShadow = '(0 8px 32px 0 rgba( 31, 38, 135, 0.37)'
        file1.style.backdropFilter = 'blur( 12px )'
        file1.style.WebkitBackdropFilter = 'blur(12px)'
    }

    if (clickX  > 2){
        clickX = 0
    }

    if (clickX == 0){
        draggableX = false
        file1.style.border = 'none'
        file1.style.background =  'none'
        file1.style.boxShadow = 'none'
        file1.style.backdropFilter = 'none'
        file1.style.WebkitBackdropFilter = 'none'
    }
    
    if (clickX == 1){
        dragElement(file1)
    }

    
}

function showY(){
    console.log(draggableY)
    console.log(clickY)
    clickY++
    if(clickY == 3){
        y.style.height= '44%'        
        y.style.width = '40%'
        y.style.opacity = '1'
    }
    if(clickY == 1){
        file2.style.border = '1px solid rgba( 255, 255, 255, 0.18 )'
        file2.style.background =  'rgba( 255, 255, 255, 0.25)'
        file2.style.boxShadow = '(0 8px 32px 0 rgba( 31, 38, 135, 0.37)'
        file2.style.backdropFilter = 'blur( 12px )'
        file2.style.WebkitBackdropFilter = 'blur(12px)'
        dragElement(file2)
        /*while(clickY = 1){
            
        }*/
    }else{
        file2.style.border = 'none'
        file2.style.background =  'none'
        file2.style.boxShadow = 'none'
        file2.style.backdropFilter = 'none'
        file2.style.WebkitBackdropFilter = 'none'
    }
    if (clickY  > 2){
        clickY = 0
    }
    
    
}

function showZ(){
    console.log(draggableZ)
    console.log(clickZ)
    clickZ++
    if(clickZ == 3){
        z.style.height= '212px'         
        z.style.width = '78%'
        z.style.opacity = '1'
        zl.style.height = '212px'
        zl.style.width = '100%'
        zl.style.display = 'flex'
    }
    if(clickZ == 1){
        file3.style.border = '1px solid rgba( 255, 255, 255, 0.18 )'
        file3.style.background =  'rgba( 255, 255, 255, 0.25)'
        file3.style.boxShadow = '(0 8px 32px 0 rgba( 31, 38, 135, 0.37)'
        file3.style.backdropFilter = 'blur( 12px )'
        file3.style.WebkitBackdropFilter = 'blur(12px)'
        dragElement(file3)
        /*while(clickY = 1){
            
        }*/
    }else{
        file3.style.border = 'none'
        file3.style.background =  'none'
        file3.style.boxShadow = 'none'
        file3.style.backdropFilter = 'none'
        file3.style.WebkitBackdropFilter = 'none'
    }
    if (clickZ  > 2){
        clickZ= 0
    }

}

function showP(){
    console.log(draggableZ)
    console.log(clickZ)
    clickP++
    if(clickP == 3){
        p.style.height= '70%'        
        p.style.width = '90%'
        p.style.opacity = '1'
        pl.style.height= '899px'        
        pl.style.width = '1759px'
        pl.style.opacity = '1'
        pl.style.display = 'flex'

        let allChildren = pl.children
    for(let i=0; i < allChildren.length; i++) {
        allChildren[i].style.height = '300px'
        allChildren[i].style.width = '400px'
        allChildren[i].style.opacity = '1'
    }

    }
    if(clickP == 1){
        file4.style.border = '1px solid rgba( 255, 255, 255, 0.18 )'
        file4.style.background =  'rgba( 255, 255, 255, 0.25)'
        file4.style.boxShadow = '(0 8px 32px 0 rgba( 31, 38, 135, 0.37)'
        file4.style.backdropFilter = 'blur( 12px )'
        file4.style.WebkitBackdropFilter = 'blur(12px)'
        dragElement(file4)
        /*while(clickY = 1){
            
        }*/
    }else{
        file4.style.border = 'none'
        file4.style.background =  'none'
        file4.style.boxShadow = 'none'
        file4.style.backdropFilter = 'none'
        file4.style.WebkitBackdropFilter = 'none'
    }
    if (clickP  > 2){
        clickP= 0
    }

}

function openProject(obj, abc){
    console.log(clic)
    var project = obj
    if(project != p4){
        clic++
    }
    if (clic == 1){
    project.style.height = '90%'
    project.style.width = '90%'
    } if (project.style.height != '300px'){
     if (project == p1){
        lp1.style.display = 'none'
        p1c.style.display = 'flex'
        p1.style.hover = 'none'
        
    } if(project == p2) {
        lp2.style.display = 'none'
        p2c.style.display = 'flex'
        p2.style.hover = 'none'
        tp2.style.display = 'none'
    } if(project == p3) {
        lp3.style.display = 'none'
        p3c.style.display = 'flex'
        p3.style.hover = 'none'
        tp3.style.display = 'none'
    }
    } if (clic == 2) {
        project.style.height = '300px'
        project.style.width = '400px'
        if (project.style.height != '90%'){
            if (project == p1){
                lp1.style.display = 'flex'
                p1c.style.display = 'none'
            }if(project == p2) {
                lp2.style.display = 'flex'
                p2c.style.display = 'none'
                tp2.style.display = 'flex'
            }
            if(project == p3) {
                lp3.style.display = 'flex'
                p3c.style.display = 'none'
                tp3.style.display = 'flex'
            }
        }
    }
    if(clic >2){
        clic = 0
    }
}



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