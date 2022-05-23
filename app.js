const img = document.querySelector('.img')
const pres = document.querySelector('.pres')
const skills = document.querySelector('.skills')
const project = document.querySelector('.projects')

const PEPIF = document.querySelector('.PEPIF')
const POKAPI = document.querySelector('.POKAPI')
const MOCKUPS = document.querySelector('.MOCKUPS')
const POO = document.querySelector('.POO')
const sf1 = document.querySelector('.sf1')
const sf2 = document.querySelector('.sf2')


const file = document.querySelectorAll('.file')
const buttons = document.querySelectorAll('.buttons')
const projectsPage = document.querySelectorAll('.project')

const circle = document.querySelector('.circle')

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


var clic = 0

//responsive design
var w1 = window.matchMedia("(max-width: 850px)")



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


close1()
close2()
close3()
close4()



file.forEach(file => {
    addEventListener('click', event => {
        console.log(event.target.className)
        if (event.target.className === 'file1')
        {
            if(w1.matches) {
                img.style.width = "90%"
                img.style.height = "40%"
                img.style.opacity = '1'

                let allChildren = img.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'flex'
                    //allChildren[i].style.width = '0px'
                }

            }else{
                img.style.height = "40%"
                img.style.width = "20%"
                img.style.opacity = "1"
                //xc.style.display = "flex"
                //xb.style.display = "flex"

                let allChildren = img.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'flex'
                    //allChildren[i].style.width = '0px'
                }
            }
        }
        else if (event.target.className === 'file2')
        {
            if(w1.matches) {
                pres.style.width = '100%'
                pres.style.height = '40%'
                pres.style.opacity = '1'
                //yc.style.display = 'flex'
                //yb.style.display = 'flex'

                let allChildren = pres.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'flex'
                    //allChildren[i].style.width = '0px'
                }
            }else{
                pres.style.height= '34%'        
                pres.style.width = '40%'
                pres.style.opacity = '1'
                //pres.style.transform = "translateX(800px)";
                //yc.style.display = 'flex'
                //yb.style.display = 'flex'

                let allChildren = pres.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'flex'
                    //allChildren[i].style.width = '0px'
                }
            }
        } else if (event.target.className === 'file3') {
            if(w1.matches) {
                skills.style.width = '99%'
                skills.style.height = '30%'
                skills.style.opacity = '1'
                skills.children[0].style.marginLeft = "0px" 
                
                //yc.style.display = 'flex'
                //yb.style.display = 'flex'

                let allChildren = skills.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'flex'
                    //allChildren[i].style.width = '0px'
                }

            }else{
                skills.style.height= '22%'        
                skills.style.width = '70%'
                skills.style.opacity = '1'
                //skills.style.transform = "translateY(300px)";
                //yc.style.display = 'flex'
                //yb.style.display = 'flex'

                let allChildren = skills.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'flex'
                    //allChildren[i].style.width = '0px'
                }
            }
        }
        else if (event.target.className === 'file4')
        {   
            if(w1.matches) {
                project.style.height= '60%'        
                project.style.width = '90%'
                project.style.opacity = '1'
                //pl.style.height= '899px'        
                //pl.style.width = '1759px'
                //pl.style.opacity = '1'
                //pl.style.display = 'flex'
                
                let allChildren = project.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'flex'
                    //allChildren[i].style.width = '0px'
                }
            }else{
                project.style.height= '800px'        
                project.style.width = '90%'
                project.style.opacity = '1'
                //pl.style.height= '899px'        
                //pl.style.width = '1759px'
                //pl.style.opacity = '1'
                //pl.style.display = 'flex'
                
                let allChildren = project.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'flex'
                    
                    //allChildren[i].style.width = '0px'
                }
                    
            }
        }
    })
})



