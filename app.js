const img = document.querySelector('.img')
const pres = document.querySelector('.pres')
const skills = document.querySelector('.skills')
const projects = document.querySelector('.projects')

const file = document.querySelectorAll('.file')
const buttons = document.querySelectorAll('.buttons')
const projectsPage = document.querySelectorAll('.project')

const circle = document.querySelector('.circle')

const galerie = document.querySelector('.galerie')

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
                skills.style.height= '26%'        
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
                projects.style.height= '90vh'        
                projects.style.width = '90%'
                projects.style.opacity = '1'/*
                galerie.style.flexDirection = "column"
                galerie.style.position = "relative"
                let allChildrenGal = galerie.children
                for(let i=0; i < allChildrenGal.length; i++) {  
                    allChildrenGal[i].style.width = '90%'
                    allChildrenGal[i].style.margin = '5%'
                }*/
                
                let allChildren = projects.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'flex'
                    //allChildren[i].style.width = '0px'
                }
            }else{
                projects.style.height= '800px'        
                projects.style.width = '90%'
                projects.style.opacity = '1'/*
                galerie.style.flexDirection = "row"
                galerie.style.position = "absolute"
                let allChildrenGal = galerie.children
                for(let i=0; i < allChildrenGal.length; i++) {  
                    allChildrenGal[i].style.width = '20%'
                    allChildrenGal[i].style.margin = '5%'
                }*/
                
                let allChildren = projects.children
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
            skills.style.height= '26%'        
            skills.style.width = '70%'
            skills.style.opacity = '1'
            skills.children[2].style.display = "flex"
        }
        if (event.target.className === "close f4"){
            projects.style.width = "0px"
            projects.style.height = "0px"
            projects.style.opacity = "0"

            let allChildren =  projects.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'none'
                    //allChildren[i].style.width = '0px'
            }
        }
        if (event.target.className === "minimise f4"){
            console.log(skills.children)
            projects.style.height = '50px'
            projects.style.width = '220px'
            projects.style.padding = '0px'
            projects.children[2].style.display = 'none'
            /*
            let allChildren = img.children
                for(let i=0; i < allChildren.length; i++) {
                    allChildren[i].style.display = 'none'
                    //allChildren[i].style.width = '0px'
            }*/
        }
        if (event.target.className === "bigger f4"){
            projects.style.height= '800px'        
            projects.style.width = '90%'
            projects.style.opacity = '1'
            projects.children[2].style.display = "flex"
        }

    
        
    })
})


projectsPage.forEach(projectsPage => {
    addEventListener('click', event => {
        console.log(event.target.className)
        if (event.target.className === 'project' || event.target.className === 'logo'){
            if (w1.matches){
                projectsPage.style.width = "100%"
                projectsPage.style.height = "auto"
                projectsPage.children[0].style.display = "none"
                projectsPage.children[1].style.display = "flex"
            } else {
                console.log(projectsPage.children[1])
                projectsPage.style.width = "100%"
                projectsPage.style.height = "90%"
                projectsPage.children[0].style.display = "none"
                projectsPage.children[1].style.display = "flex"
                //projectsPage.children[1].classList.remove("responsiveProject")
            }
            
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
    projects.style.width = "0%"
    projects.style.height = "0%"
    projects.style.opacity = '0'

    let allChildren = projects.children
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