buttons.forEach(buttons => {
    addEventListener('click', event => {
        if (event.target.className === "close f1"){
            console.log(img.children)
            img.style.width = "0px" 
            img.style.height = "0px"
            img.style.opacity = "0"

            let allChildren = img.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'none'
                    //allChildren[i].style.width = '0px'
            }
        }
        if (event.target.className === "minimise f1"){
            console.log(img.children)
            img.style.height = '50px'
            img.style.width = '200px' 
            img.style.padding = '0px'
            img.children[1].style.display = 'none'
            /*
            let allChildren = img.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'none'
                    //allChildren[i].style.width = '0px'
            }*/
        }
        if (event.target.className === "bigger f1"){
                img.style.height = "40%"
                img.style.width = "20%"
                img.style.opacity = "1"
                img.children[1].style.display = "flex"
        }
        if (event.target.className === "close f2"){
            pres.style.width = "0px"
            pres.style.height = "0px"
            pres.style.opacity = "0"

            let allChildren = pres.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'none'
                    //allChildren[i].style.width = '0px'
            }
        }
        if (event.target.className === "minimise f2"){
            console.log(pres.children)
            pres.style.height = '50px'
            pres.style.width = '270px' 
            pres.style.padding = '0px'
            pres.children[1].style.display = 'none'
            /*
            let allChildren = img.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'none'
                    //allChildren[i].style.width = '0px'
            }*/
        }
        if (event.target.className === "bigger f2"){
            pres.style.height= '34%'        
            pres.style.width = '40%'
            pres.style.opacity = '1'
            pres.children[1].style.display = "flex"
        }
        if (event.target.className === "close f3"){
            skills.style.width = "0px"
            skills.style.height = "0px"
            skills.style.opacity = "0"
            skills.style.transform = "translateY(-5px)";

            let allChildren = skills.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'none'
                    //allChildren[i].style.width = '0px'
            }
        }
        if (event.target.className === "minimise f3"){
            console.log(skills.children)
            skills.style.height = '50px'
            skills.style.width = '200px'
            skills.style.padding = '0px'
            skills.children[2].style.display = 'none'
            /*
            let allChildren = img.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'none'
                    //allChildren[i].style.width = '0px'
            }*/
        }
        if (event.target.className === "bigger f3"){
            skills.style.height= '30%'        
            skills.style.width = '85%'
            skills.style.opacity = '1'
            skills.children[2].style.display = "flex"
        }
        if (event.target.className === "close f4"){
            project.style.width = "0px"
            project.style.height = "0px"
            project.style.opacity = "0"

            let allChildren =  project.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'none'
                    //allChildren[i].style.width = '0px'
            }
        }
        if (event.target.className === "minimise f4"){
            console.log(skills.children)
            project.style.height = '50px'
            project.style.width = '220px'
            project.style.padding = '0px'
            project.children[2].style.display = 'none'
            /*
            let allChildren = img.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'none'
                    //allChildren[i].style.width = '0px'
            }*/
        }
        if (event.target.className === "bigger f4"){
            project.style.height= '800px'        
            project.style.width = '90%'
            project.style.opacity = '1'
            project.children[2].style.display = "flex"
        }

    
        
    })
})


projectsPage.forEach(projectsPage => {
    addEventListener('click', event => {
        console.log(event.target.className)
        if (event.target.className === 'project PEPIF' || event.target.className === 'logoP1'){
            PEPIF.style.width = "100%"
            PEPIF.style.height = "90%"
            PEPIF.children[0].style.display = "none"
            PEPIF.children[1].style.display = "flex"
        } else if (event.target.className === 'project POKAPI' || event.target.className === 'logoP2'){
            POKAPI.style.width = "100%"
            POKAPI.style.height = "90%"
            POKAPI.children[0].style.display = "none"
            POKAPI.children[1].style.display = "flex"
        } else if (event.target.className === 'project MOCKUPS' || event.target.className === 'logoP3'){
            MOCKUPS.style.width = "100%"
            MOCKUPS.style.height = "90%"
            MOCKUPS.children[0].style.display = "none"
            MOCKUPS.children[1].style.display = "flex"
        } else if (event.target.className === 'project POO' || event.target.className === 'logoP4'){
            POO.style.width = "100%"
            POO.style.height = "90%"
            POO.children[0].style.display = "none"
            POO.children[1].style.display = "flex"
        } else if (event.target.className === 'project sf1' || event.target.className === 'logoP5'){
            sf1.style.width = "100%"
            sf1.style.height = "90%"
            sf1.children[0].style.display = "none"
            sf1.children[1].style.display = "flex"
        }  else if (event.target.className === 'project sf2' || event.target.className === 'logoP6'){
            sf2.style.width = "100%"
            sf2.style.height = "90%"
            sf2.children[0].style.display = "none"
            sf2.children[1].style.display = "flex"
        } 
    })
})




function close1(){
    img.style.width = "0%"
    img.style.height = "0%"
    img.style.opacity = '0'

    let allChildren = img.children
    for(let i=0; i < allChildren.length; i++) {
        allChildren[i].style.display = 'none'
        //allChildren[i].style.width = '0px'
    }
}

function close2(){
    pres.style.width = "0%"
    pres.style.height = "0%"
    pres.style.opacity = '0'

    let allChildren = pres.children
    for(let i=0; i < allChildren.length; i++) {
        allChildren[i].style.display = 'none'
        //allChildren[i].style.width = '0px'
    }
}

function close3(){
    skills.style.width = "0%"
    skills.style.height = "0%"
    skills.style.opacity = '0'

    let allChildren = skills.children
    for(let i=0; i < allChildren.length; i++) {
        allChildren[i].style.display = 'none'
        //allChildren[i].style.width = '0px'
    }
}

function close4(){
    project.style.width = "0%"
    project.style.height = "0%"
    project.style.opacity = '0'

    let allChildren = project.children
    for(let i=0; i < allChildren.length; i++) {
        allChildren[i].style.display = 'none'
        //allChildren[i].style.width = '0px'
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



